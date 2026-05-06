#!/usr/bin/env node
// =============================================================================
// prepare-release.mjs — ItsWeber Tools Release Validator
// =============================================================================
// Aufruf:
//   node scripts/prepare-release.mjs --dry-run    Trockenlauf, nur prüfen
//   node scripts/prepare-release.mjs              Validieren
//
// Ergebnis:
//   exit 0  alle Prüfungen ok (oder dry-run)
//   exit 1  mindestens ein FORBIDDEN-Treffer (Hard-Fail) oder anderer Fehler
// =============================================================================

import { execSync } from 'node:child_process';
import path from 'node:path';

// -----------------------------------------------------------------------------
// PROJEKTSPEZIFISCH — was darf in einem Release-Commit auftauchen?
// -----------------------------------------------------------------------------

const ALLOWED_PREFIXES = [
  'apps/',
  'packages/',
  'docker/',
  'docs/',
  'scripts/',
  'public/',
  '.github/',
];

const ALLOWED_ROOT_FILES = [
  'README.md',
  'README.de.md',
  'CHANGELOG.md',
  'LICENSE',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'package.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  'tsconfig.base.json',
  'eslint.config.mjs',
  '.gitignore',
  '.dockerignore',
  '.gitattributes',
  '.editorconfig',
  '.nvmrc',
  '.prettierrc.json',
  '.prettierignore',
  '.env.example',
];

// -----------------------------------------------------------------------------
// HARD-FAILS — diese Pfade/Namen brechen das Release sofort ab
// -----------------------------------------------------------------------------

const FORBIDDEN_DIRS = [
  'docs/internal/',
  'docs/audits/',
  'docs/release-prep/',
  '_archive/',
  'previews/',
  '.claude/',
  '.continue/',
  '.agents/',
  'skills/',
  'memory/',
  'node_modules/',
  '.next/',
  '.vite/',
  '.turbo/',
  'dist/',
  'build/',
  'out/',
  'coverage/',
];

const FORBIDDEN_BASENAMES = [
  'CLAUDE.md',
  'AGENTS.md',
  '.env',
  'skills-lock.json',
];

const FORBIDDEN_GLOBS = [
  /\.env\..*/,
  /\.code-workspace$/,
  /\.jsonl$/,
];

// -----------------------------------------------------------------------------
// HELFER
// -----------------------------------------------------------------------------

const DRY_RUN = process.argv.includes('--dry-run');

function listGitFiles() {
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter(Boolean);
}

function isAllowed(file) {
  if (file.includes('/')) {
    return ALLOWED_PREFIXES.some((p) => file.startsWith(p));
  }
  return ALLOWED_ROOT_FILES.includes(file);
}

function isForbidden(file) {
  if (FORBIDDEN_DIRS.some((p) => file.startsWith(p) || file.includes('/' + p))) return true;
  const base = path.basename(file);
  if (FORBIDDEN_BASENAMES.includes(base)) return true;
  if (FORBIDDEN_GLOBS.some((re) => re.test(file))) return true;
  return false;
}

// -----------------------------------------------------------------------------
// HAUPTPRÜFUNG
// -----------------------------------------------------------------------------

function main() {
  const errors = [];
  const warnings = [];
  const files = listGitFiles();

  console.log(`prepare-release.mjs (ItsWeber Tools) — prüfe ${files.length} Dateien`);
  if (DRY_RUN) console.log('Modus: DRY-RUN');

  for (const f of files) {
    if (isForbidden(f)) {
      errors.push(`FORBIDDEN: ${f}`);
      continue;
    }
    if (!isAllowed(f)) {
      warnings.push(`Nicht in Allowlist: ${f}`);
    }
  }

  if (errors.length) {
    console.error(`\n${errors.length} FEHLER (Release blockiert):`);
    errors.forEach((e) => console.error(`  ✗ ${e}`));
  }
  if (warnings.length) {
    console.warn(`\n${warnings.length} WARNUNGEN:`);
    warnings.forEach((w) => console.warn(`  ! ${w}`));
  }
  if (!errors.length && !warnings.length) {
    console.log('\nAlle Prüfungen bestanden.');
  }

  if (errors.length) process.exit(1);
  if (DRY_RUN) {
    console.log('\nDry-Run abgeschlossen.');
    return;
  }
  console.log('\nRelease-Validierung abgeschlossen.');
}

main();
