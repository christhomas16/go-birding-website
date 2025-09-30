# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Go Birding AI Website - A marketing and informational website for the Go Birding AI iOS app. Built with React 19, React Router, and Tailwind CSS, deployed to GitHub Pages with custom domain.

**Live URL**: https://gobirding.ai
**Brand Name**: "Go Birding AI" (not "GoBirding AI")

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Routing Structure
- Uses React Router DOM v7 for client-side routing
- All routes defined in [src/App.js](src/App.js)
- Single-page application with 6 main routes: Home, Features, About, Download, Terms, Privacy

### Component Organization
- **Layout Components**: [src/components/Header.js](src/components/Header.js), [src/components/Footer.js](src/components/Footer.js)
- **Page Components**: [src/pages/](src/pages/) directory contains one component per route
- Header/Footer wrap all routes in App.js, providing consistent navigation and branding

### Styling System
- Tailwind CSS with custom color palette defined in [tailwind.config.js](tailwind.config.js)
- **Primary colors**: Blue shades (primary-50 through primary-900) - use for main branding elements
- **Secondary colors**: Gray shades (secondary-50 through secondary-900) - use for text and backgrounds
- Custom colors match Go Birding AI brand identity
- All styling uses Tailwind utility classes, no custom CSS files beyond [src/index.css](src/index.css)

### Image Assets
Located in [public/](public/) directory:
- `hero-banner.jpg` - Homepage hero
- `about.jpg` - About page hero
- Feature images: `voice-search.jpg`, `advanced-ai.jpg`, `location-database.jpg`, etc.
- Images use responsive sizing with `max-w-full h-auto` classes

## Deployment

### GitHub Pages Configuration
- Deployed via gh-pages branch using `npm run deploy`
- Custom domain configured via [public/CNAME](public/CNAME) file (contains `gobirding.ai`)
- Homepage field in package.json must match deployment URL: `https://gobirding.ai`
- DNS configured with GoDaddy pointing to GitHub Pages IPs

### Deployment Workflow
1. Make changes to source code
2. Test locally with `npm start`
3. Run `npm run deploy` - this builds and pushes to gh-pages branch automatically
4. Changes propagate to live site within minutes

## Key Implementation Details

### App Information
- **iOS App**: Go Birding AI - voice-powered birding location discovery
- **Database**: 19,200+ birding locations across US/Canada
- **Privacy**: All AI processing happens on-device
- **Pricing**: Starting at $0.99 on App Store
- **Requirements**: iOS 18.0+, iPhone 14 Plus or newer recommended

### Navigation
- Header component uses HeadlessUI Menu for mobile responsiveness
- Active route highlighting uses React Router's location hook
- All internal links use React Router's Link component (never `<a>` tags for internal routes)

### Content Updates
- Feature descriptions in [src/pages/Features.js](src/pages/Features.js)
- App Store links and download info in [src/pages/Download.js](src/pages/Download.js)
- Company story in [src/pages/About.js](src/pages/About.js)
- Legal pages: [src/pages/TermsOfService.js](src/pages/TermsOfService.js), [src/pages/PrivacyPolicy.js](src/pages/PrivacyPolicy.js)

## Testing

- Testing setup uses React Testing Library and Jest
- Configuration in [src/setupTests.js](src/setupTests.js)
- Run tests with `npm test` (interactive watch mode)
- Test files use `.test.js` extension

## Important Notes

- **Brand consistency**: Always use "Go Birding AI" with space and capital letters
- **Responsive design**: Site is mobile-first, uses Tailwind responsive utilities
- **SEO**: Semantic HTML structure, descriptive text for accessibility
- **Performance**: Production builds are optimized by Create React App