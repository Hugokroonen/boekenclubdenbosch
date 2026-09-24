// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GITHUB_PAGES=true → build a fully static site (every page pre-rendered to HTML)
// for GitHub Pages. Without the flag, the normal Lovable build is used.
const githubPages = process.env.GITHUB_PAGES === "true";
const base = process.env.BASE_PATH || "/";

export default defineConfig(
  githubPages
    ? {
        nitro: false,
        vite: { base },
        tanstackStart: {
          server: { entry: "server" },
          prerender: { enabled: true, crawlLinks: true, failOnError: true },
          pages: [{ path: "/" }, { path: "/lid-worden" }, { path: "/beginnend-auteur" }, { path: "/samenwerkingen" }, { path: "/over-ons" }, { path: "/contact" }],
        },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          // nitro/vite builds from this
          server: { entry: "server" },
        },
      },
);
