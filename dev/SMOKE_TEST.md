# Sanity 6 smoke test checklist

Run the dev studio with a real Sanity project:

```sh
# From repository root
npm install
npm run build
cd dev && npm install
cp .env.example .env   # set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET
npm run dev
```

Or with hot reload for plugin source:

```sh
npm run dev
```

## Checklist

- [ ] Empty field → search dialog → select icon → configure (size, color, flip, rotate, inline SVG)
- [ ] Simple UI mode (`keepItSimpleFor: 'all'` in dev config)
- [ ] Portable Text inline + block icon
- [ ] Document list `mediaPreview` on test document
- [ ] Diff view (add / change / remove icon)
- [ ] Collections tab + pagination
- [ ] Context menu (copy SVG, download PNG)
- [ ] Read-only field on `readonlyIcon` cannot be edited
- [ ] Italian locale bundle loads (switch Studio locale to it-IT if configured)

Attach screenshots or a short recording to [PR #37](https://github.com/williamiommi/sanity-plugin-icon-manager/pull/37) when validating a release.
