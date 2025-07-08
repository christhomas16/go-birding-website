# GitHub Pages Deployment Guide

This guide will help you deploy the GoBirding AI website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The website repository cloned locally

## Step-by-Step Deployment

### 1. Push Code to GitHub

First, make sure all your code is pushed to the main branch of your GitHub repository:

```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit - GoBirding AI website"

# Push to GitHub (make sure you have the remote set up)
git remote add origin https://github.com/christhomas16/go-birding-website.git
git push -u origin main
```

### 2. Deploy to GitHub Pages

The project is already configured for GitHub Pages deployment. Simply run:

```bash
npm run deploy
```

This command will:
- Build the project (`npm run build`)
- Create a `gh-pages` branch (if it doesn't exist)
- Push the built files to the `gh-pages` branch
- Make your site available at `https://christhomas16.github.io/go-birding-website`

### 3. Enable GitHub Pages (if needed)

If the automatic deployment doesn't enable GitHub Pages:

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch and `/ (root)` folder
6. Click "Save"

### 4. Verify Deployment

After deployment, your website should be available at:
`https://christhomas16.github.io/go-birding-website`

It may take a few minutes for the changes to propagate.

## Custom Domain Setup (Optional)

If you want to use your custom domain `gobirding.ai`:

### 1. Add CNAME file

Create a file named `CNAME` in the `public` folder with your domain:

```bash
echo "gobirding.ai" > public/CNAME
```

### 2. Configure DNS at GoDaddy

In your GoDaddy DNS settings:

1. Add an A record pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. Add a CNAME record for `www` pointing to `christhomas16.github.io`

### 3. Update package.json

Change the homepage in `package.json`:

```json
"homepage": "https://gobirding.ai",
```

### 4. Redeploy

```bash
npm run build
npm run deploy
```

### 5. Configure GitHub Pages for Custom Domain

1. Go to repository Settings > Pages
2. Under "Custom domain", enter `gobirding.ai`
3. Check "Enforce HTTPS" (after DNS propagates)

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**: This is normal for React Router. GitHub Pages serves a 404 page when refreshing non-root routes.

2. **CSS/JS Not Loading**: Check that the `homepage` field in `package.json` matches your deployment URL.

3. **Deployment Fails**: Make sure you have push permissions to the repository.

### Manual Deployment

If automatic deployment fails, you can deploy manually:

```bash
# Build the project
npm run build

# Navigate to build folder
cd build

# Initialize git and add files
git init
git add .
git commit -m "Deploy website"

# Push to gh-pages branch
git remote add origin https://github.com/christhomas16/go-birding-website.git
git push --force origin main:gh-pages
```

## Updating the Website

To update the website after making changes:

1. Make your changes to the source code
2. Test locally with `npm start`
3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Performance Tips

- The website is already optimized for performance
- Images are served from the `public` folder
- CSS and JS are minified in production
- Consider adding a CDN for better global performance

## Analytics (Optional)

To add Google Analytics:

1. Create a Google Analytics account
2. Add your tracking code to `public/index.html`
3. Redeploy the website

## Support

If you encounter issues with deployment:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify your repository settings
3. Check the Actions tab for deployment status
4. Ensure your `package.json` is correctly configured

---

Your GoBirding AI website should now be live and accessible to users worldwide! 