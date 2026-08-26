// Next's bundled types declare `*.module.css` but not plain `*.css`, so the
// side-effect import of app/globals.css trips TS2882 in editors running a
// TypeScript newer than the workspace one. Declaring it here keeps the CLI and
// the IDE in agreement.
declare module '*.css'
