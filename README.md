# 🐱 Cat Breeds Encyclopedia

A modern, interactive web application showcasing detailed information about various cat breeds from around the world. Built with Next.js 15 and enhanced with smooth animations, parallax scroll effect, and an elegant user interface.


<img width="1353" height="876" alt="Screenshot (63)" src="https://github.com/user-attachments/assets/65501f17-cceb-46a1-b7fe-8f243b886ecd" />


## 🌐 Live Demo

Visit the live site: [Cat Breeds](https://catbreedsencyclopedia.vercel.app/)

## ✨ Features

- **Dynamic Hero Section** - Random cat video background that changes on each visit
- **Interactive Card Grid** - Browse 15 different cat breeds with hover effects and custom rainbow cursor
- **Detailed Breed Pages** - Comprehensive information including:
  - Origin and history
  - Physical characteristics (height, weight, lifespan)
  - Temperament traits
  - High-quality image galleries
- **Smooth Animations** - Powered by Framer Motion for fluid page transitions
- **Parallax Scroll Effect** - A cool scroll interaction where the content appears to "cover" the hero and footer as you scroll
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Loading Animations** - Lottie-based loading indicators for better UX
- **Navigation System** - Easy prev/next navigation between cat breeds

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with Turbopack
- **UI Library:** React 19
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Lottie Animations:** [Lottie React](https://www.npmjs.com/package/lottie-react)
- **Utilities:** 
  - React Intersection Observer
  - React Responsive (for media queries)
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Google Fonts (Kaushan Script, Roboto)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cat-breeds.git
cd cat-breeds
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
cat-breeds/
├── app/
│   ├── page.js                    # Home page
│   ├── cat/[slug]/page.js         # Dynamic breed detail pages
│   ├── layout.js                  # Root layout
│   └── globals.css                # Global styles
├── clients/
│   ├── HomeClient.jsx             # Home page client component
│   └── DetailClient.jsx           # Detail page client component
├── sections/
│   ├── Header.jsx                 # Site header
│   ├── Hero.jsx                   # Hero video section
│   ├── ContentList.jsx            # Breed cards grid
│   ├── HeroDetail.jsx             # Breed detail hero
│   ├── ContentDetail.jsx          # Breed detail content
│   └── Footer.jsx                 # Site footer
├── components/
│   ├── ContentCard.jsx            # Individual breed card
│   ├── Navbar.jsx                 # Navigation menu
│   ├── MenuToggle.jsx             # Mobile menu button
│   ├── DonutCursor.jsx            # Custom rainbow cursor
│   ├── LoadingDotLottie.jsx       # Loading animation
│   ├── PrevNextPage.jsx           # Breed navigation
│   ├── Button.jsx                 # Reusable button
│   └── SocialMedia.jsx            # Social media links
├── data/
│   ├── cats.js                    # Cat breeds database
│   ├── videos.js                  # Hero video sources
│   └── menu.js                    # Navigation menu data
├── lib/
│   ├── helpers.js                 # Utility functions (slugify)
│   └── motion.js                  # Framer Motion variants
└── public/
    ├── images/                    # Cat breed images
    └── videos/                    # Hero background videos
```

## 🐈 Featured Cat Breeds

The encyclopedia includes detailed information about 15 cat breeds:

1. Abyssinian
2. American Polydactyl
3. Australian Mist
4. Bengal
5. British Shorthair
6. Burmese
7. Cornish Rex
8. Egyptian Mau
9. Maine Coon
10. Munchkin
11. Oriental Shorthair
12. Persian
13. Savannah
14. Sphynx
15. Turkish Angora

## 🎨 Key Features Breakdown

### Interactive Elements
- **Custom Cursor:** Rainbow donut-style cursor appears when hovering over breed cards (desktop only)
- **Card Animations:** Smooth blur and scale effects on hover
- **Scroll Effects:** Header hides on scroll for immersive experience
- **Intersection Observer:** Optimized video playback based on viewport visibility

### Parallax Scroll Effect
- **Fixed Hero Background:** Hero image stays fixed while content scrolls over it
- **Dynamic Z-Index Layering:** Intelligent z-index management that swaps layers based on scroll position
- **Smooth Content Overlay:** Main content smoothly slides over the hero section, creating a modern layered scrolling experience
- **Footer Integration:** Footer seamlessly appears as you reach the bottom, maintaining the layered effect

### Responsive Design
- Mobile-first approach with breakpoints at 640px, 768px, 992px, 1024px, and 1280px
- Touch-optimized interactions for mobile devices
- Adaptive layouts that stack on smaller screens

### Performance
- Static generation for breed pages using `generateStaticParams`
- Optimized images with Next.js Image component
- Lazy loading and code splitting
- Turbopack for faster development builds

## 🎭 Animation Variants

The project uses custom Framer Motion variants for:
- Slide-in animations for navigation menu
- Card title reveal effects
- Page transitions
- Loading states

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Kevin Mahendra

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- Cat images and information compiled from various cat breed resources
- Icons provided by React Icons library
- Animations inspired by modern web design trends

---

⭐ Star this repository if you found it helpful!


