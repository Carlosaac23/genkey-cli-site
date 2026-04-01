# Repository Guidelines

## Project Structure & Module Organization

- App source lives in `src/`.
- Entry point: `src/main.tsx`; root UI: `src/App.tsx`.
- Shared utilities belong in `src/lib/` (for example, `src/lib/utils.ts`).
- Reusable UI primitives belong in `src/components/ui/`.
- Global styles live in `src/index.css`.
- Build/tooling config is at the root (`vite.config.ts`, `tsconfig*.json`, `.oxlintrc.json`, `.oxfmtrc.json`).

## Build, Test, and Development Commands

Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: start Vite dev server with HMR.
- `pnpm build`: run TypeScript project build (`tsc -b`) and produce production assets via Vite.
- `pnpm preview`: serve the production build locally.
- `pnpm lint`: run `oxlint` checks.
- `pnpm lint:fix`: auto-fix lint issues where possible.
- `pnpm fmt`: format code with `oxfmt`.
- `pnpm fmt:check`: verify formatting without changing files.

## Coding Style & Naming Conventions

- Language: TypeScript + React (ES modules).
- Follow formatter settings in `.oxfmtrc.json`: single quotes, trailing commas (`es5`), and import sorting.
- Keep strict TypeScript compatibility (`strict`, `noUnusedLocals`, `noUnusedParameters`).
- Use path alias `@/*` for imports from `src/*` (example: `import { cn } from '@/lib/utils';`).
- Components: PascalCase filenames for feature components; lowercase for shadcn-style primitives under `src/components/ui/`.

## Testing Guidelines

- No test runner is configured yet in `package.json`.
- Minimum pre-PR quality gate is: `pnpm lint && pnpm fmt:check && pnpm build`.
- If you add tests, colocate as `*.test.ts` or `*.test.tsx` near the module under test and document the new command in `package.json`.

## Commit & Pull Request Guidelines

- Current history follows Conventional Commits with `chore:` prefixes (for example, `chore: add custom scripts`).
- Prefer `<type>: <short imperative summary>` (example: `feat: add hero CTA button`).
- Keep commits focused and logically scoped.
- PRs should include:
  - concise description of what changed and why,
  - linked issue (if available),
  - screenshots/GIFs for UI changes,
  - confirmation that `pnpm lint`, `pnpm fmt:check`, and `pnpm build` pass.
