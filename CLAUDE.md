# CLAUDE.md — emilmsh.github.io

Emil Halseth's personal academic site. Plain static HTML + CSS, no build step,
served by GitHub Pages at <https://emilmsh.github.io>. See `README.md` for the
file layout. Edit `index.html` / `style.css`, push to `master`, Pages redeploys.

Typography: body + headings are set in **Libertinus Serif**, self-hosted from
`assets/fonts/*.woff2` (no CDN ships it). Nav, buttons, and small labels stay on
the system sans stack.

## CV sources and build

The CV PDFs served on the site (`cv.pdf`, `cv-norsk.pdf`) are **not** edited
directly — they are compiled from LaTeX sources that live in a sibling repo:

- **Source location:** `C:\Users\EmilMathiasStrømHals\Documents\GitHub\Emil-Halseth-CV`
  (a git repo, remote `github.com/emilmsh/Emil-Halseth-CV`, synced with Overleaf).
- **Site mapping:** `Academic CV English.tex` → `cv.pdf`;
  `Academic CV Norsk.tex` → `cv-norsk.pdf`.
- **Build:** run `node scripts/build-cv.mjs` from this repo. It runs `latexmk`
  (requires TeX Live) in a temp dir and copies the two PDFs into the site root.
  Then commit + push the site repo to deploy.

## Standing permission (granted by Emil)

When Emil provides updated CV information **in connection with this website**,
it is permitted to, without asking each time:

1. **Read/fetch** the CV sources from the `Emil-Halseth-CV` repo above.
2. **Render** them via `scripts/build-cv.mjs` and refresh `cv.pdf` / `cv-norsk.pdf`.
3. **Update back** — edit the `.tex` sources in `Emil-Halseth-CV` to reflect the
   new information, keeping the English and Norwegian versions consistent.

This authorization covers the CV content workflow above. It does **not** waive
the usual confirmation for pushing/publishing: still confirm before `git push`
on either repo (pushing the CV repo also syncs to Overleaf).
