# Serena Frolli – Portfolio (Vite + React + Tailwind)

A minimal, clean portfolio you can deploy via GitHub easily.

## Quick Start (local)

1. Install Node.js (LTS) from https://nodejs.org
2. In a terminal:
   ```bash
   npm install
   npm run dev
   ```
   Open the printed local URL in your browser.

## Deploy to GitHub Pages (recommended free hosting)

1. Create a **new GitHub repository** (e.g., `serena-portfolio`).
2. Upload all files from this folder to that repository and commit.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**:
   - Source: **GitHub Actions**
   - It may auto-detect Vite. If not, add the workflow below.

### GitHub Actions workflow

Create `.github/workflows/deploy.yml` with this content (already included in this project):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install deps
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Push to **main** branch. The action will build and publish to Pages.
6. Your site will appear at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

> If you want a custom domain or faster deploys, Vercel also works great.

## Customize

- Edit contact links in `src/App.jsx` (the `LINKS` object).
- Replace content in the `projects`, `experience`, `skills`, etc. arrays.
- To add your resume, place `Serena_Frolli_Resume.pdf` in the `public/` folder.

## Notes

- This project uses Tailwind for styling, lucide-react for icons, and framer-motion for light animation.
- No backend required.
