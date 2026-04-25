# Wedding Invite — Project Guide

## What this is
Multi-client wedding landing page. One repo, one Cloudflare deployment. Each client gets their own URL: `wedding-invite.com/anya-vlad`.

## Adding a new client

1. Create `src/clients/{slug}/config.ts` (copy an existing one)
2. Register in `src/clients/index.ts`:
   ```ts
   import newClient from './new-client/config'
   export const clients = { ..., 'new-client': newClient }
   ```
3. Upload photos to Cloudflare R2 bucket `wedding-photos` in folder `new-client/`
4. Push → Cloudflare auto-deploys

Photo paths in config are relative to R2 base: `'anya-vlad/story-1.jpg'`  
Local paths (outfits) start with `/`: `'/images/outfits/women/1.png'` — stay in repo.

## Project structure

```
src/
  clients/          ← one folder per client, each has config.ts
  config/           ← wedding.config.ts (demo + WeddingConfig type)
  context/          ← WeddingConfigContext + useWeddingConfig hook
  utils/            ← photo.ts (photoUrl helper)
  modules/Home/
    page/
      Home.tsx       ← composes all sections
      WeddingPage.tsx ← reads :slug, provides context, wraps MainLayout
    components/      ← Hero, Story, Looks, Timing, MapSection, Organizer
  layouts/
    main/MainLayout.tsx
    components/Header, Footer
  router/
    Router.tsx       ← /:slug → WeddingPage, / → redirect /demo
```

## Config shape

```ts
{
  couple:    { bride, groom }
  event:     { date, dateShort, city, preText }
  story:     { chapters: [{ year, heading, text, img, imgAlt, offset }] }
  dresscode: { hint, palette: string[], outfits: [...] }
  timeline:  [{ time, event, sub, isDim? }]
  venue:     { name, description, details: [{ label, value }], mapIframe }
  organizer: { name, phone, role, note }
}
```

## Code style

**Naming:**
- Folders & component files: `PascalCase`
- Hooks: `camelCase` with `use` prefix
- Config files: `camelCase` (`wedding.config.ts`)
- Client slugs: `kebab-case` (`anya-vlad`)

**Components:**
```ts
// Simple component — function declaration
export default function Hero() {
  const { couple } = useWeddingConfig()
  return (...)
}

// Component with props — arrow + FC
type Props = { title: string }
const Card: FC<Props> = ({ title }) => { ... }
export default Card
```

**Import order:**
```ts
import { useState } from 'react'                        // 1. React
import { useNavigate } from 'react-router-dom'          // 2. Third-party
import styles from './Component.module.css'             // 3. Styles
import { useWeddingConfig } from '@context/...'         // 4. Aliases
```

**CSS Modules — conditional classes:**
```ts
className={`${styles.block} ${condition ? styles.blockActive : ''}`}
```

**TypeScript:**
- `type` over `interface` for props
- `as const` for literal union values: `category: 'women' as const`
- Types derived from data: `export type WeddingConfig = typeof config`
- No explicit return types on components

**Keys in lists:** use domain field, not index:
```ts
{timeline.map((ev) => <li key={ev.time}>)}  // ✓
{items.map((_, i) => <div key={i}>)}        // ✗
```

**Scroll reveal:** use `useReveal` hook — returns a callback ref:
```ts
const ref = useReveal(styles.visible)
// pass to elements in map — same ref works for multiple elements
<div ref={ref} style={{ transitionDelay: `${i * 0.1}s` }}>
```

**Staggered animation:** always `i * 0.1s` or `i * 0.08s` delay pattern.

**Accessibility:** always add `aria-label` on icon buttons, `aria-hidden="true"` on decorative elements.

## Path aliases

| Alias | Points to |
|---|---|
| `@config/*` | `src/config/*` |
| `@context/*` | `src/context/*` |
| `@clients/*` | `src/clients/*` |
| `@utils/*` | `src/utils/*` |
| `@modules/*` | `src/modules/*` |
| `@layouts/*` | `src/layouts/*` |
| `@hooks/*` | `src/hooks/*` |
| `@router/*` | `src/router/*` |

## Env variables

| Variable | Where | Value |
|---|---|---|
| `REACT_APP_PHOTOS_URL` | `.env.local` + Cloudflare Pages | R2 public bucket URL |

## Build & deploy

- Build: `npm run build` → output in `build/`
- Hosting: Cloudflare Pages (auto-deploys on push)
- Photos: Cloudflare R2 bucket `wedding-photos`
- Routing: `public/_redirects` handles SPA fallback (`/* /index.html 200`)
