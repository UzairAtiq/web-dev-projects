# 🎮 Playground Fun

> A premium personal playground featuring media galleries, games, and creative experiments with live Google Drive integration.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-FF0055?style=flat-square&logo=framer)
![Google Drive](https://img.shields.io/badge/Google%20Drive-Active-34A853?style=flat-square&logo=googledrive)

---

## ✨ Features

### 🎨 Media & Entertainment
- 🖼️ **Picture Gallery** - Auto-loads images from Google Drive with modern frames and modal view
- 🎬 **Video Studio** - Dynamic video player with Drive integration and hover preview
- 🎵 **Music Player** - Real-time visualizer with audio files from Google Drive
- 🎮 **Game Zone** - Interactive games (Number Guessing, Tic Tac Toe) with beautiful animations

### 🔧 Technical Features
- ⚡ **Collapsible Sections** - All sections load collapsed with smooth expand/collapse animations
- 🌐 **Live Google Drive Integration** - Automatically fetches and displays files from configured folders
- 🎯 **Beautiful Animations** - Enhanced Framer Motion animations throughout
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⭐ **Favorites System** - Pin your favorite sections for quick access
- 🎨 **Modern UI** - Glass morphism, gradients, and sleek design
- 🔄 **Loading States** - Smooth loading indicators while fetching content
- 🛡️ **Error Handling** - Graceful fallbacks to placeholder content

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
├── animations/          # Framer Motion variants & enhanced transitions
├── components/
│   ├── common/          # Button, Card, Tooltip, Loader, Footer, CollapsibleSection
│   ├── navigation/      # Navbar, Sidebar
│   └── sections/        # All playground sections
│       ├── PictureGallery/
│       ├── VideoStudio/
│       ├── MusicPlayer/
│       ├── GameZone/
│       │   └── games/   # Individual game components
│       └── GoonSection/
├── context/            # React Context providers
├── data/               # Quotes, sections config
├── hooks/              # Custom React hooks
├── layouts/            # MainLayout wrapper
├── styles/             # Global CSS, variables, typography, sections
└── utils/              # Helper functions, storage, a11y, googleDrive
```

---

## 🎬 Sections

| Section | Description | Features |
|---------|-------------|----------|
| 🖼️ Picture Gallery | Beautiful image display | Modern frames, modal view, grid layout |
| 🎬 Video Studio | Video player & playlist | Hover preview, playback controls |
| 🎵 Music Player | Audio with visualizer | Real-time visualizer, playlist, controls |
| 🎮 Game Zone | Interactive games | Number Guessing, Tic Tac Toe |
| 🚀 Goon Section | Coming soon | Placeholder with animations |

---

## 🎮 Games

### Number Guessing Game
- Guess numbers between 1-100
- Temperature hints (🥶 too low, 🥵 too high, 🔥 close)
- Attempt tracking and history
- Responsive design with smooth animations

### Tic Tac Toe
- Classic gameplay with modern UI
- Score tracking (X wins, O wins, Draws)
- Winning line highlight
- Smooth animations for all interactions

---

## 🌐 Google Drive Integration

Connect your Google Drive to dynamically load images, videos, and music:

1. Set up Google Cloud Project and enable Drive API
2. Create API key and restrict to Drive API
3. Share your Drive folders publicly
4. Update configuration in `src/utils/googleDrive.js`

See [Google Drive Setup Guide](./docs/GOOGLE_DRIVE_SETUP.md) for detailed instructions.

---

## 🧩 Components

### Common Components
- **Button** - Multiple variants (primary, secondary, ghost, outline), sizes, and loading state
- **Card** - Flexible card container with CardHeader, CardBody, CardFooter subcomponents
- **Tooltip** - Animated hover tooltips with position options (top, bottom, left, right)
- **Loader** - Full-screen loading animation with dots variant
- **Footer** - Site footer with navigation and scroll-to-top
- **SkipLink** - Accessibility skip navigation link
- **CollapsibleSection** - Wrapper for collapsible content with smooth animations

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
- Keyboard navigation for all games and sections

---

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **Framer Motion 12** - Animation library
- **CSS Modules** - Scoped styling
- **CSS Variables** - Design tokens
- **Google Drive API** - Dynamic file loading (optional)

---

## 📖 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [UI Diagrams](./docs/UI-DIAGRAMS.md)
- [Google Drive Setup](./docs/GOOGLE_DRIVE_SETUP.md)

---

## 🎯 Adding New Sections

1. Create folder in `src/components/sections/YourSection/`
2. Add `YourSection.jsx`, `YourSection.module.css`, `index.js`
3. Register in `src/data/sections.js`
4. Export from `src/components/sections/index.js`
5. Wrap in `CollapsibleSection` in `App.jsx`

See [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

---

## 📜 License

MIT © 2025

---

Made with ♥ for fun
