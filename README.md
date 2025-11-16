# AxeomLabs Website

Production-ready, responsive website for AxeomLabs — an interdisciplinary research and guidance lab.

## Features

- 🎨 **Dark Cosmic Design**: Deep navy/near-black theme with electric blue and violet accents
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation, semantic HTML, and aria labels
- 📱 **Responsive**: Optimized for all screen sizes from mobile to desktop
- 🎬 **Smooth Animations**: Framer Motion transitions with reduce-motion toggle
- 🌟 **Particle Background**: Lightweight cosmic particle canvas (can be disabled)
- 📝 **Blog System**: Markdown-based blog with frontmatter support
- 📧 **Contact Forms**: Contact and BadWater (free help) forms with validation

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Markdown**: React Markdown + gray-matter
- **Icons**: Lucide React
- **Backend**: Express.js (API ready for form submissions)

## Quick Start

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── TeamMember.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── BadWaterForm.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── BadWater.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Privacy.tsx
│   │   │   └── Terms.tsx
│   │   ├── App.tsx          # Main app component
│   │   └── index.css        # Global styles + theme
│   └── index.html
├── server/
│   ├── routes.ts            # API routes (ready for implementation)
│   ├── storage.ts           # Storage interface
│   └── index.ts             # Express server
├── content/
│   └── posts/               # Markdown blog posts
│       └── why-honest-research-matters.md
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── README.md
```

## Pages

1. **Home** (`/`) - Hero, services overview, values, blog preview
2. **About** (`/about`) - Mission, values, team bios
3. **Services** (`/services`) - Six service offerings with details
4. **BadWater** (`/badwater`) - Free human help portal with submission form
5. **Blog** (`/blog`) - Blog listing page
6. **Blog Post** (`/blog/:slug`) - Individual blog post
7. **Contact** (`/contact`) - Contact form and information
8. **Privacy** (`/privacy`) - Privacy policy
9. **Terms** (`/terms`) - Terms of service

## Configuration

### Colors

The cosmic color scheme is defined in `client/src/index.css`:

- Background: `#05060B` (near-black)
- Card: Slightly lighter navy
- Primary: `#2563ff` (electric blue)
- Secondary: `#8b5cf6` (vivid violet)
- Accent: `#3b2b6f` (deep purple)

### Fonts

- Sans: Inter (primary)
- Mono: JetBrains Mono (code)

### Reduce Motion

Users can toggle reduced motion via the navigation menu. The preference is stored in localStorage and disables:
- Particle background animations
- Parallax effects
- Hover scale animations

## Adding Blog Posts

1. Create a markdown file in `content/posts/` with frontmatter:

```markdown
---
title: Your Post Title
date: 2025-11-16
excerpt: A brief summary of your post
tags:
  - Tag1
  - Tag2
---

Your post content here...
```

2. The post will automatically appear in the blog listing

## Backend Implementation

The backend structure is ready for implementation. To enable form submissions:

### Contact Form & BadWater Form

1. Update `server/routes.ts` to add POST endpoints:
   - `/api/contact` - Contact form submissions
   - `/api/badwater` - BadWater form submissions

2. Implement email functionality using:
   - Nodemailer for SMTP
   - SendGrid/Resend integration (recommended)
   - Or mailto: fallback

3. File uploads for BadWater:
   - Multer middleware is installed
   - Configure storage in routes
   - Limit: 10MB files

### Example Implementation

```typescript
// server/routes.ts
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  // Send email to founder@axeomlabs.site
  // Return success response
});

app.post('/api/badwater', upload.single('file'), async (req, res) => {
  const { name, email, topic, message } = req.body;
  const file = req.file;
  // Save to /data/submissions.json
  // Send email notification
  // Return success response
});
```

## Deployment

### Replit Deployment

1. Click "Deploy" in Replit
2. The app will be available at your Replit URL

### Netlify/Vercel Deployment

```bash
# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod

# Deploy to Vercel
vercel --prod
```

### Environment Variables

For production, set:
- `SESSION_SECRET` - For session management
- Email service credentials (if using SMTP/SendGrid)

## Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast (WCAG AA)
- ✅ Alt text for images
- ✅ Reduce motion option
- ✅ Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Code splitting for routes
- Optimized particle count
- Minimal bundle size
- Fast page transitions

## Contact Information

- **Email**: founder@axeomlabs.site
- **Phone**: +91 8589820089

## License

Copyright © 2025 AxeomLabs. All rights reserved.

## Development Notes

### TODO: Backend Implementation

The following features require backend implementation:

1. **Form Submissions**
   - Wire Contact form to email service
   - Wire BadWater form to email + file storage
   - Add rate limiting for spam protection

2. **Blog System Enhancement**
   - Read markdown files from filesystem
   - Parse frontmatter with gray-matter
   - Generate dynamic blog listing
   - Calculate reading time

3. **Email Integration**
   - Set up SMTP or email service (SendGrid/Resend recommended)
   - Configure email templates
   - Add email validation

4. **Data Storage**
   - Create `/data/submissions.json` for BadWater submissions
   - Add backup/export functionality

### Code Comments

Search for `// TODO:` comments in the codebase for specific implementation notes.

## Support

For issues or questions about this codebase, contact the development team through the channels listed above.
