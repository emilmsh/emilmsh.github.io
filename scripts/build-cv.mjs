// Rebuild cv.pdf / cv-norsk.pdf from the LaTeX sources in the sibling
// Emil-Halseth-CV repo (Overleaf-synced). Requires TeX Live (latexmk).
//
//   node scripts/build-cv.mjs
//
// Compiles into a temp dir so no aux files land in either repo.
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const siteDir = resolve(import.meta.dirname, '..')
// Academic sources live in the cv/ subfolder of the sibling CV repo.
const cvDir = resolve(siteDir, '..', 'Emil-Halseth-CV', 'cv')
const buildDir = mkdtempSync(join(tmpdir(), 'cv-build-'))

const targets = [
  { tex: 'akademisk-en.tex', pdf: 'akademisk-en.pdf', out: 'cv.pdf' },
  { tex: 'akademisk-no.tex', pdf: 'akademisk-no.pdf', out: 'cv-norsk.pdf' }
]

try {
  for (const t of targets) {
    console.log(`latexmk: ${t.tex}`)
    execFileSync(
      'latexmk',
      ['-pdf', '-interaction=nonstopmode', `-output-directory=${buildDir}`, t.tex],
      { cwd: cvDir, stdio: ['ignore', 'ignore', 'inherit'] }
    )
    copyFileSync(join(buildDir, t.pdf), join(siteDir, t.out))
    console.log(`  -> ${t.out}`)
  }
} finally {
  rmSync(buildDir, { recursive: true, force: true })
}
console.log('Done. Commit and push the site repo to deploy.')
