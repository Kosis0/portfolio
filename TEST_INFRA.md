# Test Infrastructure & E2E Validation Architecture

## Overview
This document defines the comprehensive end-to-end (E2E), integration, unit, and forensic testing infrastructure for **Kosi Udeh's Paperfolio Portfolio (KOSI.DEV)**.
The test harness provides automated, deterministic, opaque-box and contract verification across 4 structured tiers to ensure full compliance with `ORIGINAL_REQUEST.md` and `PROJECT.md`.

---

## 1. Test Architecture & Tier Hierarchy

```
tests/
├── __init__.py                  # Test package root
├── utils.py                     # Static analysis, DOM parser, regex matcher, contract verifier
├── test_tier1_features.py       # Tier 1: Comprehensive Feature Coverage (Features 1 - 20)
├── test_tier2_boundaries.py     # Tier 2: Boundary, Edge Cases, & Corner Cases
├── test_tier3_integration.py    # Tier 3: Cross-Feature Integration & Contract Synchronization
├── test_tier4_real_world.py     # Tier 4: Real-World Persona Scenarios & Forensic Audit
└── run_all_tests.py             # Primary executable test runner with structured reporting

scripts/
└── run-e2e-tests.js             # Node.js wrapper for CI/CD and cross-platform verification
```

### Test Tiers & Scope

| Tier | Category | Description | Coverage Target |
|---|---|---|---|
| **Tier 1** | **Feature Coverage** | Dedicated test cases for all 20 features in `PROJECT.md § Feature Inventory` | $\ge 5$ tests per feature ($\ge 100$ tests) |
| **Tier 2** | **Boundary & Corner Cases** | Link syntax (E.164, RFC 3966, RFC 5322), viewport limits, extreme lengths, unicode & ampersand escaping, image fallbacks | 12 focused edge cases |
| **Tier 3** | **Cross-Feature Integration** | Data layer synchronization (`data/portfolio-data.ts`), semantic landmark hierarchy, marquee-to-project tech stack alignment, contact link harmony | 8 integration suites |
| **Tier 4** | **Real-World Scenarios** | Recruiter audit journey, client direct WhatsApp/phone contact flow, mobile touch target inspection, senior architect forensic audit | 4 persona scenarios |

---

## 2. Test Execution Commands

### Python Test Runner
```bash
python tests/run_all_tests.py
```
- **Output**: Formatted console report detailing test breakdown by tier, timing, pass rates, and detailed stack traces for any regressions.
- **Exit Code**: Returns `0` on 100% pass rate; non-zero if any test fails.

### Node.js / npm Test Runner
```bash
node scripts/run-e2e-tests.js
```
or via package scripts:
```bash
npm test
# or
pnpm test
```

---

## 3. Authoritative Expected Output Derivation Matrix

Every assertion in the test suite is strictly anchored in authoritative specifications from `ORIGINAL_REQUEST.md` and `PROJECT.md`:

| Test Target | Authoritative Source | Expected Specification |
|---|---|---|
| **Developer Name** | `ORIGINAL_REQUEST.md § R2` | `Kosi Udeh` / `Udeh Kosisochukwu Emmanuel` (`KOSI.DEV`) |
| **Academic Credentials** | `ORIGINAL_REQUEST.md § R2` | `Computer Science Undergraduate (ABUAD)` |
| **WhatsApp Endpoint** | `ORIGINAL_REQUEST.md § R2` | `+2349117950895` / `https://wa.me/2349117950895` |
| **Phone Call Endpoint** | `ORIGINAL_REQUEST.md § R2` | `+2347071070282` / `tel:+2347071070282` |
| **Email Endpoint** | `ORIGINAL_REQUEST.md § R2` | `kosiudeh627@gmail.com` / `mailto:kosiudeh627@gmail.com` |
| **GitHub Account** | `ORIGINAL_REQUEST.md § R2` | `github.com/Kosis0` / `Kosis0` |
| **Project 1** | `PROJECT.md § Feature 9` | **Agentic OS v2**: React 19, FastAPI micro-kernel, wavefront DAG, 4-tier memory bus |
| **Project 2** | `PROJECT.md § Feature 9` | **Nexus ERP & ESS**: React 19, Vite, RBAC Auth, Leave Management, Shift Clock-In, PDF Payslips |
| **Project 3** | `PROJECT.md § Feature 9` | **Mercato E-Commerce**: Next.js 16, Express.js 5, Supabase PostgreSQL, dynamic tenant routing |
| **Project 4** | `PROJECT.md § Feature 9` | **Secure Cloud Record Keeping API**: Python FastAPI, SQLAlchemy ORM, JWT, Bcrypt, Pytest |
| **Project 5** | `PROJECT.md § Feature 9` | **Autonomous Robotics & Sensors**: C++, Arduino, ultrasonic sensor obstacle avoidance, PWM, UART |
| **Project 6** | `PROJECT.md § Feature 9` | **Local Service Web Platform**: React 18, Vite, TypeScript, Tailwind CSS, 100/100 Lighthouse |
| **Visual Asset Rule** | `PROJECT.md § Architecture` | Strictly 100% vector SVG and illustrated cartoon assets (`public/images/`, `public/logos/`). Zero personal photos. |
| **Placeholder Hygiene** | `ORIGINAL_REQUEST.md § R2` | 0 leaks of "John Carter", "VP of Design", "Lacus adipiscing", or template filler text. |

---

## 4. Verification & Forensic Integrity

The test harness enforces adversarial verification:
1. **Placeholder Leak Scanner**: Scans all TSX, TS, CSS, and HTML files for template remnants.
2. **Asset Integrity Inspector**: Validates that all image paths in code point to existing files in `public/`.
3. **Security Audit**: Asserts all external links (`target="_blank"`) specify `rel="noopener noreferrer"` and no raw unescaped HTML injections exist.
4. **Link Format Validator**: Checks that tel, mailto, and wa.me URIs follow RFC standards.
