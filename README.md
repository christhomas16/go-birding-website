# GoBirding AI Website

A modern, responsive ReactJS website for GoBirding AI - Your AI-Powered Birding Companion. This website serves as both a marketing platform and informational resource for the iOS app that helps birding enthusiasts discover amazing locations using voice-powered AI search.

## 🚀 Features

- **Modern React Design**: Built with React 18+ and modern JavaScript
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Tailwind CSS**: Beautiful, consistent styling with a custom color palette
- **Fast Performance**: Optimized for quick loading and smooth user experience
- **SEO Friendly**: Clean structure and semantic HTML
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Technology Stack

- **React 19.1.0**: Latest React with modern features
- **React Router DOM**: Client-side routing for smooth navigation
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Heroicons**: Beautiful SVG icons
- **GitHub Pages**: Free hosting and deployment

## 📱 About GoBirding AI

GoBirding AI is a sophisticated iOS app that transforms how birding enthusiasts discover and explore birding locations. Key features include:

- **Voice-Powered Search**: Natural language queries to find perfect birding spots
- **AI Intelligence**: MLX-optimized Llama-3.2-1B model running on-device
- **16,000+ Locations**: Curated birding hotspots across all 50 US states
- **Complete Privacy**: All processing happens locally on your device
- **Weather Integration**: Real-time conditions and forecasts
- **eBird Integration**: Direct access to species data and recent visits

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

This project is configured for easy deployment to GitHub Pages:

### Automatic Deployment

1. Ensure your repository is connected to GitHub
2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Create a `gh-pages` branch
- Push the built files to GitHub Pages
- Make the site available at `https://christhomas16.github.io/go-birding-website`

### Manual Deployment

1. Build the project: `npm run build`
2. Push the `build` folder contents to your `gh-pages` branch
3. Enable GitHub Pages in your repository settings

### GitHub Pages Configuration

The project is pre-configured with:
- Homepage URL: `https://christhomas16.github.io/go-birding-website`
- Base path routing for GitHub Pages subdirectory
- Optimized build settings

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

### Logo

Replace `public/logo.png` with your app logo (recommended size: 512x512px).

## 📁 Project Structure

```
go-birding-website/
├── public/
│   ├── logo.png              # App logo
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

### Comprehensive Database
- Over 16,000 curated birding locations
- Rich species data and habitat information
- Direct eBird integration for current data

## 📱 System Requirements (for the app)

- iOS 18.0 or later
- iPhone 14 Plus (recommended) or newer for optimal AI performance
- Location Services enabled
- Microphone access for voice commands

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Website**: [https://christhomas16.github.io/go-birding-website](https://christhomas16.github.io/go-birding-website)
- **App Domain**: [https://gobirding.ai](https://gobirding.ai)
- **Repository**: [https://github.com/christhomas16/go-birding-website](https://github.com/christhomas16/go-birding-website)

## 📞 Support

For questions about the website or GoBirding AI app, visit [gobirding.ai](https://gobirding.ai).

---

Built with ❤️ for the birding community
