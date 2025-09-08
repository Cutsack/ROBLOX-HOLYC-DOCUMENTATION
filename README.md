# HolyC for Roblox — Documentation Site

This folder contains a static documentation website you can host anywhere.

## Structure
- `index.html` — single-page app shell
- `assets/` — CSS and JS (router + theme)
- `content/` — Markdown pages loaded client-side

Open `index.html` locally to preview, or host the whole `site/` folder as static files.

## Local preview
- Windows: double-click `index.html` or run `Start-Process e:\documentation\site\index.html` in PowerShell.

Note: Some browsers restrict `fetch()` from `file://` in strict modes. If you see a loading error, serve the folder with a tiny HTTP server:

- Python 3: `python -m http.server 8000` (then visit http://localhost:8000/)

## Deploy options

### GitHub Pages
1. Create a new repository and commit the `site/` folder contents at the repo root.
2. In GitHub, Settings → Pages → Deploy from a branch → `main` / root.
3. Wait for Pages to build, then visit the provided URL.

Alternatively, place the site under `docs/` at the repo root and select `docs/` in the Pages settings.

### Netlify
- Drag-and-drop the `site/` folder onto https://app.netlify.com/drop
- Or push to a repo and connect it in Netlify; set the publish directory to `site`.

### Vercel
- Import your repo into Vercel; set "Framework Preset" to "Other" and the output/public directory to `site`.

### Any static host
- Upload the contents of `site/` to your hosting provider.

## Editing docs
- Edit or add Markdown files under `content/`.
- Update the route list in `assets/app.js` if you add new pages (add an entry with `id`, `title`, and `file`).
