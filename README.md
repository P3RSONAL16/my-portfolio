# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
my-portfolio/
├─ public/
│  ├─ img/
│  ├─ models/
│  ├─ scripts/
│  └─ fonts/
├─ src/
│  ├─ data/
│  │  ├─ projects.js
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ ProjectCard.astro 
│  │  ├─ ProjectGrid.astro
│  │  ├─ ProjectPage.astro
│  │  ├─ ContactModal.astro 
│  │  ├─ AboutModal.astro
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ projects/
│  │    ├─ gallery3d.astro
│  │    └─ [slug].astro
│  ├─ scripts/
│  │  ├─ animations/            → GSAP + ScrollTrigger
│  │  │  ├─ projectPage.js
│  │  │  └─ headerEffects.js
│  │  ├─ 3d.js
│  │  ├─ header_off_on.js
│  │  ├─ lenis.js
│  │  └─ gsap-setup.js
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ tsconfig.json
├─ tailwind.config.cjs
├─ package-lock.json
└─ package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
