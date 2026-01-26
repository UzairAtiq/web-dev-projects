# 📐 UI Diagrams & Visual Architecture

This document provides visual diagrams explaining the UI structure and behavior.

---

## 🖥️ Overall Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              VIEWPORT                                    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                         NAVBAR (fixed top)                         │ │
│  │  ┌──────┐  ┌─────────────────────────────────────────┐  ┌───────┐ │ │
│  │  │ ☰    │  │     ⭐ Fav1  ⭐ Fav2  ⭐ Fav3  ⭐ Fav4  │  │ Logo  │ │ │
│  │  │Toggle│  │         (max 5 favorites)               │  │       │ │ │
│  │  └──────┘  └─────────────────────────────────────────┘  └───────┘ │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ┌─────────────┐  ┌────────────────────────────────────────────────────┐│
│  │   SIDEBAR   │  │                  MAIN CONTENT                       ││
│  │   (fixed)   │  │                                                     ││
│  │             │  │  ┌────────────────────────────────────────────────┐ ││
│  │  ┌───────┐  │  │  │                HERO SECTION                    │ ││
│  │  │Section│  │  │  │          (100vh, background image)             │ ││
│  │  │  1    │  │  │  │                                                │ ││
│  │  ├───────┤  │  │  │  ┌──────────┐  ┌────────────────────────────┐ │ ││
│  │  │Section│  │  │  │  │  Quote   │  │    Section Cards Grid      │ │ ││
│  │  │  2    │  │  │  │  │  (left)  │  │    (clickable, animated)   │ │ ││
│  │  ├───────┤  │  │  │  └──────────┘  └────────────────────────────┘ │ ││
│  │  │Section│  │  │  └────────────────────────────────────────────────┘ ││
│  │  │  3    │  │  │                                                     ││
│  │  ├───────┤  │  │  ┌────────────────────────────────────────────────┐ ││
│  │  │Section│  │  │  │              SECTION 1 (100vh)                 │ ││
│  │  │  4    │  │  │  └────────────────────────────────────────────────┘ ││
│  │  ├───────┤  │  │                                                     ││
│  │  │Section│  │  │  ┌────────────────────────────────────────────────┐ ││
│  │  │  5    │  │  │  │              SECTION 2 (100vh)                 │ ││
│  │  └───────┘  │  │  └────────────────────────────────────────────────┘ ││
│  │             │  │                        ...                          ││
│  └─────────────┘  └────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Sidebar Behavior

### Closed State (Default)

```
┌──────────────────────────────────────────────────┐
│                                                   │
│  ┌──┐  ┌──────────────────────────────────────┐  │
│  │☰ │  │                                      │  │
│  │  │  │         Main Content Area            │  │
│  │  │  │         (full width)                 │  │
│  │  │  │                                      │  │
│  └──┘  └──────────────────────────────────────┘  │
│   ↑                                               │
│  Small toggle button visible                      │
│                                                   │
└──────────────────────────────────────────────────┘
```

### Open State (Animated slide-in)

```
┌──────────────────────────────────────────────────┐
│                                                   │
│  ┌────────────────┐  ┌────────────────────────┐  │
│  │   SIDEBAR      │  │                        │  │
│  │                │  │   Main Content         │  │
│  │  ┌──────────┐  │  │   (pushed or overlay)  │  │
│  │  │ Section 1│←─┼──┼── Click to scroll      │  │
│  │  ├──────────┤  │  │                        │  │
│  │  │ Section 2│  │  │   ┌─────────────────┐  │  │
│  │  ├──────────┤  │  │   │  Dimmed overlay │  │  │
│  │  │ Section 3│  │  │   │  (click close)  │  │  │
│  │  ├──────────┤  │  │   └─────────────────┘  │  │
│  │  │  ⭐ Add  │←─┼──┼── Add to favorites     │  │
│  │  │ to favs  │  │  │                        │  │
│  │  └──────────┘  │  │                        │  │
│  │     [✕ Close]  │  │                        │  │
│  └────────────────┘  └────────────────────────┘  │
│                                                   │
└──────────────────────────────────────────────────┘
```

### Animation Sequence

```
Frame 0:   Sidebar off-screen (translateX: -100%)
           ↓
Frame 1:   Sidebar slides in (translateX: 0%)
           Background dims (opacity: 0 → 0.5)
           ↓
Frame 2:   Nav items stagger in (opacity, y)
           ↓
Frame 3:   Fully visible, interactive
```

---

## ⭐ Navbar Favorites System

### State Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        NAVBAR                                    │
│                                                                  │
│   [☰]  [⭐ Section A] [⭐ Section C] [⭐ Section E]  [🎮 Logo]   │
│         ↑              ↑              ↑                          │
│         │              │              │                          │
│         └──────────────┴──────────────┘                          │
│                        │                                         │
│              Max 5 favorites shown                               │
│                        │                                         │
│         ┌──────────────┴──────────────┐                          │
│         │      FavoritesContext       │                          │
│         │                             │                          │
│         │  favorites: ['a', 'c', 'e'] │                          │
│         │  addFavorite(id)            │                          │
│         │  removeFavorite(id)         │                          │
│         │  isFavorite(id) → boolean   │                          │
│         └─────────────────────────────┘                          │
└─────────────────────────────────────────────────────────────────┘
```

### Adding a Favorite (Animation)

```
State A: Before Add
┌────────────────────────────────────────┐
│  [Fav1] [Fav2] [Fav3]      [+ Add]    │
└────────────────────────────────────────┘
                    ↓
                Click "Add to Favorites"
                    ↓
State B: Animation
┌────────────────────────────────────────┐
│  [Fav1] [Fav2] [Fav3] [NewFav→→→→]    │
│                        (slides in)     │
└────────────────────────────────────────┘
                    ↓
State C: Complete
┌────────────────────────────────────────┐
│  [Fav1] [Fav2] [Fav3] [NewFav]        │
└────────────────────────────────────────┘
```

---

## 🌅 Hero Section Overlay System

### Layer Structure (bottom to top)

```
Layer 0 (Bottom): Background Image
┌─────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░ HERO BACKGROUND IMAGE ░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└─────────────────────────────────────────┘

Layer 1: Gradient Overlay (optional, for readability)
┌─────────────────────────────────────────┐
│▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└─────────────────────────────────────────┘

Layer 2: Content Layer
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────┐  ┌─────────────────┐  │
│  │             │  │                 │  │
│  │   "Quote"   │  │  Section Cards  │  │
│  │             │  │  Grid Layout    │  │
│  │   - Anime   │  │                 │  │
│  │             │  │  [1] [2] [3]    │  │
│  └─────────────┘  │  [4] [5]        │  │
│                   └─────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### CSS Implementation

```css
.heroSection {
  position: relative;
  min-height: 100vh;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.heroSection::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
}

.heroContent {
  position: relative;
  z-index: 1;
  /* Content sits above overlay */
}
```

---

## 📱 Responsive Breakpoints

```
Desktop (1200px+)
┌─────────────────────────────────────────────────────────┐
│  [☰] [Fav1] [Fav2] [Fav3] [Fav4] [Fav5]        [Logo]  │
├─────────────────────────────────────────────────────────┤
│  [Sidebar]  │          Main Content                     │
│             │                                           │
│             │   ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│             │   │ Card 1  │ │ Card 2  │ │ Card 3  │    │
│             │   └─────────┘ └─────────┘ └─────────┘    │
└─────────────────────────────────────────────────────────┘

Tablet (768px - 1199px)
┌───────────────────────────────────────┐
│  [☰]  [Fav1] [Fav2] [Fav3]   [Logo]  │
├───────────────────────────────────────┤
│      Main Content (sidebar overlay)   │
│                                       │
│   ┌─────────┐ ┌─────────┐            │
│   │ Card 1  │ │ Card 2  │            │
│   └─────────┘ └─────────┘            │
│   ┌─────────┐ ┌─────────┐            │
│   │ Card 3  │ │ Card 4  │            │
│   └─────────┘ └─────────┘            │
└───────────────────────────────────────┘

Mobile (< 768px)
┌─────────────────────────┐
│  [☰]       [Logo]       │
├─────────────────────────┤
│   Main Content          │
│                         │
│   ┌─────────────────┐   │
│   │     Card 1      │   │
│   └─────────────────┘   │
│   ┌─────────────────┐   │
│   │     Card 2      │   │
│   └─────────────────┘   │
└─────────────────────────┘
```

---

## 🎬 Animation Boundaries

```
                    ┌─────────────────────────────────────┐
                    │        Animation Zones              │
                    └─────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────┐
│  NAVBAR ZONE                                                       │
│  - Favorite pills: layoutId animations (shared layout)            │
│  - Hover: scale(1.05), subtle glow                                │
│  - Add/Remove: AnimatePresence for enter/exit                     │
├───────────────────────────────────────────────────────────────────┤
│  SIDEBAR ZONE                                                      │
│  - Panel: slideIn from left (translateX)                          │
│  - Nav items: staggerChildren (delay: 0.1s each)                  │
│  - Backdrop: fadeIn opacity                                        │
├───────────────────────────────────────────────────────────────────┤
│  HERO ZONE                                                         │
│  - Quote: typewriter effect on load                               │
│  - Section cards: staggered fadeInUp                              │
│  - Card hover: scale(1.03), shadow increase                       │
│  - Background: subtle parallax (optional)                          │
├───────────────────────────────────────────────────────────────────┤
│  SECTION ZONES (each section)                                      │
│  - Entry: fadeInUp when scrolled into view (useInView)            │
│  - Internal animations: section-specific                          │
│  - Exit: none (sections stay visible once scrolled)               │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Component Hierarchy

```
App
 ├── FavoritesProvider
 │    └── SidebarProvider
 │         └── ThemeProvider
 │              └── MainLayout
 │                   ├── Navbar
 │                   │    ├── MenuToggle
 │                   │    ├── FavoritesList
 │                   │    │    └── FavoriteItem (×5 max)
 │                   │    └── Logo
 │                   │
 │                   ├── Sidebar
 │                   │    ├── SidebarHeader
 │                   │    ├── NavList
 │                   │    │    └── NavItem (per section)
 │                   │    └── SidebarFooter
 │                   │
 │                   └── MainContent
 │                        ├── HeroSection
 │                        │    ├── QuoteDisplay
 │                        │    └── SectionCards
 │                        │         └── SectionCard (×5)
 │                        │
 │                        ├── SectionOne
 │                        ├── SectionTwo
 │                        ├── SectionThree
 │                        ├── SectionFour
 │                        └── SectionFive
```

---

This diagram set provides a complete visual reference for understanding and extending the playground architecture.
