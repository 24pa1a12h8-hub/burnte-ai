# DEVLOG

## Day 1 — 2026-05-22
**Hours worked:** 3  
**What I did:** Created my own GitHub repository from the project base, pushed the initial code, installed dependencies, ran the app locally, and tested the audit flow until the generate-audit step.  
**What I learned:** I understood how the landing page and guided audit form work, and found that the audit generation currently returns an HTML error instead of JSON.  
**Blockers / what I'm stuck on:** The Generate Audit action shows `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`, likely from a failing API route or missing environment configuration.  
**Plan for tomorrow:** Debug the audit API route, check required environment variables, and make the generate-audit flow return valid JSON.


## Day 2 — 2026-05-23
**Hours worked:** 2  
**What I did:** Investigated the Generate Audit failure, reviewed API routes and environment variable usage, created `.env.local` placeholders, enabled debug flags, and traced the backend flow responsible for audit generation.  
**What I learned:** The audit generation process depends on server-side API routes and external configuration values. Missing environment variables can return HTML error pages instead of JSON responses.  
**Blockers / what I'm stuck on:** The Generate Audit workflow still returns an HTML error page instead of JSON because required backend environment variables and API integrations are not fully configured yet.  
**Plan for tomorrow:** Configure remaining environment values, improve fallback handling, and continue debugging audit result generation.


## Day 3 — 2026-05-24
**Hours worked:** 1.5  
**What I did:** Improved frontend handling for failed audit generation requests by replacing raw JSON parsing errors with cleaner user-facing fallback messaging.  
**What I learned:** Applications should gracefully handle backend/API failures instead of exposing low-level parsing or server errors directly to users.  
**Blockers / what I'm stuck on:** The backend audit workflow still depends on incomplete API/environment configuration.  
**Plan for tomorrow:** Continue stabilizing API integrations and improve backend fallback behavior.

## Day 4 — 2026-05-25
**Hours worked:** TBD  
**What I did:** TBD  
**What I learned:** TBD  
**Blockers / what I'm stuck on:** TBD  
**Plan for tomorrow:** TBD

## Day 5 — 2026-05-26
**Hours worked:** 2  
**What I did:** Improved frontend resilience by adding safer API response parsing logic for failed audit requests. Updated README notes describing current integration stability and fallback behavior.  
**What I learned:** Frontend applications should defensively handle invalid or unexpected API responses instead of assuming all failures return valid JSON payloads.  
**Blockers / what I'm stuck on:** Full production-ready API integration still depends on external service configuration.  
**Plan for tomorrow:** Continue improving audit reliability and polish the overall user experience.

## Day 6 — 2026-05-27
**Hours worked:** 1.5  
**What I did:** Improved audit workflow UX by refining loading and error states, reviewed remaining markdown deliverables, and verified project structure against assignment requirements.  
**What I learned:** Small UX details like loading labels and graceful fallback messaging significantly improve perceived product quality.  
**Blockers / what I'm stuck on:** Some external integrations remain partially mocked or environment-dependent.  
**Plan for tomorrow:** Final polish, repository review, and submission preparation.

## Day 7 — 2026-05-28
**Hours worked:** 2  
**What I did:** Performed final repository review, validated required documentation files, reviewed deployment readiness, and prepared the project for submission.  
**What I learned:** Consistent documentation, structured commits, and realistic debugging notes are as important as writing application code for collaborative engineering work.  
**Blockers / what I'm stuck on:** Remaining production issues are primarily related to external API/service configuration.  
**Plan for tomorrow:** Submission complete.