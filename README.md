# React + Vite

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://github.com/prettier/prettier)
[![Ko-fi](https://img.shields.io/badge/support_me_on_ko--fi-F16061?style=for-the-badge&logo=kofi&logoColor=f5f5f5)](https://ko-fi.com/CostasAK)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Contents

- [Contents](#contents)
- [Usage](#usage)
  - [Project Setup](#project-setup)
    - [Metadata](#metadata)
    - [GitHub Pages](#github-pages)
    - [Cloudflare Pages](#cloudflare-pages)
  - [GitHub Repository Setup](#github-repository-setup)
    - [Auto-merge Dependabot PRs](#auto-merge-dependabot-prs)
    - [Main branch protection](#main-branch-protection)
- [Suggestions](#suggestions)

## Usage

Install pnpm, if you don't have it installed already

```sh
npm install -g pnpm
```

Scaffold the project, replacing `my-project` with your desired project name

```sh
pnpm dlx degit CostasAK/vite-react#main my-project
cd my-project
pnpm install
pnpm prepare
pnpm start
```

Use `#tailwindcss` instead of `#main` to have TailwindCSS included.

When committing changes, you should use `pnpm commit` instead of `git commit`. `pnpm commit` will help you write better commit messages to pass the commitlint rules.

### Project Setup

- [ ] Update `.github/CODEOWNERS`
- [ ] Update `.github/FUNDING.yml`
- [ ] Update assignee in `.github/dependabot.yml`

#### Metadata

- [ ] In `env/.env`, set the name and description for your app. These will be used in the HTML meta, openGraph, etc.
- [ ] In `public/oembed.json`, set the author info. oEmbed is used by Discord to create preview embeds.
- [ ] Update the `LICENCE` file.
- [ ] Update the package name in `package.json`.
- [ ] (Optional) Update `labels.json`. Add old names to aliases, such that labels are updated, instead of removed. If the labels are not automatically updated, manually run the `labels` workflow on `main`.

#### GitHub Pages

If Cloudflare Pages is not setup, pushes to `main` will trigger a workflow to publish to GitHub Pages. For it to work, the repository needs to be setup for GitHub Pages using Actions. You can set this by going to:

- [ ] Settings → Pages → Build and deployment → Source: GitHub Actions

#### Cloudflare Pages

Setting up the following secrets and variable will cause Cloudflare Pages to be used instead of GitHub Pages. Additionally, pull requests from branches in the repository will also trigger a Cloudflare Pages upload, so they can be previewed.

- Cloudflare Pages project name
  - [ ] Secrets and variables → Actions → Variables → New repository variable → `CLOUDFLARE_PROJECTNAME`
- Cloudflare account ID
  - [ ] Secrets and variables → Actions → New repository variable → `CLOUDFLARE_ACCOUNT_ID`
  - [ ] Secrets and variables → Dependabot → New repository variable → `CLOUDFLARE_ACCOUNT_ID`
- Cloudflare API token
  - [ ] Secrets and variables → Actions → New repository variable → `CLOUDFLARE_API_TOKEN`
  - [ ] Secrets and variables → Dependabot → New repository variable → `CLOUDFLARE_API_TOKEN`

### GitHub Repository Setup

#### Auto-merge Dependabot PRs

To auto-merge PRs and to allow workflows to be triggered off of them, a PAT is needed with access to the repository and the following permissions:

- Repository permissions
  - Read
    - Metadata
  - Read and Write
    - Code
    - Pull Requests
    - Workflows

Once you have the token, set the following:

- Settings
  - [ ] General → Pull Requests → Allow auto-merge
  - [ ] Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests
  - Secrets and variables
    - Set your token in the following 2 places:
      - [ ] Actions → New repository secret → `APPROVAL_TOKEN`
      - [ ] Dependabot → New repository secret → `APPROVAL_TOKEN`
    - Set the username of the actor of the token:
      - [ ] Actions → Variables → New repository variable → `APPROVAL_ACTOR`

#### Main branch protection

These settings especially important when using auto-merge for Dependabot PRs.

- Settings
  - Branches → Branch Protection Rule
    - [ ] Branch name pattern: `main`
    - Protect matching branches
      - [ ] Require a pull request before merging
      - [ ] Require approvals
      - [ ] Dismiss stale pull request approvals when new commits are pushed
      - [ ] Require review from Code Owners
      - [ ] Require status checks to pass before merging → Require branches to be up to date before merging:
        - [ ] `test`
        - [ ] `lint`
        - [ ] `format`
        - [ ] `commitlint`
      - [ ] Require conversation resolution before merging

## Suggestions

- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa)
- Tailwind CSS
  - [Tailwind CSS Installation](https://tailwindcss.com/docs/installation)
  - [clsx](https://github.com/lukeed/clsx)
  - [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Iconify](https://icon-sets.iconify.design)
- Images
  - [vite-plugin-image-presets](https://github.com/ElMassimo/vite-plugin-image-presets)
  - Alternatively, install `pnpm install -D sharp`. Then remove the test setting from `ViteImageOptimizer()` in `vite.config.js`
- Fonts
  - [vite-plugin-webfont-dl](https://github.com/feat-agency/vite-plugin-webfont-dl)
  - [unplugin-fonts](https://github.com/cssninjaStudio/unplugin-fonts)
- [awesome-vite](https://github.com/vitejs/awesome-vite)
