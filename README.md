# AI Usage Dashboard

[![CI](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/ci.yml)

AI Usage Dashboard is a Vite + React app with Tailwind CSS v4. It’s set up for fast local dev, HMR, and a minimal linting baseline.

## Stack

- **Vite** for tooling and HMR (`vite`)
- **React 19** (`react`, `react-dom`)
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- **ESLint** baseline config
- **PNPM** as the package manager

## Project Structure

```
ai-usage-dashboard/
  .gitattributes
  .gitignore
  README.md
  eslint.config.js
  index.html
  package.json
  pnpm-lock.yaml
  postcss.config.cjs
  public/
  src/
    App.css
    App.jsx
    assets/
    index.css
    main.jsx
  vite.config.js
```

## Scripts

- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview**: `pnpm preview`
- **Lint**: `pnpm lint`

## Continuous Integration (CI)

The workflow at `/.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`.

- **Install**: Uses PNPM with lockfile for reproducible installs
- **Lint**: Executes `pnpm lint`
- **Build**: Executes `pnpm build` to ensure the app compiles

You can monitor status via the badge at the top of this README or from the Actions tab in GitHub. Update the badge URL to your actual `OWNER/REPO` once pushed.

## Continuous Deployment (CD)

Deployed to **GitHub Pages** using `/.github/workflows/deploy.yml` on pushes to `main`.

- **Live URL**: https://chainsqueen.github.io/ai-usage-dashboard/
- **Build**: `pnpm build` (Vite outputs to `dist/`)
- **Base path**: `vite.config.js` sets `base: '/ai-usage-dashboard/'` for correct asset URLs
- **Artifacts**: Uploads `./dist` and deploys via `actions/deploy-pages@v4`

Prerequisites:
- Enable Pages in GitHub: Settings → Pages → Build and deployment → Source: “GitHub Actions”
- Repo should be public (or ensure appropriate access) for the site to be visible

## Tailwind CSS v4 Setup

Tailwind v4 is enabled via a single import in the main stylesheet and a PostCSS plugin.

- `src/index.css` must begin with:

```css
@import "tailwindcss";
```

- PostCSS config uses the v4 plugin:

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

No `tailwind.config.js` is required unless you need custom tokens/theme.

## Getting Started

1. Install dependencies (PNPM):
   ```sh
   pnpm install
   ```
2. Start dev server:
   ```sh
   pnpm dev
   ```
3. Build for production:
   ```sh
   pnpm build
   ```
4. Preview the build locally:
   ```sh
   pnpm preview
   ```

## Troubleshooting

- If you see an error about using `tailwindcss` directly as a PostCSS plugin, install and use `@tailwindcss/postcss` and restart dev server:
  ```sh
  pnpm add -D @tailwindcss/postcss
  pnpm dev
  ```
- Ensure `src/main.jsx` imports `./index.css` and that `index.css` starts with `@import "tailwindcss";`.
- Hard refresh the browser after changes to PostCSS/Tailwind config.
