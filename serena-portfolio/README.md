# Serena Frolli - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a multi-page structure with separate pages for each section and multiple font options.

## 🚀 Features

### Multi-Page Structure
- **Home** (`/`) - Hero section with quick links to other pages
- **About** (`/about`) - Personal information and education
- **Experience** (`/experience`) - Professional experience and internships
- **Projects** (`/projects`) - Technical projects and work samples
- **Skills** (`/skills`) - Technical skills organized by category
- **Athletics** (`/athletics`) - Athletic achievements and background
- **Contact** (`/contact`) - Contact information and social links

### Font Options
The website includes 10 different font options that can be switched using the font selector in the navigation:

1. **Inter** - Modern Professional (Default)
2. **Poppins** - Clean & Minimal
3. **Source Sans Pro** - Technical & Readable
4. **Outfit** - Modern Geometric
5. **Nunito Sans** - Professional & Friendly
6. **DM Sans** - Clean & Modern
7. **Inter + JetBrains Mono** - Technical & Professional (with monospace for code)
8. **Playfair Display + Inter** - Elegant & Modern (serif headings)
9. **IBM Plex Sans** - Technical & Clean
10. **Albert Sans** - Modern & Versatile

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Main navigation with font selector
│   ├── FontSelector.jsx    # Font switching component
│   └── UI.jsx             # Reusable UI components
├── pages/
│   ├── Home.jsx           # Home page with hero section
│   ├── About.jsx          # About page
│   ├── Experience.jsx     # Experience page
│   ├── Projects.jsx       # Projects page
│   ├── Skills.jsx         # Skills page
│   ├── Athletics.jsx      # Athletics page
│   └── Contact.jsx        # Contact page
├── styles/
│   └── fonts.css          # Font option definitions
├── App.jsx                # Main app with routing
├── main.jsx              # App entry point
└── index.css             # Global styles and font imports
```

## 🎨 Customization

### Adding New Fonts
1. Add the font definition to `src/styles/fonts.css`
2. Add the font option to the `fontOptions` array in `src/components/FontSelector.jsx`
3. Include the Google Fonts link if needed

### Modifying Pages
Each page is a separate component in the `src/pages/` directory. You can:
- Edit content directly in the component files
- Modify styling using Tailwind CSS classes
- Add new sections or components as needed

### Navigation
The navigation is handled by React Router in `src/App.jsx`. To add new pages:
1. Create a new page component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Add the navigation link to `src/components/Navigation.jsx`

## 🎯 Key Technologies

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
