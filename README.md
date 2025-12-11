# Foodies - NextLevel Food

A modern Next.js application for sharing and discovering food recipes. Built with Next.js 16, React 19, and Server Components.

## Features

- Browse and discover delicious food recipes
- Share your own recipes with the community
- Dynamic recipe pages with detailed instructions
- Interactive image slideshow
- Server-side rendering for optimal performance
- SQLite database for recipe storage

## Tech Stack

- **Next.js 16** - App Router with Server Components
- **React 19** - Latest React features
- **SQLite** - Lightweight database with better-sqlite3
- **CSS Modules** - Component-scoped styling

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foodies
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
node initdb.js
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
foodies/
├── app/                    # Next.js App Router pages
│   ├── meals/             # Meals-related routes
│   ├── community/         # Community page
│   └── ...
├── components/            # React components
│   ├── main-header/      # Navigation components
│   ├── meals/            # Meal display components
│   └── images/           # Image-related components
├── lib/                  # Utility functions and data access
├── public/               # Static assets
│   └── images/          # Recipe images
└── meals.db             # SQLite database (generated)
```

## Routes

- `/` - Home page with featured meals
- `/meals` - Browse all recipes
- `/meals/[slug]` - Individual recipe details
- `/meals/share` - Share a new recipe
- `/community` - Community information

## Database Schema

The SQLite database contains a `meals` table with the following structure:

- `id` - Unique identifier
- `slug` - URL-friendly recipe identifier
- `title` - Recipe name
- `image` - Image filename
- `summary` - Brief description
- `instructions` - Cooking instructions
- `creator` - Recipe author name
- `creator_email` - Author email

## Development Notes

- Uses Server Components by default for optimal performance
- Client Components are marked with `"use client"` directive
- Path alias `@/` points to project root for cleaner imports
- CSS Modules provide scoped styling per component
- React Suspense boundaries handle loading states

## License

This project is private and not licensed for public use.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
