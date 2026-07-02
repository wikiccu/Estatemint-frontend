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
    api/                API config and fetch wrapper
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
- static consultation/contact flows ready for future backend wiring

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
- default API URL: `http://localhost:3000/api/v1`
- typed API response shapes
- a fetch wrapper
- a placeholder for Bearer token handling

No backend integration is currently implemented.

## Future Backend Integration Plan

1. Add typed API services for property listing and property details.
2. Replace mock property data with API calls.
3. Connect login/register to the backend authentication module.
4. Add JWT storage/refresh handling according to the backend auth strategy.
5. Connect favorites after role-based authorization is ready.
6. Connect appointment requests to the backend appointment model.
7. Add upload support once backend upload APIs are available.
