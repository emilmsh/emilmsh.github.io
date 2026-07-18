# emilhalseth — personal academic site

Emil Halseth's homepage, served by GitHub Pages at <https://emilmsh.github.io>.

Plain static HTML + CSS — **no build step, no dependencies**. Edit `index.html` /
`style.css`, push to `master`, and Pages redeploys within a minute.

- `index.html` — the whole site (single page: about, research, CV, contact)
- `style.css` — styling; light/dark follows the OS via `prefers-color-scheme`
- `assets/portrait.jpg` — portrait photo (hidden automatically if absent)
- `cv.pdf` / `cv-norsk.pdf` — academic CV (English / Norwegian), compiled from the
  `cv/akademisk-*` LaTeX sources in the sibling `Emil-Halseth-CV` repo via
  `node scripts/build-cv.mjs` (see CLAUDE.md)
- `.nojekyll` — tells Pages to serve files as-is (skip Jekyll)

Preview locally: any static server, e.g. `npx http-server . -p 5320`.
