# Estatemint Frontend

Estatemint is a Persian, RTL-first real estate frontend built with Next.js, TypeScript, and Tailwind CSS.

The current version includes real authentication integration with the EstateMint NestJS backend and static mock property data. Property, favorite, appointment, upload, and admin APIs are not called because they are not implemented by the backend yet.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- lucide-react for icons
- clsx and tailwind-merge for class name utilities

## Requirements

Next.js 16 requires Node.js 20.9.0 or newer.

```bash
node >=20.9.0
```

This repository includes `.nvmrc` with Node 24 as the preferred local version.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run build:webpack
npm run lint
```

If Turbopack has a local Windows process-permission issue, use:

```bash
npm run build:webpack
```

## Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=/backend-api
```

If this value is not set, the frontend defaults to `/backend-api`.

`/backend-api` is a same-origin Next.js rewrite to the local backend:

```text
http://localhost:5000/api/v1
```

This keeps browser requests same-origin and avoids CORS preflight issues during local development.

## Image Placeholders

The app does not use remote image URLs for mock property images. Local SVG placeholders live in:

```text
public/placeholders/
```

Replace them with real optimized photos later using these suggested sizes:

- Hero image: `1800x1000`
- Property card image: `1200x900`
- Property detail gallery image: `900x700`
- Interior/CTA image: `1200x800`

## Project Structure

```text
src/app                 App Router pages and root layout
src/components/layout   Header and footer components
src/components/property Property cards, search, gallery, and consultation form
src/components/forms    Login and register forms
src/components/ui       Reusable UI primitives
src/data                Page-facing data exports
src/mock-data           Static mock property records
src/lib/api             API client and auth services
src/types               Domain types
docs/                   Architecture notes
```

## Current Pages

- `/` home page
- `/properties` property listing page
- `/properties/[id]` property detail page
- `/about` about page
- `/contact` contact page
- `/login` login UI placeholder
- `/register` register UI placeholder

## Current Status

The project currently includes a Persian RTL UI, mock property data, reusable components, and real auth integration for register, login, token persistence, logout, and current-user bootstrap. Search, property APIs, favorites, appointments, uploads, and admin flows should be connected after those backend endpoints are ready.

See [docs/frontend-architecture.md](docs/frontend-architecture.md) for more details.
