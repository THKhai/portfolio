# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19, Vite, and Tailwind CSS v4. The project showcases a modern, animated portfolio with a Hero section, navigation, and responsive design. All code is licensed under Apache-2.0 and copyrighted 2025 by KhaiTR.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts Vite dev server with HMR (Hot Module Replacement) at http://localhost:5173

### Building for Production
```bash
npm run build
```
Creates optimized production build in `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Locally preview production build before deployment

### Linting
```bash
npm run lint
```
Runs ESLint on all `.js` and `.jsx` files in the project

## Architecture

### Component Structure
- **App.jsx**: Root component that renders Header and main content (currently Hero section)
- **Header.jsx**: Fixed header with logo, mobile menu toggle, and NavBar. Manages `navOpen` state for mobile menu
- **NavBar.jsx**: Animated navigation with active link tracking via refs. Uses custom active box that follows the active link with smooth transitions
- **Hero.jsx**: Landing section with avatar, status indicator, CTA buttons, and hero image
- **Button.jsx**: Exports two button variants: `ButtonPrimary` and `ButtonOutline`. Both support optional href (renders as `<a>`) or button element, with optional Material Icons

### State Management
- Local component state using React hooks (useState, useRef, useEffect)
- No global state management library is used
- NavBar uses refs (`lastActiveLink`, `activeBox`) to track and animate the active navigation indicator

### Styling System
- **Tailwind CSS v4** with PostCSS integration
- Custom utilities defined in `src/index.css`:
  - `.headline-1`: Gradient text effect for headings
  - `.img-box`, `.img-cover`: Image container utilities
  - `.menu-btn`, `.navbar`, `.nav-link`: Navigation components
  - `.btn`, `.btn-primary`, `.btn-outline`, `.btn-secondary`: Button styles
- **Material Symbols Rounded** icons loaded from Google Fonts
- **Open Sans** font family for typography
- Custom scrollbar styling via `tailwind-scrollbar` plugin

### Asset Management
- Static assets in `public/`: logo.png, avatar-1.jpg, avatar-Hero.png
- Assets are referenced with absolute paths from root (e.g., `/logo.png`)
- Vite handles asset optimization during build

### Component Patterns
- All components use PropTypes for type checking
- Component files include copyright headers: `@copyright 2025 KhaiTR` and `@license Apache-2.0`
- Imports are organized by sections: Node modules, Components, Styles
- Functional components with hooks (no class components)

### Navigation System
The NavBar implements a custom active indicator animation:
1. `initActiveBox()` positions the active box on mount and window resize
2. `activeCurrentLink()` handles click events to update active state and animate the box
3. The active box transitions smoothly using CSS positioning (top, left, width, height)

## Key Configuration Files

- **vite.config.js**: Minimal Vite config with React plugin
- **eslint.config.js**: ESLint v9 flat config with React Hooks and React Refresh plugins. Custom rule: allows unused vars with uppercase or underscore prefix
- **postcss.config.mjs**: PostCSS configured with Tailwind CSS v4 plugin
- **package.json**: Scripts and dependencies (React 19, Vite 7, Tailwind CSS 4)

## Important Notes

- Uses React 19.1.1 (latest) with StrictMode
- Vite 7.x for build tooling
- Tailwind CSS v4 (newer syntax with `@import "tailwindcss"`)
- ESLint v9 with flat config format
- All text content and component structures suggest this is an early-stage portfolio (currently only Header and Hero sections implemented)
- The project uses hash anchors for navigation (#home, #about, #work, #reviews, #contact)
