# Shriya Dwivedi - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer Engineering student specializing in AI & Machine Learning.

## ✨ Features

### 🎨 Design & UI/UX
- **Dark Theme**: Consistent dark color palette with purple and blue accents
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Professional animations with CSS transitions and keyframes
- **Modern UI**: Clean, minimal design with glassmorphism effects

### 📱 Mobile Responsiveness
- **Responsive Left Side Panel**: Smooth slide-out navigation on mobile devices
- **Hamburger Menu**: Animated mobile menu with backdrop blur
- **Touch-Friendly**: Optimized for touch interactions
- **Mobile-First**: Designed with mobile users in mind

### 🎭 Animations
- **Name Landing Animation**: Smooth fade-in and slide-up effects for the hero section
- **Typing Effect**: Professional typing animation for the name display
- **Page Transitions**: Smooth transitions between sections
- **Hover Effects**: Interactive hover animations throughout

### 📄 Content Sections
- **Hero Section**: Animated introduction with profile photo
- **About Me**: Educational background and personal information
- **Skills**: Technical skills with proficiency levels
- **Projects**: Showcase of ML, AI, and web development projects
- **Contact**: Integrated contact form with backend functionality

### 🔧 Backend Integration
- **Contact Form**: Fully functional contact form with API integration
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Professional loading indicators
- **API Utilities**: Modular API functions for easy backend integration

### 📊 Enhanced Readability
- **Increased Text Sizes**: 10-15% larger text for better readability
- **Improved Typography**: Better line heights and spacing
- **Mobile Optimization**: Optimized text sizes for mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shrifinal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Responsive navigation with mobile menu
│   ├── Hero.tsx        # Hero section with animations
│   ├── Contact.tsx     # Contact form with API integration
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page with scroll-to-top
│   ├── Skills.tsx      # Skills page with enhanced text
│   └── Projects.tsx    # Projects showcase
├── utils/              # Utility functions
│   └── api.ts          # Backend API integration
└── styles/             # Global styles and animations
    └── globals.css     # Custom CSS animations and responsive styles
```

## 🎯 Key Features Implemented

### 1. Responsive Mobile Navigation
- Smooth slide-out sidebar animation (300-500ms)
- Backdrop blur effect
- Touch-friendly navigation items
- Auto-close on route change

### 2. Enhanced Text Readability
- Increased font sizes by 10-15%
- Better line heights and spacing
- Mobile-optimized typography
- Improved contrast ratios

### 3. Professional Name Animation
- Smooth fade-in and slide-up effects
- Typing animation with cursor blink
- Staggered element animations
- Professional timing (800-1200ms duration)

### 4. Scroll-to-Top Functionality
- Automatic scroll to top on page navigation
- Smooth scrolling behavior
- Enhanced user experience

### 5. Backend Integration
- Contact form API integration
- Loading states and error handling
- Form validation
- Success/error feedback

### 6. Profile Photo Integration
- Professional profile photo display
- Fallback emoji for failed loads
- Optimized image loading
- Responsive image sizing

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: API utilities for form handling
- **Deployment**: Vercel-ready configuration

## 📱 Mobile Features

- **Responsive Design**: Adapts to all screen sizes
- **Touch Navigation**: Optimized for touch interactions
- **Mobile Menu**: Slide-out navigation panel
- **Performance**: Optimized for mobile performance
- **Accessibility**: Screen reader friendly

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#a855f7) to Blue (#3b82f6) gradients
- **Background**: Dark (#050510) with subtle gradients
- **Text**: White with opacity variations
- **Accents**: Purple and blue highlights

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts
- **Mobile**: Optimized sizes for small screens

### Animations
- **Duration**: 300-500ms for interactions
- **Easing**: Cubic-bezier for natural motion
- **Performance**: Hardware-accelerated animations

## 🔧 Configuration

### API Integration
The portfolio includes a modular API system in `src/utils/api.ts` that can be easily extended for:
- Contact form submission
- Project data fetching
- Skills data management
- Analytics tracking
- File downloads

### Customization
- Update profile information in `src/utils/api.ts`
- Modify colors in `tailwind.config.js`
- Add new animations in `src/styles/globals.css`
- Extend components in `src/components/`

## 📈 Performance Optimizations

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Optimized profile photo
- **CSS Optimization**: Purged unused styles
- **Bundle Splitting**: Efficient code splitting
- **Mobile Optimization**: Touch-friendly interactions

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_API_URL=your_api_url
VITE_GA_ID=your_google_analytics_id
```

## 📞 Contact

- **Email**: shriyadwivedi29@gmail.com
- **LinkedIn**: [Shriya Dwivedi](https://linkedin.com/in/shriya-dwivedi)
- **GitHub**: [shriyadwivedi29](https://github.com/shriyadwivedi29)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 