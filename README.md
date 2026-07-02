# Estatemint Frontend

Estatemint is a Persian, RTL-first real estate frontend built with Next.js, TypeScript, and Tailwind CSS.

The current version is a static frontend foundation with mock property data. It is designed to be connected to the existing NestJS backend later, but no backend integration is implemented yet.

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
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
```

If this value is not set, the frontend defaults to `http://localhost:3000/api/v1`.

## Project Structure

```text
src/app                 App Router pages and root layout
src/components/layout   Header and footer components
src/components/property Property cards, search, gallery, and consultation form
src/components/forms    Login and register forms
src/components/ui       Reusable UI primitives
src/data                Page-facing data exports
src/mock-data           Static mock property records
src/lib/api             Future API client foundation
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

The project currently includes a static Persian RTL UI, mock property data, reusable components, and an API client foundation. Authentication, search, favorites, appointments, uploads, and real property data should be connected after the backend endpoints are ready.

See [docs/frontend-architecture.md](docs/frontend-architecture.md) for more details.
