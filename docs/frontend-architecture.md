# Estatemint Frontend Architecture

## Project Strategy

This repository is structured as the standalone frontend for Estatemint. The NestJS backend can continue to live in its own repository and expose APIs under `/api/v1`.

This approach keeps frontend and backend concerns separate, avoids unnecessary monorepo migration work, and makes the frontend easier to present as a portfolio-grade product.

## Architecture

```text
src/
  app/                  Next.js App Router routes
  components/
    forms/              Login and register form UI
    layout/             Header and footer
    property/           Property cards, search, gallery, and consultation form
    ui/                 Reusable UI primitives
  data/                 Page-facing data exports
  lib/
    api/                API config, fetch wrapper, and auth services
    utils.ts            Shared UI/data formatting utilities
  mock-data/            Temporary static property data
  types/                Domain-level TypeScript types
```

## RTL and Persian UI

The application UI is Persian and RTL by default. The root document sets:

```tsx
<html lang="fa" dir="rtl">
```

All user-facing UI text, form labels, placeholders, metadata, empty states, navigation labels, and buttons are Persian. Documentation is intentionally written in English.

## Design Direction

The UI follows a premium real estate product direction:

- large editorial hero section
- prominent property search
- warm luxury color palette
- polished property cards
- clean card shadows and spacing
- responsive layouts for desktop, tablet, and mobile
- static property consultation/contact flows ready for future backend wiring

The design is inspired by the provided real estate landing-page reference, but it does not copy proprietary assets, logos, images, or source code.

## Mock Data

Static property records live in:

```text
src/mock-data/properties.ts
```

Pages consume them through:

```text
src/data/properties.ts
```

This gives the app a clean replacement point for future API-backed data.

## API Foundation

The API foundation lives in:

```text
src/lib/api/
```

It currently provides:

- `NEXT_PUBLIC_API_BASE_URL`
- default frontend API URL: `/backend-api`
- typed API response shapes
- a fetch wrapper
- Bearer token handling for authenticated requests

`/backend-api` is configured in `next.config.ts` as a same-origin rewrite to:

```text
http://localhost:5000/api/v1
```

This avoids browser-side CORS preflight requests for authentication forms during local development. If the frontend calls `http://localhost:5000` directly from the browser, an `OPTIONS` request before `POST` is normal because the request is cross-origin.

Authentication backend integration is implemented. Property, favorite, appointment, upload, admin, and role-management integrations are intentionally not implemented because those APIs are not available yet.

## Implemented Backend Integration

The frontend currently integrates with:

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

The auth provider persists the access token in local storage and validates it on app boot with `/auth/me`. This is a pragmatic portfolio/demo decision; if the production backend later adopts cookie-based auth or refresh tokens, the storage strategy should be revisited.

## Image Assets

No remote image URLs are used for mock property visuals. Local SVG placeholders live in:

```text
public/placeholders/
```

Recommended replacement sizes:

- Hero image: `1800x1000`
- Property card image: `1200x900`
- Property detail gallery image: `900x700`
- Interior/CTA image: `1200x800`

## Future Backend Integration Plan

1. Add typed API services for property listing and property details once those endpoints exist.
2. Replace mock property data with API calls.
3. Add refresh-token handling if the backend implements refresh tokens.
4. Connect favorites after role-based authorization is ready.
5. Connect appointment requests to the backend appointment model.
6. Add upload support once backend upload APIs are available.
