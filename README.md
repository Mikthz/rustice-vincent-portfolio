# Rustice Vincent Caldeo — Portfolio Website

A personalized student portfolio based on the **Dark Minimal** Astro template by Andres Hernandez and distributed by ThemeWagon.

## Sections

1. About Me
2. Career Objectives
3. Education
4. Technical Skills
5. Soft Skills
6. My Projects
7. Certificates & Participation
8. Get in Touch

The portfolio currently includes a circular professional portrait in the hero section, an animated technology marquee, an expandable technical-skills section with a decorative code-glitch animation, two 2026 collaborative projects developed with the same three-member team, local project demonstration videos and screenshots, and five documented participation certificates.

## Requirements

- Node.js 20 or newer (Node.js 26 is used for development)
- pnpm 11.2.2 (the exact version is pinned in `package.json`)

Install the pinned pnpm version if it is not already available:

```bash
npm install -g pnpm@11.2.2
```

## Run locally

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Astro (normally `http://localhost:4321`).

## Build and preview

```bash
pnpm build
pnpm preview
```

The generated static website is placed in `dist/`.

## Deployment notes

The Astro configuration detects GitHub Actions builds and automatically sets the base path for a GitHub Pages project repository. For a GitHub Pages **user site** (repository named `Mikthz.github.io`), local preview, or custom domain, it uses the domain root.

To publish with the included workflow, push the project to the `main` branch and set the repository's Pages source to **GitHub Actions** under Settings → Pages. After choosing a custom domain, update the site metadata in `src/layouts/Layout.astro` if you want a canonical URL and custom social-preview domain.

## Project notes and future updates

- The hero section displays a circular professional portrait beside the name and student-role heading.
- The project section intentionally contains two projects only. Both are 2026 collaborative projects completed with the same three-member team.
- The Computer Parts Inventory Management System card includes actual dashboard and interface screenshots, a locally hosted walkthrough video, and a direct link to [New-ITE-2-Project](https://github.com/Mikthz/New-ITE-2-Project). The repository was archived on November 24, 2026, and remains linked for viewing.
- The Angry Birds Face AR card retains its locally hosted gameplay demonstration.
- The certificates section currently includes five documented participation certificates. It can be extended as additional certificates or awards are located or earned.
- The animated technology marquee, skill accordions, code-glitch visual, card reveal transitions, and certificate hover effects respect reduced-motion preferences where applicable.
- Unused Firebase/Firestore code and its dependency have been removed. The decorative Like button was not restored because it required a configured Firebase backend. React remains installed only for the original LetterGlitch visual.
- To update the portrait, project screenshots, project videos, or certificates, replace the relevant files under `public/images/`, `public/videos/`, or `public/certificates/` and update the corresponding component under `src/components/`.

## License and attribution

This site retains attribution to the original Dark Minimal template author and ThemeWagon. See the included `LICENSE` file for the template's license.
