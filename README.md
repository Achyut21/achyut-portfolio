# Achyut Katiyar Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion featuring a stunning dark mode with animated stars background.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

Live Website: [https://achyutkatiyar.com](https://www.achyutkatiyar.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Using This Template](#using-this-template)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Overview

This portfolio website showcases my projects, experience, and skills with a focus on modern web development and innovative UI/UX. The site features smooth animations, a unique dark mode experience with Three.js stars animation, and a responsive design that works across all devices.

## Features

- **Modern UI/UX**: Clean, minimal design with custom animations
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with a beautiful starry background in dark mode
- **Command Palette (⌘K)**: Keyboard-driven navigation inspired by power user tools
- **Interactive Components**:
  - Floating glassmorphic navbar
  - Animated project cards
  - Timeline-based experience section
  - Achievement showcase
  - Testimonials/recommendations
- **Performance Optimized**: Fast load times and smooth animations
- **Accessibility**: ARIA-compliant components and keyboard navigation
- **SEO Friendly**: Proper metadata and semantic HTML

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**:
  - Framer Motion
  - Three.js (for starry background)
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Fonts**: Inter (variable) and custom fonts

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                       # Next.js app directory
│   ├── (routes)/              # Page routes
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── experience/
│   │   └── projects/
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                # React components
│   ├── home/                  # Homepage components
│   ├── layout/                # Layout components (navbar, footer)
│   ├── projects/              # Project related components
│   ├── shared/                # Shared components
│   ├── ui/                    # UI components (shadcn)
│   ├── 3d-card.tsx           # 3D hover effect card
│   ├── black-hole-video.tsx   # Black hole video component
│   └── star-background.tsx    # Star background component
├── data/                      # Static data files
│   ├── projects.ts            # Projects data
│   ├── experience.ts          # Experience data
│   ├── skills.ts              # Skills data
│   └── social.ts              # Social links data
├── lib/                       # Utility functions
│   └── utils.ts               # Helper functions
├── public/                    # Static assets
│   ├── fonts/                 # Custom fonts
│   ├── images/                # Images
│   └── blackhole.webm         # Black hole video for dark mode
└── package.json               # Project dependencies
```

## Customization

### Personal Information

Edit the following files to update with your information:

- `data/projects.ts`: Add your projects
- `data/experience.ts`: Add your work and research experience
- `data/skills.ts`: Update your technical skills
- `data/social.ts`: Update your social media links

### Styling

The site uses Tailwind CSS for styling. You can customize:

1. **Colors**: Edit the theme colors in `globals.css` or `tailwind.config.mjs`
2. **Fonts**: Replace fonts in the `/public/fonts` directory and update references in `app/layout.tsx`
3. **Components**: Modify shadcn components in the `components/ui` directory

### Assets

Replace the following assets with your own:

- `/public/images/profile.jpg`: Your profile picture
- `/public/images/projects/`: Project images
- `/public/resume.pdf`: Your resume
- `/public/favicon.ico`: Site favicon

## Using This Template

If you'd like to use this template for your own portfolio website, you are welcome to do so under the following conditions:

### Attribution Requirements

1. **Required Attribution**:
   - You must maintain the original credit in the footer: "Original design by [Achyut Katiyar](https://github.com/achyut21)"
   - Keep the attribution link in the README

2. **GitHub Repository**:
   - If you fork or clone this repository, please star the original repository
   - Include a clear statement in your README indicating that your project is based on Achyut Katiyar's portfolio template

3. **Customization Requirements**:
   - Change the personal information to your own
   - Modify at least the color scheme or layout to make it personal to you
   - Replace all project, experience, and skill data with your own

### What Not To Do

- Remove attribution and claim the design as entirely your own
- Sell this template or any derivative work without explicit permission
- Use my personal information, images, or project details in your version

### Example Attribution

For your README:

```markdown
This portfolio is based on [Achyut Katiyar's Portfolio Template](https://github.com/achyut21/portfolio-website),
customized with my personal information and projects.
```

For your website footer:

```html
Design inspired by
<a href="https://github.com/achyut21" target="_blank" rel="noopener noreferrer">Achyut Katiyar</a>
```

## Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com), but can be deployed to any platform that supports Next.js.

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Set any required environment variables
4. Deploy!

Vercel will automatically detect that it's a Next.js project and configure the build settings accordingly.

### Deploying Elsewhere

For other platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Credits

- Design & Development: [Achyut Katiyar](https://github.com/achyut21)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide React](https://lucide.dev/)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- 3D Starfield: [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## License

This project is available for personal and educational use with required attribution as detailed in the [Using This Template](#using-this-template) section.

---

© 2025 Achyut Katiyar. All Rights Reserved.
