# 🚀 Professional Portfolio

A modern, responsive professional portfolio website built with React, showcasing technical expertise, projects, experience, and certifications.

## ✨ Features

- **Responsive Design** - Fully responsive and optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Performance Optimized** - Fast loading times with optimized code splitting
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 📂 Project Structure

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main portfolio component
│   ├── App.css         # Component styling
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
├── .gitignore
├── vercel.json
└── README.md
```

## 🛠️ Technology Stack

- **Frontend**: React 19.2.4
- **Icons**: lucide-react
- **Styling**: CSS-in-JS (Inline styles with responsive design)
- **Build Tool**: react-scripts 5.0.1
- **Testing**: Jest & React Testing Library
- **Deployment**: Vercel

## 📋 Portfolio Sections

1. **Hero Section** - Professional introduction with tagline and CTA buttons
2. **Professional Summary** - 5 detailed paragraphs about expertise and background
3. **Technical Skills** - 6 categories with 30+ technologies and tools
4. **Projects** - Showcase of 5+ completed projects with descriptions
5. **Experience** - Career timeline with achievements and metrics
6. **Education** - B.Tech AI/ML with CGPA and details
7. **Certifications** - 8+ professional certifications with badge levels
8. **Contact** - Email, LinkedIn, GitHub, and location information

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mdivyalalitha29/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at http://localhost:3000

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (one-way operation)
npm run eject
```

## 📦 Production Build

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 🌐 Deployment Options

### Vercel (Recommended - Already Configured)

The portfolio includes `vercel.json` for automatic CI/CD:

1. Push code to GitHub
2. Connect repository to Vercel (https://vercel.com)
3. Automatic deployments on every push
4. Get a public URL instantly

### Netlify

```bash
npm run build
# Drag-and-drop build folder to Netlify
```

### GitHub Pages

Update `package.json` then deploy:
```json
"homepage": "https://github.com/M-Divya29/my-portfolio"
```

## 🎨 Customization

## 🔗 Live (Dev) - Temporary Tunnel

- Public dev URL (ngrok): https://unbalkingly-postlicentiate-willette.ngrok-free.dev
- This is an ephemeral tunnel to your local `npm start` server. It will stop when you stop ngrok or your local dev server.

## 🔐 Vercel (Token-based deploy)

If you prefer to deploy from CI or a non-interactive environment, create a Vercel token in the Vercel dashboard and run:

```bash
# one-time: install/vercel login (or create token in dashboard)
npx vercel --prod --token YOUR_VERCEL_TOKEN
```

Add the token to GitHub Actions or your CI provider as `VERCEL_TOKEN` for automated deploys.


Edit `src/App.js` to update:
- **Professional Summary** - Modify `professionalSummary` array
- **Technical Skills** - Update `technicalSkills` object
- **Projects** - Edit `projects` array
- **Experience** - Update `experience` array
- **Education** - Change education details
- **Certifications** - Edit `certifications` array
- **Contact Info** - Update social links

## 📊 Performance & Quality

- ✅ Responsive Design (Mobile-First)
- ✅ SEO Optimized
- ✅ Cross-browser Compatible
- ✅ Accessibility Compliant
- ✅ Fast Load Times (~2-3 seconds)

## 📝 License

MIT License - See LICENSE file for details

## 👤 Author

**M Divya Lalitha**
- GitHub: M-Divya29
- Email: mdivyalalitha29@gmail.com

## 🤝 Support

For issues or suggestions, please open a GitHub issue.

---

Made by M Divya Lalitha
