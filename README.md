# Shriya Parmanand Dwivedi - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases Shriya's skills as a Computer Engineering Student with expertise in AI & Machine Learning.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth animations and transitions
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
├── src/
│   └── main.tsx              # Application entry point
├── components/               # Reusable UI components
│   ├── ui/                   # Base UI components
│   ├── figma/                # Figma-specific components
│   ├── Navigation.tsx        # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects section
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer component
│   └── CursorGlow.tsx       # Custom cursor effect
├── pages/                   # Page components
│   ├── Home.tsx             # Home page
│   ├── About.tsx            # About page
│   ├── Projects.tsx         # Projects page
│   └── Skills.tsx           # Skills page
├── imports/                 # Imported assets
│   ├── Group3438.tsx        # SVG components
│   └── svg-3ao4ur4t23.ts    # SVG utilities
├── styles/                  # Global styles
│   └── globals.css          # Global CSS with Tailwind
├── guidelines/              # Project guidelines
└── App.tsx                  # Main App component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shriya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the Vite configuration

3. **Deploy**
   - Vercel will automatically build and deploy your project
   - Your site will be available at `https://your-project.vercel.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   Upload the contents of the `dist` folder to your hosting provider

## 🎨 Customization

### Colors and Theme

The project uses CSS custom properties for theming. You can modify colors in `styles/globals.css`:

```css
:root {
  --background: #050510;
  --foreground: #ffffff;
  --primary: #8b5cf6;
  /* ... other variables */
}
```

### Content Updates

- **Personal Information**: Update content in component files
- **Projects**: Modify `components/Projects.tsx`
- **Skills**: Update `components/Skills.tsx`
- **Contact**: Edit `components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

**Built with ❤️ by Shriya Parmanand Dwivedi** 