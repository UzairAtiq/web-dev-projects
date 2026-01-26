# 🤝 Contributing to Playground-Fun

Welcome! This guide will help you contribute to the playground effectively.

---

## 📋 Quick Start

```bash
# Clone and install
git clone <repo-url>
cd playground-fun
npm install

# Start development server
npm run dev
```

---

## 🗂️ Where to Put Things

| What | Where | Example |
|------|-------|---------|
| New Section | `src/components/sections/` | `SectionName/SectionName.jsx` |
| Shared Component | `src/components/common/` | `Button/Button.jsx` |
| Animation Variant | `src/animations/variants/` | `bounce.js` |
| Custom Hook | `src/hooks/` | `useNewHook.js` |
| Static Data | `src/data/` | `newData.js` |
| Global Styles | `src/styles/` | `newStyles.css` |
| Context Provider | `src/context/` | `NewContext.jsx` |

---

## 📁 Component Structure

Each component should follow this structure:

```
ComponentName/
├── ComponentName.jsx      # Main component
├── ComponentName.module.css  # Scoped styles
├── ComponentName.test.jsx # Tests (optional)
└── index.js               # Re-export
```

### Example Component

```jsx
// Button/Button.jsx
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
```

```js
// Button/index.js
export { Button } from './Button';
```

---

## 🎨 Styling Guidelines

### CSS Variables (use these!)

```css
/* Available in src/styles/variables.css */
var(--color-primary)
var(--color-secondary)
var(--color-accent)
var(--color-background)
var(--color-text)
var(--spacing-xs)  /* 4px */
var(--spacing-sm)  /* 8px */
var(--spacing-md)  /* 16px */
var(--spacing-lg)  /* 24px */
var(--spacing-xl)  /* 32px */
var(--radius-sm)
var(--radius-md)
var(--radius-lg)
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--transition-fast)
var(--transition-normal)
var(--transition-slow)
```

### CSS Module Naming

```css
/* Use camelCase for class names */
.sectionWrapper { }
.heroTitle { }
.navItem { }

/* Use BEM-like modifiers */
.button { }
.buttonPrimary { }
.buttonSecondary { }
```

---

## 🎬 Animation Guidelines

### Using Framer Motion Variants

```jsx
import { fadeInUp, staggerContainer } from '@/animations';

// Parent with stagger
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {/* Children will stagger */}
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
</motion.div>
```

### Creating New Variants

```js
// src/animations/variants/newVariant.js
export const newVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
```

---

## 📝 Adding a New Section

### 1. Create the component

```bash
mkdir src/components/sections/MyNewSection
touch src/components/sections/MyNewSection/MyNewSection.jsx
touch src/components/sections/MyNewSection/MyNewSection.module.css
touch src/components/sections/MyNewSection/index.js
```

### 2. Implement the section

```jsx
// MyNewSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './MyNewSection.module.css';

export const MyNewSection = ({ id, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={id} className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>{title}</h2>
        {/* Your content */}
      </motion.div>
    </section>
  );
};
```

### 3. Register in data

```js
// src/data/sections.js
{
  id: 'my-new-section',
  title: 'My New Section',
  description: 'A cool new section',
  icon: '✨',
  color: '#6B66FF'
}
```

### 4. Export from barrel

```js
// src/components/sections/index.js
export { MyNewSection } from './MyNewSection/MyNewSection';
```

---

## ✅ Code Quality Checklist

Before submitting:

- [ ] Component is properly typed (if using TypeScript)
- [ ] Styles use CSS variables where applicable
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Component is exported from barrel file
- [ ] No console.log statements
- [ ] Responsive design tested
- [ ] Accessibility considered (keyboard nav, ARIA)

---

## 🔄 Git Workflow

### Commit Message Format

```
type(scope): description

feat: new feature
fix: bug fix
style: formatting, styling
docs: documentation
refactor: code restructure
perf: performance improvement
test: adding tests
chore: maintenance
```

### Examples

```bash
git commit -m "feat(sections): add particle animation section"
git commit -m "fix(sidebar): correct animation timing"
git commit -m "style(hero): improve quote typography"
git commit -m "docs: update contributing guidelines"
```

---

## 🆘 Need Help?

1. Check the [Architecture docs](./ARCHITECTURE.md)
2. Look at existing components for patterns
3. Check the [UI Diagrams](./UI-DIAGRAMS.md)

Happy coding! 🚀
