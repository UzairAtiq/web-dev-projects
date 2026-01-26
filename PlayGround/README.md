# 🎮 Playground Fun

> A premium personal playground for experiments, creativity, and fun.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055?style=flat-square&logo=framer)

---

## ✨ Features

- 🎨 **Beautiful Animations** - Smooth, purposeful animations powered by Framer Motion
- 🧭 **Animated Sidebar** - Sleek slide-out navigation with micro-interactions
- ⭐ **Favorites System** - Pin up to 5 sections to the navbar for quick access
- 🌟 **Inspirational Quotes** - Random anime quotes that refresh on every visit
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- 🎯 **Section-based Layout** - Full-viewport sections for immersive experience
- 🔮 **Glass Morphism** - Modern glass-effect UI elements
- 🌈 **Gradient Orbs** - Animated background decorations

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── animations/          # Framer Motion variants & transitions
├── components/
│   ├── common/          # Button, Card, Tooltip, Loader, Footer
│   ├── navigation/      # Navbar, Sidebar
│   └── sections/        # Hero + 5 playground sections
├── context/            # React Context providers
├── data/               # Quotes, sections config
├── hooks/              # Custom React hooks
├── layouts/            # MainLayout wrapper
├── styles/             # Global CSS, variables, typography
└── utils/              # Helper functions, storage, a11y
```

---

## 🎬 Sections

| Section | Description | Color |
|---------|-------------|-------|
| 🎨 Creative Lab | Generative art & creative coding | Purple |
| 🎬 Motion Studio | Animation experiments | Pink |
| 🎵 Sound Waves | Audio visualizations | Teal |
| 🎮 Game Zone | Mini-games & interactive toys | Orange |
| 💻 Code Vault | Code snippets & dev tools | Violet |

---

## 🧩 Components

### Common Components
- **Button** - Multiple variants (primary, secondary, ghost, outline), sizes, and loading state
- **Card** - Flexible card container with CardHeader, CardBody, CardFooter subcomponents
- **Tooltip** - Animated hover tooltips with position options (top, bottom, left, right)
- **Loader** - Full-screen loading animation with dots variant
- **Footer** - Site footer with navigation and scroll-to-top
- **SkipLink** - Accessibility skip navigation link

### Custom Hooks
- `useScrollPosition` - Track scroll position with throttling
- `useFavorites` - Manage favorite sections
- `useLocalStorage` - Persist state to localStorage
- `useMediaQuery` - Responsive media query matching
- `useKeyPress` - Keyboard event handling with modifier support

---

## ♿ Accessibility

- Skip to main content link for keyboard navigation
- Focus trap utilities for modals
- Screen reader announcements
- Reduced motion support
- Semantic HTML structure
- ARIA attributes on interactive elements

---

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **Framer Motion** - Animation library
- **CSS Modules** - Scoped styling
- **CSS Variables** - Design tokens

---

## 📖 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [UI Diagrams](./docs/UI-DIAGRAMS.md)

---

## 🎯 Adding New Sections

1. Create folder in `src/components/sections/YourSection/`
2. Add `YourSection.jsx`, `YourSection.module.css`, `index.js`
3. Register in `src/data/sections.js`
4. Export from `src/components/sections/index.js`
5. Add to `App.jsx`

See [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

---

## 📜 License

MIT © 2025

---

Made with ♥ for fun
