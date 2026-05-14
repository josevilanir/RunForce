# CLAUDE.md

This file provides foundational guidance to Claude Code when working in any repository. Read it in full at the start of each session. The rules defined here establish the minimum quality standard expected.

---

## Session Checklist

Run this at the **start of every session**, before any action:

1. Read `tasks/lessons.md` — apply all learned patterns immediately.
2. Identify the project's current stack — never assume.
3. Confirm the scope of the task with the developer before writing code.
4. Check if a relevant Skill applies (see [Available Skills](#available-skills)) — read it before starting.
5. Before implementing anything, run the **Architecture Compliance Check** (see [Workflow → Step 2.5](#workflow)).

---

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Minimal code impact.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Only touch what's necessary. Avoid introducing side-effects.

---

## Stack Decision Framework

**Before writing a single line of code**, read the project requirements and map them to the correct stack from the options below. If the stack is already established (existing repo), respect it — do not introduce new technologies without discussing with the developer first.

### Decision Tree

**Step 1 — What type of project is this?**

```
Is it a landing page or marketing page?
  └─ Yes → go to Step 2 (Landing Page)
  └─ No  → Is it a mobile app?
              └─ Yes → go to Step 2.5 (Mobile)
              └─ No  → go to Step 3 (Application)
```

**Step 2 — Landing Page**

| Signal                                              | Stack                      |
| --------------------------------------------------- | -------------------------- |
| Static content only, no user interaction            | Next.js (static export)    |
| Rich animations, scroll-driven effects, Apple-style | Next.js + Framer Motion    |
| Blog or content-heavy site                          | Next.js (App Router + MDX) |

> **Default for landing pages: Next.js + Vercel**. Do not reach for React + Vite here — Next.js provides SSG/SSR, SEO, and image optimization out of the box with zero extra config.

---

**Step 2.5 — Mobile App**

| Signal                                                   | Stack                                |
| -------------------------------------------------------- | ------------------------------------ |
| Cross-platform (iOS + Android), shared codebase          | **Flutter + Dart**                   |
| Needs to share logic with an existing React web frontend | React Native (discuss first)         |
| Native-only requirement (rare)                           | Discuss with developer before acting |

> **Default for mobile: Flutter**. Excellent performance, single codebase, strong typing with Dart. Use `flutter_riverpod` or `bloc` for state management. API communication via `dio` or `http` packages.

---

**Step 3 — Application: Does it need a separate frontend and backend?**

```
Does the project require:
  - A team with separate front/back responsibilities?
  - A mobile app consuming the same API later?
  - A public API for third-party consumers?
    └─ Yes to any → Decoupled (Step 4)
    └─ No        → Evaluate Monolith (Step 5)
```

**Step 4 — Decoupled (Separate Frontend + Backend)**

| Layer           | Stack                              | When                                      |
| --------------- | ---------------------------------- | ----------------------------------------- |
| Frontend        | **React + Vite**                   | SPAs, dashboards, complex interactive UIs |
| Backend         | **Node.js + Express + TypeScript** | REST APIs, business logic, integrations   |
| ORM             | Prisma                             | Always — type-safe, migrations, great DX  |
| Database        | PostgreSQL                         | Default relational choice                 |
| Auth            | JWT + bcryptjs                     | Stateless, scalable                       |
| Validation      | Zod                                | Schema validation on the API boundary     |
| Background jobs | BullMQ + Redis                     | Async tasks, scheduled cleanup, emails    |
| Deploy          | Vercel (front) + Fly.io (back)     | Default cloud targets                     |

> **Default for decoupled apps: React + Vite / Node.js + Express**

---

**Step 5 — Monolith: How complex is the domain?**

```
Is the project:
  - CRUD-heavy, domain-rich, or team-facing (internal tool, admin panel)?
    └─ Yes → Ruby on Rails (Step 6)
  - Simple, mostly static with minor server interaction?
    └─ Yes → Next.js with API routes (Step 7)
```

**Step 6 — Ruby on Rails Monolith**

Use when: rapid domain modeling matters more than API-first architecture.

| Concern         | Approach                                        |
| --------------- | ----------------------------------------------- |
| Views           | ERB / Hotwire + Turbo (avoid full SPA overhead) |
| Background jobs | Sidekiq + Redis                                 |
| Database        | PostgreSQL                                      |
| Auth            | Devise or custom JWT                            |
| Deploy          | Fly.io                                          |

> **Default for monoliths: Ruby on Rails**. Convention over configuration. Best productivity for solo or small teams building domain-heavy apps.

---

**Step 7 — Next.js with API Routes**

Use when: the app is mostly frontend-driven with light server needs (form submissions, simple data fetching, no complex business logic).

> If the backend logic starts growing beyond 3–4 routes, stop and evaluate whether a full decoupled Express backend is warranted.

---

### Python — When to Use It

Python is **not** part of the web application stack. Use it exclusively for:

| Use Case                           | Tooling                              |
| ---------------------------------- | ------------------------------------ |
| Data pipelines / ETL               | Python + Apache Spark / Pandas       |
| Scheduled scripts / automation     | Python + cron                        |
| Machine Learning / AI integrations | Python + FastAPI (as a microservice) |

> Never introduce Python for web APIs when Node.js + Express or Rails already covers the requirement.

---

### Quick Reference Table

| Project Type             | Frontend                | Backend           | Deploy          |
| ------------------------ | ----------------------- | ----------------- | --------------- |
| Landing page / marketing | Next.js + Framer Motion | —                 | Vercel          |
| SPA + REST API           | React + Vite            | Node.js + Express | Vercel + Fly.io |
| Domain-rich monolith     | Hotwire / ERB           | Ruby on Rails     | Fly.io          |
| Content site / blog      | Next.js (MDX)           | —                 | Vercel          |
| Mobile app               | Flutter                 | Node.js + Express | Fly.io          |
| Data pipeline            | —                       | Python + Spark    | —               |
| ML microservice          | —                       | Python + FastAPI  | —               |

---

### Stack Already Defined? Respect It.

If the repository already has a framework in use, **do not suggest switching stacks mid-project**. Instead:

1. Work within the existing stack.
2. If a clear architectural problem exists, flag it to the developer with a reasoned proposal.
3. Only introduce a new dependency after the developer explicitly approves it.

---

## External API Integrations

When the project consumes third-party APIs (payment gateways, invoice services, government APIs, etc.), follow these rules:

### Security

- **Never** hardcode API keys in source code. Always use environment variables (`.env`).
- `.env` must be listed in `.gitignore` before the first commit — no exceptions.
- Use different keys for development and production environments.

### Reliability

- Always set explicit **timeouts** on HTTP requests (e.g., 10s default).
- Implement **retry logic with exponential backoff** for transient failures (5xx, network errors).
- Apply **circuit breaker** patterns for integrations that are critical to the user flow.
- Log every external request and response (sanitize sensitive data before logging).

### Error Handling

- Never expose raw third-party error messages to the end user.
- Map external errors to internal, user-friendly error codes.
- Handle the following scenarios explicitly: timeout, auth failure (401/403), not found (404), validation error (422), and server error (5xx).

### Response Validation

- Validate external API responses with Zod (or equivalent) before using them in business logic.
- Never trust that a third-party response matches the documented schema.

---

## Available Skills

These skills are loaded automatically. Read the corresponding `SKILL.md` **before starting any task** that falls within a skill's domain — this is mandatory, not optional.

> **Path convention**: Skills are resolved relative to `$CLAUDE_SKILLS_PATH`. If this variable is not set, fall back to `./claude-skills/` from the project root. Never use absolute OS paths.

- **frontend-design**: `$CLAUDE_SKILLS_PATH/frontend-design/SKILL.md`
- **brand-guidelines**: `$CLAUDE_SKILLS_PATH/brand-guidelines/SKILL.md`
- **theme-factory**: `$CLAUDE_SKILLS_PATH/theme-factory/SKILL.md`
- **design-an-interface**: `$CLAUDE_SKILLS_PATH/design-an-interface/SKILL.md`
- **canvas-design**: `$CLAUDE_SKILLS_PATH/canvas-design/SKILL.md`
- **web-artifacts-builder**: `$CLAUDE_SKILLS_PATH/web-artifacts-builder/SKILL.md`
- **webapp-testing**: `$CLAUDE_SKILLS_PATH/webapp-testing/SKILL.md`
- **skill-creator**: `$CLAUDE_SKILLS_PATH/skill-creator/SKILL.md`
- **algorithmic-art**: `$CLAUDE_SKILLS_PATH/algorithmic-art/SKILL.md`
- **claude-api**: `$CLAUDE_SKILLS_PATH/claude-api/SKILL.md`
- **doc-coauthoring**: `$CLAUDE_SKILLS_PATH/doc-coauthoring/SKILL.md`
- **docx**: `$CLAUDE_SKILLS_PATH/docx/SKILL.md`
- **internal-comms**: `$CLAUDE_SKILLS_PATH/internal-comms/SKILL.md`
- **mcp-builder**: `$CLAUDE_SKILLS_PATH/mcp-builder/SKILL.md`
- **pdf**: `$CLAUDE_SKILLS_PATH/pdf/SKILL.md`
- **pptx**: `$CLAUDE_SKILLS_PATH/pptx/SKILL.md`
- **xlsx**: `$CLAUDE_SKILLS_PATH/xlsx/SKILL.md`

> Skills unrelated to the current project type (e.g., `slack-gif-creator` in a backend API project) should be skipped to avoid polluting the context window.

---

## Workflow

### 1. Research Before Acting (Consultative Approach)

- **Study First**: Before implementing complex features, study the existing architecture, dependencies, and project constraints.
- **Propose Improvements**: If a requirement (such as Redis, Docker, or Kafka) would benefit the project, **suggest it to the developer** with a technical rationale before acting.
- **Align with Goals**: Ensure every technical decision aligns with the developer's immediate needs and long-term vision.

### 2. Plan Before Implementing

- Enter plan mode for any non-trivial task (3+ steps or architectural decisions).
- Write the plan to `tasks/todo.md` with checkable items and confirm with the developer before starting implementation.
- If something goes sideways, stop and re-plan immediately — don't keep pushing.

### 2.5. Architecture Compliance Check (MANDATORY)

**NEVER write a single line of implementation code without completing this check first.** This applies to every new feature, fix, or refactor — no exceptions.

Answer each question out loud (in a code comment or planning note) before coding:

**Backend:**

- [ ] Which layer does this logic belong to — Controller, Service/UseCase, or Repository?
- [ ] Is there any business logic leaking into the Controller? → MUST move to Service.
- [ ] Is there any database access outside the Repository? → MUST move to Repository.
- [ ] Are all inputs validated at the API boundary with Zod (or equivalent)?
- [ ] Are errors handled centrally? Are internal errors hidden from the user response?
- [ ] If this touches an external API: are API keys in `.env`? Is there retry + timeout logic?

**Frontend:**

- [ ] Is UI state separated from business logic? → MUST use custom hooks or context.
- [ ] Does this component have a single responsibility? → If not, split it.
- [ ] Is this a base component (Button, Input, Card)? → MUST reuse an existing one, not create a new variant.
- [ ] Is data fetching happening inside a UI component? → MUST extract to a custom hook.
- [ ] Are loading, error, and success states handled?

**Both:**

- [ ] Does this change have tests? → MUST add tests alongside the implementation.
- [ ] Is there any code duplication with existing logic? → MUST extract and reuse.
- [ ] Does the commit follow Conventional Commits format?

> If any answer is "no" and the issue is not immediately fixable, **stop and flag it to the developer** before proceeding.

---

### 3. Subagent Strategy

- Offload research, exploration, and parallel analysis to subagents to keep the main context window clean.
- One focused task per subagent.

### 4. Self-Improvement Loop

- After any correction from the user, update `tasks/lessons.md` with the learned pattern using the template below.
- Write rules that prevent the same mistake from recurring. Review lessons at session start.

**`tasks/lessons.md` entry template:**

```
## [YYYY-MM-DD] — <short title>

**Context**: <what was being built or done>
**Mistake**: <what went wrong or what was misunderstood>
**Root Cause**: <why it happened>
**Rule**: <the rule to follow from now on to prevent recurrence>
```

### 6. Verification Before Done

- **NEVER** mark a task complete without proving it works: run tests, check logs, demonstrate correctness.
- **MUST** also verify architectural conformity before closing any task:
  - No business logic in Controllers.
  - No DB access outside Repositories.
  - No internal errors exposed to users.
  - No God Components on the frontend.
  - All new code covered by tests.
- Mark items complete in `tasks/todo.md` as you go, and add a result summary when finished.
- Ask: "Would a staff engineer approve this?"

### 6. Elegance Check

- For non-trivial changes, pause and ask: "Is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution."
- Skip for simple, obvious fixes.

### 7. Autonomous Bug Fixing

- When given a bug report, just fix it. Point at logs, errors, and failing tests, then resolve them.
- Fix failing tests without being told how.

---

## Commit Convention

All commits must follow **Conventional Commits** format:

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

**Types:**

| Type       | When to use                                          |
| ---------- | ---------------------------------------------------- |
| `feat`     | New feature or capability                            |
| `fix`      | Bug fix                                              |
| `chore`    | Maintenance, dependency updates, config changes      |
| `refactor` | Code change that neither fixes a bug nor adds a feat |
| `docs`     | Documentation only                                   |
| `test`     | Adding or updating tests                             |
| `style`    | Formatting, missing semicolons, whitespace           |
| `perf`     | Performance improvement                              |

**Examples:**

```
feat(auth): add JWT refresh token flow
fix(api): handle 422 response from NFE.io correctly
chore: update Prisma to v5.14
test(invoice): add unit tests for emission service
```

> Keep the short description under 72 characters. Use the imperative mood ("add", "fix", "update" — not "added" or "fixes").

---

## Testing

Testing is not optional. Every non-trivial feature must have tests.

### Scope by Layer

| Layer               | What to test                                         | Tool                  |
| ------------------- | ---------------------------------------------------- | --------------------- |
| Service / UseCase   | Business logic, edge cases, error paths              | Jest / Vitest         |
| Repository          | Query correctness (use in-memory DB or mocks)        | Jest + Prisma mock    |
| API routes          | Status codes, response shape, auth guards            | Supertest             |
| React components    | Render correctness, user interactions, state changes | React Testing Library |
| Critical user flows | End-to-end happy path (login, checkout, key actions) | Playwright or Cypress |

### Rules

- Write tests **alongside** the feature, not after.
- A passing test suite is required before marking any task complete.
- Test file lives next to the implementation: `invoice.service.ts` → `invoice.service.test.ts`.
- Never mock what you don't own (prefer real logic in unit tests; mock only external boundaries).
- External API calls (third-party integrations) **must** be mocked in tests.

---

## Backend Engineering Pillars

Use these five pillars as a framework to analyze the project and suggest improvements:

### Pillar 1: Fundamental Integrity

- Evaluate if the code relies too heavily on framework "magic".
- Propose moving towards a deeper understanding of HTTP, SQL execution, and system constraints when abstractions are causing issues.

### Pillar 2: Strategic Stack Enhancement

- **API Predictability**: Suggest moves toward idiomatic, versioned REST APIs.
- **Caching**: Analyze performance bottlenecks and propose **Redis** for expensive operations where appropriate.
- **Containerization**: Evaluate the benefits of **Docker** for environment parity and suggest implementation if it improves the dev/prod workflow.
- **Async Processing**: Identify heavy tasks and suggest offloading to **background jobs (BullMQ/Redis)** to improve response times.

### Pillar 3: Production-Ready Thinking

- **Observability**: Suggest adding structured logging and health metrics for critical features.
- **Security**: Propose hardening endpoints (JWT, stateless auth, input validation) as part of the implementation plan.
- **Profiling**: If performance is a concern, suggest a profiling phase before optimizing.

### Pillar 4: Architectural Evolution

- **Reliability**: Propose circuit breakers, retries, or better error boundaries for external integrations.
- **Scaling**: Evaluate if the system would benefit from message brokers (**Kafka**) or a microservices split, and discuss these "System Design" paths with the developer.

### Pillar 5: Technical Leadership

- **Quality & Consistency**: Propose refactors that maintain stylistic consistency and improve long-term maintainability.
- **Ownership**: Act as a partner in the project, focusing on real-world user impact and senior-level code standards.

---

## Code Best Practices

These are **mandatory rules**, not suggestions. Every violation found during implementation MUST be fixed before the task is considered complete. If fixing a violation is out of scope, flag it to the developer immediately.

### 1. Componentization

- **MUST** break the interface into small, reusable components with a single responsibility.
- **NEVER** create monolithic "God Components". If a component exceeds ~150 lines, split it.
- **MUST** reuse base components (Button, Input, Card) throughout the project — never duplicate them.
- **MUST** build composite components by composing smaller ones, not by copy-pasting.
- Components **MUST** be predictable and easy to test in isolation.

### 2. Separation of Concerns

- Every layer of the system **MUST** have a clear, defined purpose.
- On the frontend: **MUST** separate UI, logic, and data access — **NEVER** mix them in one file.
- On the backend: **MUST** separate Controller, Service/UseCase, and Repository — **NEVER** skip layers.
- **NEVER** put business rules inside UI components.
- **NEVER** put database queries inside Controllers or UI components.

### 3. Database Modeling

- **MUST** model the database before writing code — entities, attributes, and relationships first.
- **MUST** use primary and foreign keys correctly.
- **NEVER** duplicate data across tables (normalize).
- The model **MUST** reflect real business rules, not implementation shortcuts.

### 4. Migrations

- **MUST** use migrations to version every schema change.
- **NEVER** alter a migration that has already been applied in production.
- **MUST** create one migration per relevant change — atomic and reversible.
- **NEVER** apply schema changes directly to the database without a migration.

### 5. API Design

- **MUST** treat the API as a clear and predictable contract.
- **MUST** use HTTP verbs correctly: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).
- **MUST** use plural nouns in endpoint paths (`/invoices`, not `/invoice`).
- **MUST** standardize all responses and errors with a consistent shape.
- **MUST** version the API from day one (`/api/v1`). **NEVER** ship unversioned endpoints.

### 6. Layered Backend Architecture

- **Controller**: **MUST** only receive the request, delegate to Service, and return the response. Zero business logic.
- **Service/UseCase**: **MUST** contain all business logic. **NEVER** access the database directly.
- **Repository**: **MUST** handle all database access. **NEVER** contain business logic.
- **NEVER** skip a layer — shortcutting creates untestable, unmaintainable code.

### 7. Backend Authentication

- **MUST** use JWT for stateless authentication — **NEVER** store session state server-side unless explicitly required.
- Tokens **MUST** contain only essential, non-sensitive information.
- **MUST** validate tokens in middlewares — **NEVER** in Controllers or Services.
- **MUST** implement authorization (what users can do) separately from authentication (who they are).

### 8. Frontend Authentication

- **MUST** consume auth from the backend — **NEVER** implement auth logic on the frontend.
- **MUST** use Context API (or equivalent) for global auth state.
- **MUST** encapsulate auth logic in custom hooks.
- **MUST** protect all sensitive routes with auth guards.
- **NEVER** store raw JWT tokens in `localStorage` — prefer `httpOnly` cookies when possible.

### 9. Frontend Data Fetching

- **MUST** separate all API calls from the UI layer — **NEVER** call fetch/axios directly inside a component.
- **MUST** use custom hooks to fetch data.
- **MUST** handle loading, error, and success states — **NEVER** leave any state unhandled.
- **MUST** cancel pending requests on component unmount to avoid memory leaks.
- **NEVER** duplicate fetch logic — extract and reuse.

### 10. Error Handling

- **MUST** handle errors in a centralized way — global error handler on the backend, error boundary on the frontend.
- **NEVER** expose internal errors, stack traces, or raw DB messages to the end user.
- **MUST** return clear, user-friendly error messages.
- **MUST** log all errors server-side for debugging — sanitize sensitive data before logging.
- **NEVER** silently swallow errors with empty `catch` blocks.

### 11. Clean Code Design

- **MUST** write small functions with clear, descriptive names — one function, one purpose.
- **NEVER** duplicate logic — extract to a shared utility or helper.
- **MUST** prefer early returns to reduce nesting.
- Code **MUST** be readable first, clever second. If it needs a comment to be understood, rewrite it.
- **NEVER** leave dead code, commented-out blocks, or `console.log` in production commits.

### 12. Background Jobs

- **NEVER** run heavy or time-consuming tasks inside the request/response cycle.
- **MUST** use queues (BullMQ + Redis) for async processing: emails, file generation, data cleanup.
- Workers **MUST** implement retry logic and handle partial failures gracefully.
- **NEVER** fire-and-forget without a way to track job status or failure.

### 13. Domain-Driven Organization

- **MUST** group files by business context (domain), not by technical type.
- **NEVER** use overly generic folder names like `utils/`, `helpers/`, or `misc/` as catch-alls.
- Each domain **MUST** own its services, repositories, and rules — **NEVER** let domains bleed into each other.

### 14. Project Structure as a Guide

- The project structure **MUST** be an explicit architectural decision — document it if non-obvious.
- **MUST** maintain consistency across all modules — a new developer should be able to navigate the project without a guide.
- **NEVER** create one-off folder structures for individual features — follow the established pattern.
