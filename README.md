# GoBirding AI Website

A modern, responsive ReactJS website for GoBirding AI - Your AI-Powered Birding Companion. This website serves as both a marketing platform and informational resource for the iOS app that helps birding enthusiasts discover amazing locations using voice-powered AI search.

## 🌐 Live Website

Visit the live website at: **[https://gobirding.ai](https://gobirding.ai)**

## 🚀 Features

- **Modern React Design**: Built with React 19+ and modern JavaScript
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Tailwind CSS**: Beautiful, consistent styling with a custom color palette
- **Fast Performance**: Optimized for quick loading and smooth user experience
- **SEO Friendly**: Clean structure and semantic HTML
- **Custom Domain**: Deployed with custom domain on GitHub Pages

## 🛠️ Technology Stack

- **React 19.1.0**: Latest React with modern features
- **React Router DOM**: Client-side routing for smooth navigation
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Heroicons**: Beautiful SVG icons
- **GitHub Pages**: Free hosting with custom domain

## 📱 About GoBirding AI

GoBirding AI is a sophisticated iOS app that transforms how birding enthusiasts discover and explore birding locations. Key features include:

- **Voice-Powered Search**: Natural language queries to find perfect birding spots
- **AI Intelligence**: Offline-capable AI running locally on device for complete privacy
- **16,000+ Locations**: Curated birding hotspots across all 50 US states
- **Complete Privacy**: All processing happens locally on your device
- **Weather Integration**: Real-time conditions and forecasts
- **eBird Integration**: Direct access to species data and recent visits
- **Affordable Pricing**: Starting at $0.99 in the App Store

## 🌐 Website Structure

- **Home**: Hero section with key features and call-to-action
- **Features**: Detailed breakdown of app capabilities and benefits
- **About**: Company story, mission, and values
- **Download**: App store information and system requirements

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/christhomas16/go-birding-website.git
cd go-birding-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📦 Deployment to GitHub Pages

This project is deployed to GitHub Pages with a custom domain.

### Current Deployment

- **Live URL**: [https://gobirding.ai](https://gobirding.ai)
- **GitHub Pages URL**: [https://christhomas16.github.io/go-birding-website](https://christhomas16.github.io/go-birding-website)
- **Custom Domain**: gobirding.ai (configured with GoDaddy DNS)

### Deployment Process

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages
- Site automatically updates at the custom domain

### DNS Configuration

The custom domain is configured with:
- 4 A records pointing to GitHub Pages IPs
- CNAME file in the repository root for domain verification
- GoDaddy DNS management for gobirding.ai

## 🎨 Customization

### Colors

The website uses a custom blue color palette inspired by the GoBirding AI logo:

- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Secondary**: Gray shades (`secondary-50` to `secondary-900`)

You can modify colors in `tailwind.config.js`.

### Content

- Update app information in the page components (`src/pages/`)
- Modify features and benefits in `src/pages/Features.js`
- Update company story in `src/pages/About.js`
- Change download links in `src/pages/Download.js`

### Images

The website includes custom images:
- `public/hero-banner.jpg` - Main homepage hero image
- `public/about.jpg` - About page hero image
- `public/voice-search.jpg` - Voice search feature illustration
- `public/advanced-ai.jpg` - AI technology illustration
- `public/location-database.jpg` - Location database illustration

## 📁 Project Structure

```
go-birding-website/
├── public/
│   ├── hero-banner.jpg       # Homepage hero image
│   ├── about.jpg             # About page image
│   ├── voice-search.jpg      # Feature images
│   ├── advanced-ai.jpg
│   ├── location-database.jpg
│   ├── CNAME                 # Custom domain configuration
│   └── index.html            # HTML template
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.js         # Navigation header
│   │   └── Footer.js         # Website footer
│   ├── pages/                # Page components
│   │   ├── Home.js           # Homepage
│   │   ├── Features.js       # Features page
│   │   ├── About.js          # About page
│   │   └── Download.js       # Download page
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── build/                    # Production build output
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run deploy`: Deploy to GitHub Pages
- `npm run eject`: Eject from Create React App (⚠️ one-way operation)

## 🌟 Key Features Highlighted

### Voice-Powered Search
- Natural language processing for birding queries
- Real-time transcription and feedback
- Hands-free operation perfect for field use

### AI Intelligence
- On-device processing for complete privacy
- Smart recommendations based on search criteria
- Intelligent ranking by relevance and location
- Offline-capable AI running locally on device

### Comprehensive Database
- Over 16,000 curated birding locations
- Rich species data and habitat information
- Direct eBird integration for current data
- Coverage across all 50 US states

## 📱 System Requirements (for the app)

- iOS 18.0 or later
- iPhone 14 Plus (recommended) or newer for optimal AI performance
- Location Services enabled
- Microphone access for voice commands

## 💰 Pricing

GoBirding AI is available starting at $0.99 in the App Store, making advanced AI-powered birding accessible to everyone.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Website**: [https://gobirding.ai](https://gobirding.ai)
- **GitHub Repository**: [https://github.com/christhomas16/go-birding-website](https://github.com/christhomas16/go-birding-website)
- **App Store**: Coming soon to iOS App Store

---

*Built with ❤️ for the birding community*
