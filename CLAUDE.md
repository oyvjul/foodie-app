# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextLevel Food ("Foodies") is a Next.js 16 application for sharing and discovering food recipes. It uses the App Router architecture with React 19 and Server Components as the default rendering strategy.

## Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production bundle
npm start            # Start production server
npm run lint         # Run ESLint
```

### Database Setup
```bash
node initdb.js       # Initialize SQLite database with seed data
```

## Architecture

### Database Layer
- **SQLite** database (`meals.db`) using `better-sqlite3`
- Database functions are in [lib/meals.js](lib/meals.js)
- Schema: meals table with id, slug, title, image, summary, instructions, creator, creator_email
- All database queries use `better-sqlite3` prepared statements for safety

### Routing Structure
- **App Router** (Next.js 16) with file-based routing in `app/` directory
- Main routes:
  - `/` - Home page with hero section and image slideshow
  - `/meals` - Browse all meals (with async data loading)
  - `/meals/[slug]` - Dynamic route for individual meal details
  - `/meals/share` - Share a new meal recipe
  - `/community` - Community page

### Component Organization
Components are organized by feature in the `components/` directory:

- **`components/main-header/`** - Site-wide navigation
  - Uses client component `nav-link.jsx` for active link highlighting via `usePathname()`
  - `main-header-background.jsx` for header visual effects

- **`components/meals/`** - Meal display components
  - `meals-grid.jsx` - Grid layout for meal cards
  - `meal-item.jsx` - Individual meal card component

- **`components/images/`** - Image-related components
  - `image-slideshow.js` - Animated slideshow for homepage

### Server vs Client Components
- **Server Components** (default): Most pages and components, including data fetching in `app/meals/Meals.jsx`
- **Client Components** (with `"use client"`):
  - Navigation link highlighting ([components/main-header/nav-link.jsx](components/main-header/nav-link.jsx))
  - Interactive elements requiring hooks or browser APIs

### Data Fetching Patterns
- Server Components fetch data directly using async/await
- Example: `app/meals/Meals.jsx` fetches meals and passes to `MealsGrid`
- Uses React Suspense for loading states ([app/meals/page.jsx](app/meals/page.jsx))
- Artificial 2-second delay in `getMeals()` for loading state demonstration

### Styling
- **CSS Modules** for component-specific styles (`.module.css` files)
- Global styles in [app/globals.css](app/globals.css)
- Scoped class names prevent style conflicts

### TypeScript Configuration
- TypeScript is configured but strict mode is **disabled** (`"strict": false`)
- Project uses JSX files (`.jsx`) mixed with TypeScript types available
- Target: ES2017 with modern ESNext module system

## Key Patterns

### Path Aliases
Uses `@/` alias for imports from project root:
```javascript
import Component from "@/components/path/to/component"
import { getData } from "@/lib/data"
```

### Dynamic Routes
Dynamic segments use bracket notation: `app/meals/[slug]/page.jsx` matches `/meals/juicy-cheese-burger`

### Loading States
Combine Suspense boundaries with separate `loading.jsx` files and loading components for granular loading UX

### React Compiler
Project includes `babel-plugin-react-compiler` in devDependencies for automatic React optimization

## Important Notes

- Images are stored in `public/images/` directory
- Database file `meals.db` is created by running `initdb.js`
- ESLint config uses Next.js recommended rules with custom global ignores
- The app uses React 19's new features and Next.js 16's App Router conventions
