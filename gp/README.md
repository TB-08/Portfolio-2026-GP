# Portfolio 2026 Gphat

This folder contains the editable Vite React source, a deploy build and a directly openable HTML build.

## Open directly

Double-click `index.html` in this folder. When it is opened with a `file://` URL, it redirects to `open-directly/index.html`.

`open-directly/index.html` has the built CSS and JavaScript inlined so Chrome can display the portfolio without a local server. Keep its `images/` folder beside it so the avatar and future images can load.

## Source files

- `index.html` is the Vite HTML entry.
- `src/` contains the React layout, sections, components, data and CSS.
- `public/` contains the avatar and image folders for future portfolio images.
- `package.json`, `package-lock.json` and `vite.config.js` keep the project runnable.

Run the editable project with:

```bash
npm install
npm run dev
```

Build it again with:

```bash
npm run build
```

Create the direct-open HTML again with:

```bash
npm run build:standalone -- open-directly
```

## Built website

`dist/` contains the deployable HTML, CSS, JavaScript and assets with the full animation output for hosting or upload.

For real project images, add files under `public/images/` and update image paths in `src/data/portfolioData.js`.
