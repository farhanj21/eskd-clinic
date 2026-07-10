#!/usr/bin/env node
/**
 * Photo optimization pipeline — see docs/photo-infrastructure.md
 *
 * Usage:
 *   npm run images                             # convert everything in photos-raw/ → public/assets/incoming/
 *   npm run images -- --width 800              # cards need less than the 1600px default
 *   npm run images -- --out public/assets/heroes
 *   npm run images -- --force                  # re-process files whose output already exists
 *   npm run images -- photos-raw/clinic.jpg    # single file instead of the whole folder
 *
 * Output: <kebab-cased-name>.webp, resized down to max width (never upscaled),
 * quality 80, metadata stripped. Prints before/after sizes per file.
 */
import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const INPUT_EXTS = new Set(['.jpg', '.jpeg', '.png', '.heic', '.heif', '.tiff', '.avif', '.webp'])
const DEFAULT_IN = 'photos-raw'
const DEFAULT_OUT = 'public/assets/incoming'
const DEFAULT_WIDTH = 1600
const QUALITY = 80

function parseArgs(argv) {
  const args = { inputs: [], out: DEFAULT_OUT, width: DEFAULT_WIDTH, force: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--out') args.out = argv[++i]
    else if (a === '--width') args.width = Number(argv[++i])
    else if (a === '--force') args.force = true
    else args.inputs.push(a)
  }
  if (!Number.isFinite(args.width) || args.width <= 0) {
    console.error(`Invalid --width value`)
    process.exit(1)
  }
  return args
}

const kebab = (name) =>
  name
    .replace(/\.[^.]+$/, '')
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`

async function collectInputs(inputs) {
  if (inputs.length === 0) inputs = [DEFAULT_IN]
  const files = []
  for (const input of inputs) {
    if (!existsSync(input)) {
      console.error(`Not found: ${input}`)
      continue
    }
    const s = await stat(input)
    if (s.isDirectory()) {
      for (const entry of await readdir(input)) {
        if (INPUT_EXTS.has(path.extname(entry).toLowerCase())) files.push(path.join(input, entry))
      }
    } else if (INPUT_EXTS.has(path.extname(input).toLowerCase())) {
      files.push(input)
    } else {
      console.error(`Unsupported format, skipping: ${input}`)
    }
  }
  return files
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const files = await collectInputs(args.inputs)

  if (files.length === 0) {
    console.log(`Nothing to do. Drop photos into ${DEFAULT_IN}/ and run again.`)
    if (!existsSync(DEFAULT_IN)) await mkdir(DEFAULT_IN, { recursive: true })
    return
  }

  await mkdir(args.out, { recursive: true })
  let done = 0
  let skipped = 0

  for (const file of files) {
    const outFile = path.join(args.out, `${kebab(path.basename(file))}.webp`)
    if (existsSync(outFile) && !args.force) {
      console.log(`skip (exists)  ${outFile}   — use --force to overwrite`)
      skipped++
      continue
    }
    const before = (await stat(file)).size
    await sharp(file)
      .rotate() // respect EXIF orientation before stripping metadata
      .resize({ width: args.width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile)
    const after = (await stat(outFile)).size
    console.log(`${path.basename(file)}  ${kb(before)} → ${kb(after)}   ${outFile}`)
    done++
  }

  console.log(`\n${done} converted, ${skipped} skipped. Max width ${args.width}px, quality ${QUALITY}, WebP.`)
  if (done > 0) console.log(`Next: move files from ${args.out}/ to their target folder (see docs/photos.md) and add src/alt to the matching <Photo>.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
