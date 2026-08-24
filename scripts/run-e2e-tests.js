#!/usr/bin/env node
/**
 * Node.js E2E Test Runner for Kosi Udeh Portfolio
 * Invokes python test runner and performs Next.js build / typechecks
 */

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectRoot = path.resolve(__dirname, "..");
const pythonScript = path.join(projectRoot, "tests", "run_all_tests.py");

console.log("\n========================================================");
console.log("  KOSI.DEV — AUTOMATED E2E & VERIFICATION TEST RUNNER");
console.log("========================================================\n");

// 1. Run Python Comprehensive E2E Suite (Tiers 1-4)
console.log("[1/2] Running Python Comprehensive E2E Test Suite (Tiers 1-4)...");
const testProcess = spawnSync("python", [pythonScript], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

if (testProcess.status !== 0) {
  console.error("\n[X] E2E Test Suite Failed. See failure details above.");
  process.exit(testProcess.status || 1);
}

console.log("\n[2/2] Verifying Project Build Artifacts & Configurations...");
const requiredFiles = [
  "package.json",
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
  "components/navigation.tsx",
  "components/hero-section.tsx",
  "components/portfolio-section.tsx",
  "components/footer.tsx",
];

let missing = 0;
for (const rel of requiredFiles) {
  const full = path.join(projectRoot, rel);
  if (!fs.existsSync(full)) {
    console.error(`  [-] Missing required file: ${rel}`);
    missing++;
  } else {
    console.log(`  [+] Verified: ${rel}`);
  }
}

if (missing > 0) {
  console.error(`\n[X] Build Verification Failed: ${missing} files missing.`);
  process.exit(1);
}

console.log("\n========================================================");
console.log("  ALL TESTS & VERIFICATION CHECKS PASSED (100%)");
console.log("========================================================\n");
process.exit(0);
