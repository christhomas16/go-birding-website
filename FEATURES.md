# Go Birding AI - Complete Features Overview

## Overview

Go Birding AI is a family of iOS applications designed to enhance birding experiences through artificial intelligence, privacy-focused design, and modern mobile technology. The ecosystem currently includes two apps: **Go Birding AI** (location discovery) and **Bird Chatter** (sound identification).

**Website**: https://gobirding.ai
**Platform**: iOS 18.0+
**Technology Stack**: React 19, React Router v7, Tailwind CSS, GitHub Pages

---

## App 1: Go Birding AI - Location Discovery

**Tagline**: AI-Powered Birding Companion
**Price**: $4.99 (one-time purchase)
**Status**: Live on App Store
**App Store Link**: https://apps.apple.com/us/app/go-birding-ai/id6747407940

### Core Features

#### 1. Voice-Powered Search
- Natural language voice commands for finding birding locations
- Real-time transcription showing words as you speak
- Hands-free operation perfect for field use
- Understands phrases like "Find lighthouse spots" or "Ocean County locations"
- Supports complex queries with multiple criteria

#### 2. Advanced AI Intelligence
- MLX-optimized on-device AI model (~332 MB)
- Complete privacy - no data sent to external servers
- Smart recommendations based on search criteria
- AI explanations for why each location matches your needs
- Response Style presets: Accurate or Creative modes
- Text-to-speech capabilities with customizable voices (male/female, adjustable rate/pitch)

#### 3. Comprehensive Location Database
- **19,200+ curated birding hotspots**
- Coverage: All 50 US states + 7 Canadian provinces
- Rich details: species counts, habitat information, amenities
- Direct eBird integration for recent sighting data
- Regular updates based on user feedback and eBird data

#### 4. Interactive Hotspot Map
- Visual browsing of all 19,200+ locations
- Real-time GPS tracking with automatic map centering
- Tap hotspot pins to view detailed information
- Filter by county or show favorites only
- Sort locations by distance from current position
- Bidirectional sync between map pins and location list
- Automatic zoom to fit nearby hotspots

#### 5. Intelligent Search & Ranking
- Multi-factor scoring system combining:
  - Search query relevance
  - Proximity to current location
  - Species diversity counts
  - County-aware filtering
- Handles specialized queries (wetlands, migration spots, rare species)
- Smart state/province detection using GPS + GeoJSON polygon boundaries
- Manual override option for preferred regions
- Continuous location monitoring for automatic region switching

#### 6. Weather & Environmental Conditions
- Current weather conditions and hourly forecasts
- Wind speed and direction (crucial for birding success)
- Sunrise and sunset times for optimal timing
- Tide predictions for coastal locations
- Coastal proximity awareness with low-tide prioritization
- Weather-aware AI recommendations

#### 7. Personal Favorites System
- Heart icon to instantly save locations
- Quick access without searching
- Complete location information preserved
- Easy management with swipe-to-delete
- Filter map to show only favorites

#### 8. Privacy-First Design
- All AI processing happens locally on device
- No data sharing or external server communication
- No tracking or analytics collection
- Complete control over your birding data
- Works offline after initial setup

### Technical Specifications

**Requirements**:
- iOS 18.0 or later (required)
- iPhone 11 or newer (recommended for optimal AI performance)
- Location Services enabled (required)
- Microphone access (required)
- 2GB available storage (recommended)

**Performance**:
- Best experience on iPhone 11+ for MLX on-device AI
- Older devices use lighter fallback for stability
- Offline-capable after AI model download

**Database**:
- 19,200+ locations with comprehensive metadata
- GeoJSON-based region boundaries for accurate state/province detection
- eBird API integration for real-time species data

---

## App 2: Bird Chatter - Sound Identification

**Tagline**: Real-Time Bird Sound ID
**Price**: Free
**Status**: Coming Soon
**Technology**: Cornell Lab's BirdNET v2.4

### Core Features

#### 1. Real-Time Bird Detection
- One-tap recording with live species identification
- Detections appear in real-time during recording
- Visual feedback with confidence scoring
- Orange icons for preliminary detections
- Green checkmarks for confirmed species
- Live audio waveform visualization

#### 2. BirdNET AI Technology
- Powered by Cornell Lab's BirdNET v2.4 AI model
- **6,521 species database** covering global birds
- On-device AI processing for complete privacy
- 48kHz professional-grade audio recording
- FP32 TensorFlow Lite model for high precision
- 3-second audio chunk analysis
- Temporal smoothing for enhanced accuracy
- Confidence scoring for every detection

#### 3. Location Intelligence
- GPS-aware detection using eBird data
- Improves accuracy based on location and time
- Filters unlikely species for your region
- Interactive map view of recording locations
- Distance traveled calculations
- Adaptive filtering optimized for rare species discovery

#### 4. Gamification System
- Progressive leveling system with clear progress bars
- Points for every species detected:
  - Species Detection: +50 points
  - Ultra-Rare Find (90%+ rarity): +45 points
  - Very Rare Find (80-90% rarity): +35 points
  - Rare Find (70-80% rarity): +25 points
  - New Location Explorer: +100 points
  - Confirmation Bonus: +10 points
- **9+ achievements** from First Bird to Master birder
- Visual celebrations with floating points animations
- Particle effects for discoveries
- Level-up notifications

#### 5. Statistics & Analytics
- Lifetime species count tracking
- Complete recording history with metadata
- Rarity statistics for your finds
- Detection timelines for every recording
- Confidence tracking over time
- Distance traveled metrics

#### 6. Recording Management
- Complete history with playback capability
- Search and filter by species, date, or location
- Bulk management options
- Detailed metadata for each recording
- Audio playback with waveform visualization

#### 7. Multi-Language Support
- **11 languages supported**: English, German, French, Spanish, Portuguese, Dutch, Italian, Japanese, Korean, Chinese
- Species names in all supported languages
- Scientific names always displayed
- Seamless language switching

#### 8. Privacy Protection
- On-device AI processing only
- Recordings stay completely private
- No internet required for core functionality
- Optional location services
- No data collection or tracking

### Technical Specifications

**Requirements**:
- iOS 18.0 or later
- Microphone access (required)
- Location services (optional but recommended)
- 2GB available storage

**Audio Technology**:
- 48kHz high-quality recording
- Professional-grade audio processing
- Real-time waveform visualization
- Lossless audio storage

---

## Website Architecture

### Technology Stack

**Frontend Framework**:
- **React 19** - Latest version with concurrent features and improved performance
- **React Router DOM v7** - Client-side routing with nested routes and data loading
- **Tailwind CSS v3.4** - Utility-first CSS framework with custom design tokens
- **Heroicons v2.2** - Beautiful SVG icons from Tailwind team
- **HeadlessUI v2.2** - Unstyled, accessible UI components (used for mobile menu)

**Build & Deployment**:
- **Create React App 5.0** - Zero-config build setup with webpack
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **gh-pages** - Automated GitHub Pages deployment
- **GitHub Pages** - Static site hosting with custom domain support

### Application Structure

```
go-birding-website/
├── public/                    # Static assets served directly
│   ├── index.html            # HTML template with root div
│   ├── CNAME                 # Custom domain configuration (gobirding.ai)
│   ├── logo.png              # App icon/logo
│   ├── hero-banner.jpg       # Homepage hero image
│   ├── about.jpg             # About page hero image
│   ├── voice-search.jpg      # Feature image
│   ├── advanced-ai.jpg       # Feature image
│   ├── location-database.jpg # Feature image
│   ├── visual-location.jpg   # Interactive map feature image
│   └── birdchatter/          # Bird Chatter app assets
│       ├── AppIcon.png       # Bird Chatter icon
│       └── IMG_*.PNG         # App screenshots for carousel
│
├── src/
│   ├── index.js              # React entry point, renders App into DOM
│   ├── index.css             # Tailwind directives (@tailwind base/components/utilities)
│   ├── App.js                # Main router configuration with all routes
│   │
│   ├── components/           # Reusable layout components
│   │   ├── Header.js         # Sticky navigation with mobile menu
│   │   └── Footer.js         # Site footer with links and info
│   │
│   └── pages/                # Route-specific page components
│       ├── Home.js           # Landing page (/)
│       ├── Features.js       # Go Birding AI features (/features)
│       ├── About.js          # Company story (/about)
│       ├── Download.js       # Both apps download page (/download)
│       ├── BirdChatter.js    # Bird Chatter app page (/bird-chatter)
│       ├── TermsOfService.js # Legal terms (/terms)
│       └── PrivacyPolicy.js  # Privacy policy (/privacy)
│
├── tailwind.config.js        # Tailwind configuration with custom colors
├── package.json              # Dependencies and npm scripts
├── CLAUDE.md                 # Project guidance for AI assistants
└── FEATURES.md               # This comprehensive feature documentation
```

### Routing Architecture

**React Router Setup** ([src/App.js](src/App.js)):
```javascript
<BrowserRouter>
  <Header />              // Persistent across all routes
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/about" element={<About />} />
    <Route path="/download" element={<Download />} />
    <Route path="/bird-chatter" element={<BirdChatter />} />
    <Route path="/terms" element={<TermsOfService />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
  </Routes>
  <Footer />              // Persistent across all routes
</BrowserRouter>
```

**Routing Features**:
- Client-side navigation (no page reloads)
- Active route highlighting using `useLocation()` hook
- Smooth scroll-to-top on navigation via custom `useScrollToTop` hook
- Mobile-responsive navigation with hamburger menu
- All internal navigation uses React Router's `Link`/`navigate()` (never `<a>` tags)

### Component Architecture

#### Layout Components

**Header Component** ([src/components/Header.js](src/components/Header.js)):
- Sticky positioning (`sticky top-0 z-50`) for always-visible navigation
- Desktop: Horizontal nav with Download CTA button
- Mobile: Hamburger menu with collapsible navigation
- Active route highlighting with primary color
- Logo click navigates to home with smooth scroll
- Custom `useScrollToTop` hook for consistent navigation behavior

**Footer Component** ([src/components/Footer.js](src/components/Footer.js)):
- Four-column grid layout (responsive to single column on mobile)
- Company info with logo and description
- Navigation links (Home, Features, About, Download)
- Legal links (Terms, Privacy)
- App stats (requirements, coverage, privacy)
- Copyright notice

#### Page Components

All page components follow a consistent structure:
1. **Hero Section** - Large heading, description, CTA buttons
2. **Feature Sections** - Grid layouts with icons, descriptions
3. **CTA Section** - Call-to-action with download/learn more buttons
4. **Responsive Design** - Mobile-first with breakpoint adjustments

**Key Patterns**:
- Use Heroicons for consistent iconography
- Tailwind utility classes for all styling (no custom CSS)
- Responsive grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Consistent spacing: `py-24` for section padding, `gap-8` for grids
- Hover states: `hover:shadow-lg transition-shadow duration-200`

### Design System

**Color Palette** ([tailwind.config.js](tailwind.config.js)):

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest blue (backgrounds)
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',  // Primary brand blue (buttons, links)
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Darkest blue
  },
  secondary: {
    50: '#f8fafc',   // Lightest gray (backgrounds)
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',  // Secondary gray (text)
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',  // Darkest gray (footer)
  }
}
```

**Color Usage Guidelines**:
- `primary-600`: Main CTA buttons, active nav items, brand elements
- `primary-50/100`: Hover states, background highlights
- `secondary-600`: Body text, descriptions
- `secondary-900`: Headings, bold text
- `gray-50`: Section backgrounds (alternating with white)
- `green-600`: Bird Chatter branding accent

**Typography**:
- Headings: `text-4xl lg:text-6xl font-bold` for hero titles
- Subheadings: `text-3xl font-bold` for section titles
- Body: `text-xl text-gray-600` for descriptions
- Base font: System font stack (via Tailwind defaults)

**Spacing System**:
- Section padding: `py-24` (vertical), `px-4 sm:px-6 lg:px-8` (horizontal)
- Content max-width: `max-w-7xl mx-auto` for page content
- Grid gaps: `gap-8` or `gap-12` depending on layout density
- Component spacing: `mb-6`, `mb-8`, `mb-16` for hierarchical spacing

**Responsive Breakpoints** (Tailwind defaults):
- `sm`: 640px (tablets)
- `md`: 768px (small laptops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)

### Navigation & State Management

**Navigation Strategy**:
```javascript
// Custom hook for smooth scroll-to-top navigation
const useScrollToTop = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return navigateWithScroll;
};
```

**State Management**:
- **No global state library** (Redux, Context, etc.) - intentionally kept simple
- Component-level state via `useState`:
  - Header: `isMenuOpen` for mobile menu toggle
  - BirdChatter: `currentSlide` for screenshot carousel
- URL state via React Router's `useLocation` hook for active route detection

**Navigation Flow**:
1. User clicks nav link or button
2. `navigate(path)` updates URL and renders new route
3. `setTimeout` ensures DOM update before scroll
4. `window.scrollTo()` smoothly scrolls to top
5. Header highlights active route via `location.pathname` check

### Build & Deployment Pipeline

**Development Workflow**:
```bash
npm start              # Starts webpack dev server on localhost:3000
                       # Hot module replacement for instant updates
                       # Source maps for debugging
```

**Production Build**:
```bash
npm run build          # Creates optimized production build in /build
                       # Minifies JS/CSS, optimizes images
                       # Generates source maps
                       # Creates static HTML for each route
```

**Deployment Process**:
```bash
npm run deploy         # Runs predeploy script (npm run build)
                       # Pushes /build directory to gh-pages branch
                       # GitHub Pages serves from gh-pages branch
                       # Custom domain configured via CNAME file
```

**GitHub Pages Configuration**:
- **Repository**: Hosted on GitHub (private/public)
- **Branch**: `gh-pages` branch auto-created by `gh-pages` package
- **Custom Domain**: `gobirding.ai` configured via:
  1. `CNAME` file in `/public` directory (copied to build)
  2. DNS records at GoDaddy pointing to GitHub Pages IPs:
     - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
     - CNAME record: `www` -> `<username>.github.io`
- **HTTPS**: Automatically provided by GitHub Pages

**Deployment URL**: https://gobirding.ai
**Deployment Time**: ~2-5 minutes after `npm run deploy`

### Performance Optimizations

**Build Optimizations** (via Create React App):
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Removes unused code from bundles
- **Minification**: Terser for JS, cssnano for CSS
- **Asset Optimization**: Images optimized, fonts subset
- **Gzip Compression**: Static assets pre-compressed
- **Cache Headers**: Long-term caching with content hashes in filenames

**Runtime Optimizations**:
- **Lazy Loading**: Routes loaded on-demand (React Router)
- **Image Optimization**:
  - Responsive sizes via `max-w-full h-auto`
  - Proper alt text for accessibility
  - Modern formats (JPEG for photos)
- **CSS**: Single CSS bundle via Tailwind (all unused styles purged)
- **No External Fonts**: Uses system font stack for fast rendering

**Performance Metrics** (estimated):
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Total Bundle Size: ~200-300KB (gzipped)
- Lighthouse Score: 90+ across all categories

### Testing & Quality

**Testing Setup**:
- **Framework**: Jest + React Testing Library
- **Configuration**: [src/setupTests.js](src/setupTests.js)
- **Commands**:
  - `npm test` - Interactive watch mode
  - `npm test -- --coverage` - Coverage report

**Test Conventions**:
- Test files use `.test.js` extension
- Co-located with components (e.g., `Header.test.js` next to `Header.js`)
- Focus on user behavior, not implementation details
- Test accessibility (ARIA labels, keyboard navigation)

**Code Quality**:
- **ESLint**: Configured via Create React App (react-app preset)
- **Prettier**: (Optional) For consistent formatting
- **PropTypes**: (Not used) TypeScript could be added for type safety

### Browser Support

**Supported Browsers** ([package.json](package.json) browserslist):
```json
"production": [
  ">0.2%",           // Browsers with >0.2% market share
  "not dead",        // Browsers still receiving updates
  "not op_mini all"  // Exclude Opera Mini (limited JS support)
],
"development": [
  "last 1 chrome version",
  "last 1 firefox version",
  "last 1 safari version"
]
```

**Key Browser Features Used**:
- CSS Grid & Flexbox (IE11 not supported)
- ES6+ JavaScript (transpiled by Babel)
- SVG icons (Heroicons)
- Smooth scroll behavior (`behavior: 'smooth'`)

### Accessibility

**WCAG Compliance Efforts**:
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- ARIA labels on interactive elements (buttons, links)
- Keyboard navigation support (tab order, focus states)
- Color contrast ratios meet WCAG AA standards
- Responsive text sizing (no fixed pixel sizes for body text)

**Future Improvements**:
- Skip-to-content link for screen readers
- Focus trap in mobile menu
- Reduced motion support (`prefers-reduced-motion`)
- Comprehensive ARIA live regions for dynamic content

### SEO Optimization

**Current SEO Elements**:
- Semantic HTML structure
- Descriptive page titles (via React Helmet could be added)
- Meta descriptions (could be enhanced with react-helmet)
- Image alt text with keywords
- Internal linking structure
- Mobile-responsive (Google mobile-first indexing)
- Fast load times (GitHub Pages CDN)

**Potential Enhancements**:
- React Helmet for dynamic meta tags per route
- Sitemap.xml generation
- Robots.txt configuration
- Open Graph tags for social sharing
- Schema.org structured data (App, Organization)
- Pre-rendering for better crawler indexing

### Routes Detail

| Route | Component | Purpose | Key Features |
|-------|-----------|---------|--------------|
| `/` | Home | Landing page | Hero banner, feature overview, stats, CTAs |
| `/features` | Features | Go Birding AI features | Detailed feature breakdown with images, workflow steps, technical specs |
| `/about` | About | Company story | Mission, values, stats, team story |
| `/download` | Download | App download hub | Both apps, requirements, FAQs, App Store links |
| `/bird-chatter` | BirdChatter | Bird Chatter app | Features, screenshots carousel, gamification details, Cornell Lab tech |
| `/terms` | TermsOfService | Legal terms | Terms of service, user agreements |
| `/privacy` | PrivacyPolicy | Privacy policy | Data handling, privacy practices |

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1.0 | UI framework |
| react-dom | ^19.1.0 | React DOM renderer |
| react-router-dom | ^7.6.3 | Client-side routing |
| tailwindcss | ^3.4.17 | Utility-first CSS |
| @heroicons/react | ^2.2.0 | SVG icon library |
| @headlessui/react | ^2.2.4 | Unstyled UI components |
| react-scripts | 5.0.1 | Build tooling (CRA) |
| gh-pages | ^6.3.0 | GitHub Pages deployment |
| @testing-library/react | ^16.3.0 | Component testing |
| @testing-library/jest-dom | ^6.6.3 | Jest DOM matchers |

### Development Best Practices

**Code Style**:
- Functional components with hooks (no class components)
- Arrow functions for component definitions
- Destructure props in function parameters
- Use semantic variable names (`isMenuOpen` not `state1`)
- Group imports: React, third-party, local components
- Consistent file naming: PascalCase for components, camelCase for utilities

**Component Patterns**:
- Single Responsibility Principle (each component has one job)
- Composition over inheritance
- Props for component communication (no prop drilling with context)
- Custom hooks for reusable logic (`useScrollToTop`)
- Colocate related files (components + tests)

**Git Workflow** (inferred):
- Main branch: `main` (default, production-ready code)
- gh-pages branch: Auto-generated by deployment script
- Feature branches: For new features/changes
- Commit messages: Descriptive, imperative mood

---

## Website Features

### Page Routes

1. **Home** (`/`) - Hero banner, feature overview, CTA
2. **Features** (`/features`) - Comprehensive feature details for Go Birding AI
3. **About** (`/about`) - Company story, mission, values
4. **Download** (`/download`) - Both apps with App Store links and requirements
5. **Bird Chatter** (`/bird-chatter`) - Dedicated Bird Chatter app page
6. **Terms** (`/terms`) - Terms of Service
7. **Privacy** (`/privacy`) - Privacy Policy

### User Experience

**Navigation Pattern**:
- Sticky header remains visible during scroll
- Smooth scroll to top on route changes
- Active route highlighting in navigation
- Mobile hamburger menu with slide-down animation
- Logo click returns to homepage

**Responsive Behavior**:
- Mobile-first design approach
- Single-column layouts on mobile (< 768px)
- Two-column layouts on tablets (768-1024px)
- Three/four-column layouts on desktop (> 1024px)
- Collapsible mobile navigation
- Touch-friendly button sizes (min 44x44px)

---

## Brand Identity

**Official Brand Name**: "Go Birding AI" (with space, capital letters)
**Tagline**: Your AI-Powered Birding Companion
**Mission**: Make birding more accessible, enjoyable, and rewarding through AI technology with deep respect for nature and privacy

### Core Values

1. **Privacy First** - All data stays on device, no tracking, complete user control
2. **Innovation** - Cutting-edge AI brings future of birding to mobile devices
3. **Passion for Birding** - Built by birders who understand the joy of discovery
4. **Community** - Connecting birders with technology that enhances the natural experience

---

## Market Position

**Target Audience**: Birding enthusiasts of all levels seeking:
- Easier location discovery without hours of research
- Privacy-respecting AI technology
- Modern, intuitive mobile interfaces
- Real-time species identification
- Comprehensive coverage across North America

**Competitive Advantages**:
1. Complete privacy with on-device AI (no data sent to servers)
2. Voice-powered natural language search
3. Massive curated database (19,200+ locations)
4. Two complementary apps (location + identification)
5. Modern iOS-native experience optimized for latest devices
6. One-time purchase model (no subscriptions)
7. Integration with eBird data and Cornell Lab technology

---

## Future Roadmap

**Planned Enhancements** (inferred from architecture):
- Bird Chatter App Store launch
- Additional language support
- Expanded location database
- Enhanced gamification features
- Community sharing features (while maintaining privacy)
- Apple Watch companion apps
- Widget support for iOS home screen

---

## Development Commands

```bash
# Development
npm start              # Start dev server (http://localhost:3000)
npm test              # Run test suite
npm run build         # Create production build

# Deployment
npm run deploy        # Build and deploy to GitHub Pages
```

---

## File Structure

```
go-birding-website/
├── public/           # Static assets (images, CNAME, favicon)
├── src/
│   ├── components/   # Header, Footer
│   ├── pages/        # Route components (Home, Features, About, etc.)
│   ├── App.js        # Main router configuration
│   ├── index.js      # React entry point
│   └── index.css     # Tailwind directives
├── CLAUDE.md         # Project guidance for AI assistants
└── package.json      # Dependencies and scripts
```

---

## Statistics Summary

| Metric | Go Birding AI | Bird Chatter |
|--------|--------------|--------------|
| **Locations/Species** | 19,200+ locations | 6,521 species |
| **Geographic Coverage** | 50 US states + 7 CA provinces | Global |
| **Languages** | 1 (English UI) | 11 languages |
| **Price** | $4.99 one-time | Free |
| **Status** | Live | Coming Soon |
| **AI Model** | MLX-optimized custom | Cornell BirdNET v2.4 |
| **Model Size** | ~332 MB | FP32 TensorFlow Lite |
| **Privacy** | 100% on-device | 100% on-device |
| **Min iOS** | 18.0+ | 18.0+ |
| **Recommended Device** | iPhone 11+ | Any iOS 18 device |

---

## Contact & Support

**Website**: https://gobirding.ai
**Support**: Via App Store or website contact form
**Social**: (Not specified in current implementation)

---

*Last Updated: 2025-09-30*
*This document reflects the current state of the Go Birding AI ecosystem as deployed at gobirding.ai*
