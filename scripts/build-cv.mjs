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
const cvDir = resolve(siteDir, '..', 'Emil-Halseth-CV')
const buildDir = mkdtempSync(join(tmpdir(), 'cv-build-'))

const targets = [
  { tex: 'Academic CV English.tex', pdf: 'Academic CV English.pdf', out: 'cv.pdf' },
  { tex: 'Academic CV Norsk.tex', pdf: 'Academic CV Norsk.pdf', out: 'cv-norsk.pdf' }
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
