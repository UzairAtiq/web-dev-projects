# For Esha 💕 - A Romantic React App

A beautiful, production-ready React web application with a romantic, modern UI built with Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Beautiful Romantic UI** - Soft gradients, rose/pink/lavender color palette
- **Smooth Animations** - Powered by Framer Motion for elegant transitions
- **Fully Responsive** - Perfect on mobile and desktop devices
- **Interactive Elements** - Animated buttons with ripple effects and hover states
- **Love Message Display** - Letter-by-letter text animation with floating hearts
- **Production Ready** - Optimized and ready for deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Vite and configure the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

Vercel will automatically deploy your app and provide you with a URL!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "New Project"

3. Connect your Git provider (GitHub, GitLab, or Bitbucket)

4. Select your repository

5. Vercel will auto-detect the Vite configuration

6. Click "Deploy"

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the romantic color palette:

```javascript
colors: {
  romantic: {
    rose: '#FF6B9D',
    pink: '#FFB3D9',
    // Add your custom colors
  },
}
```

### Animation Speed

In `LoveMessageScreen.jsx`, adjust the text animation speed:

```javascript
const interval = setInterval(() => {
  // Change 100 to adjust speed (lower = faster)
}, 100)
```

### Button Text

Edit the buttons array in `ButtonScreen.jsx`:

```javascript
const buttons = [
  { text: 'Your Custom Text 💖', delay: 0, emoji: '💖' },
  // Add more buttons
]
```

## 📁 Project Structure

```
Esha/
├── src/
│   ├── components/
│   │   ├── ButtonScreen.jsx      # First screen with animated buttons
│   │   └── LoveMessageScreen.jsx # Love message display screen
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles and Tailwind imports
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── vercel.json                    # Vercel deployment configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 💝 Notes

This app was created with love and attention to detail. The animations are designed to feel emotional and elegant, not aggressive. All effects are optimized for smooth performance across devices.

## 📄 License

This project is private and personal.

---

Made with ❤️ for Esha

