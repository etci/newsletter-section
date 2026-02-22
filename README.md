# Newsletter Section

A responsive newsletter subscription component built with React and TypeScript, featuring form validation, toast notifications, and modern UI design.

## Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.3** - Build tool and dev server

### Styling
- **CSS Modules** - Component-scoped styling
- **classnames** - Dynamic className composition

### Validation & State
- **@kutayetci/vldt** - Schema-based validation library
- **React Portals** - Toast notifications outside component hierarchy

### Development
- **ESLint 9** - Code linting
- **Prettier 3** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **vite-plugin-checker** - Type checking during development

## Features

- Email validation with custom error messages
- Toast notification system (success/error/warning)
- Responsive design with CSS Modules
- Type-safe API layer
- Component-based architecture

## Project Structure

```
src/
├── api/                    # API client layer
│   ├── index.ts
│   └── subscription.ts
├── components/             # Reusable UI components
│   ├── Badge/
│   ├── Bullet/
│   ├── Button/
│   ├── EmailField/
│   └── Toast/
├── Newsletter/             # Main newsletter component
│   ├── Newsletter.tsx
│   └── Newsletter.module.css
├── utils/                  # Utilities
│   ├── toastr.tsx         # Toast notification system
│   └── text.ts
├── App.tsx
└── main.tsx
```

## Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # TypeScript compile + Vite build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
