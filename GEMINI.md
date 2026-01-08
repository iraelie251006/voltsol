# Project Overview

This is a Next.js project that serves as a landing page for VoltSol Global Ltd, a company focused on providing electric mobility solutions in Rwanda. The project is built with React, TypeScript, and styled with Tailwind CSS.

# Building and Running

To get the development server running, use the following command:

```bash
npm run dev
```

This will start the server on [http://localhost:3000](http://localhost:3000).

To create a production build, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm run start
```

# Development Conventions

## Linting

The project uses ESLint for code linting. To run the linter, use:

```bash
npm run lint
```

## Styling

The project uses Tailwind CSS for styling. Utility classes are used directly in the components. The configuration can be found in `tailwind.config.ts`.

## Components

The project is structured with a clear separation of components, which are located in the `components` directory. The main page is `app/page.tsx`, which composes the landing page from these components.
