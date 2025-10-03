# AI Usage Dashboard

<!-- Badges -->
<!-- CI & Deploy -->
[![CI](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/ci.yml)
[![Deploy](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/ChainsQueen/ai-usage-dashboard/actions/workflows/gh-pages.yml)
[![Live](https://img.shields.io/website?url=https%3A%2F%2Fchainsqueen.github.io%2Fai-usage-dashboard%2F&label=Live&logo=github&logoColor=white)](https://chainsqueen.github.io/ai-usage-dashboard/)

<!-- Quality -->
![Lint: ESLint](https://img.shields.io/badge/lint-eslint-4B32C3?logo=eslint&logoColor=white)

<!-- Runtime & Package Manager -->
![Node 20](https://img.shields.io/badge/Node-20.x-339933?logo=nodedotjs&logoColor=white)
![pnpm 10](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm&logoColor=white)

<!-- Frameworks & Tooling -->
![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![PostCSS 8](https://img.shields.io/badge/PostCSS-8-DD3A0A?logo=postcss&logoColor=white)

<!-- Hosting -->
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-222?logo=github&logoColor=white)](https://chainsqueen.github.io/ai-usage-dashboard/)

AI Usage Dashboard — A fast React + TypeScript app (Vite) with Tailwind CSS v4 that shows AI usage metrics using interactive Chart.js charts, smooth framer-motion animations, and a fully responsive design.

## Table of Contents

- **Overview**
- **Live Demo**
- **Stack**
- **Project Structure**
- **Getting Started**
- **Scripts**
- **CI / CD**
- **Tailwind CSS v4 Setup**
- **Features**
- **Troubleshooting**

## Live Demo

[![Live Banner](https://img.shields.io/website?url=https%3A%2F%2Fchainsqueen.github.io%2Fai-usage-dashboard%2F&label=Open%20App&logo=github&logoColor=white)](https://chainsqueen.github.io/ai-usage-dashboard/)

## Stack

- **Vite** for tooling and HMR (`vite`)
- **React 19** (`react`, `react-dom`)
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- **ESLint** baseline config
- **PNPM** as the package manager

## Project Structure

```
ai-usage-dashboard/
  .github/
    workflows/
      ci.yml
      gh-pages.yml
      deploy.yml (optional; if using official Pages action)
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
    index.css
    main.tsx
    App.tsx
    vite-env.d.ts
    core/
      data/
        usage-data.ts
      hooks/
        use-theme.ts
      state/
        use-usage-store.ts
    design-system/
      interactive-card.tsx
    partials/
      cards/
        summary-card.tsx
      charts/
        usage-line-chart.tsx
        model-pie-chart.tsx
      table/
        prompt-log-table.tsx
  vite.config.js
  tsconfig.json
```

## Getting Started

1. Install dependencies
   ```sh
   pnpm install
   ```
2. Start the dev server
   ```sh
   pnpm dev
   ```
3. Build for production
   ```sh
   pnpm build
   ```
4. Preview the build locally
   ```sh
   pnpm preview
   ```

## Scripts

- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview**: `pnpm preview`
- **Lint**: `pnpm lint`

## CI / CD

The workflow at `/.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`.

- **Install**: Uses PNPM with lockfile for reproducible installs
- **Lint**: Executes `pnpm lint`
- **Build**: Executes `pnpm build` to ensure the app compiles

You can monitor status via the badge at the top of this README or from the Actions tab in GitHub. Update the badge URL to your actual `OWNER/REPO` once pushed.

Deployed to **GitHub Pages** via `/.github/workflows/gh-pages.yml` on push to `main`.

- **Base path**: `vite.config.js` sets `base: '/ai-usage-dashboard/'`
- **Publish**: `peaceiris/actions-gh-pages` pushes `dist/` to `gh-pages`
- **Enable Pages**: Settings → Pages → “Deploy from a branch” → Branch: `gh-pages` → Folder: `/ (root)`

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

## Features

- **Responsive UI**: Mobile-first layout with Tailwind
- **Charts**: Line + Doughnut (Chart.js via react-chartjs-2)
- **Animations**: Framer Motion micro-interactions and `InteractiveCard`
- **Theme Toggle**: Light/Dark with `useTheme()` and localStorage persistence
- **Mock Data**: `src/core/data/usage-data.ts` for fast iteration

## Troubleshooting

- If you see an error about using `tailwindcss` directly as a PostCSS plugin, install and use `@tailwindcss/postcss` and restart dev server:
  ```sh
  pnpm add -D @tailwindcss/postcss
  pnpm dev
  ```
- Ensure `src/main.jsx` imports `./index.css` and that `index.css` starts with `@import "tailwindcss";`.
- Hard refresh the browser after changes to PostCSS/Tailwind config.
