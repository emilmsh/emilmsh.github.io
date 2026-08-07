# emilmsh.github.io — personal academic site

Emil Halseth's homepage, served by GitHub Pages at <https://emilmsh.github.io>.

Plain static HTML + CSS — **no build step, no dependencies**. Edit, push to
`master`, and Pages redeploys within a minute.

## Edit these

- `index.html` — the whole site, one page in reading order (about, research,
  software, contact). To add a paper, copy the commented template at the top
  of the Research section.
- `style.css` — all styling. Colors live in the `:root` variables at the top;
  light/dark follows the OS via `prefers-color-scheme`.
- `assets/portrait.jpg` — portrait photo (hidden automatically if absent)
- `assets/favicon.svg` — the EH monogram shown in the browser tab
- `papers/` — paper and appendix PDFs linked from the research list

## Generated — don't edit by hand

- `cv.pdf` / `cv-norsk.pdf` — academic CV (English / Norwegian), compiled from
  the `cv/akademisk-*` LaTeX sources in the sibling `Emil-Halseth-CV` repo via
  `node scripts/build-cv.mjs` (see CLAUDE.md)
- `assets/fonts.css` — Libertinus Serif embedded as base64 data URIs (loaded
  before `style.css` so the face is ready at first paint). Treat it as a
  binary asset; all editable styling is in `style.css`.

## Plumbing (rarely touched)

- `scripts/build-cv.mjs` — the CV build script
- `robots.txt` / `sitemap.xml` — search-engine hints
- `.nojekyll` — tells Pages to serve files as-is (skip Jekyll)

Preview locally: any static server, e.g. `npx http-server . -p 5320`.
