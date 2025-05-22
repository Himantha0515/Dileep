# Photographer Portfolio Website

A modern, responsive portfolio website for photographers built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌓 Dark mode support
- 🖼️ Portfolio gallery with filtering
- 📝 Contact form with validation
- ⚡ Fast performance with Next.js
- 🔍 SEO optimized
- 🎯 Accessible

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://github.com/colinhacks/zod) - Schema validation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/photographer-portfolio.git
   cd photographer-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
photographer-portfolio/
├── public/              # Static files
│   ├── about/          # About page images
│   ├── portfolio/      # Portfolio images
│   └── services/       # Services page images
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── about/     # About page
│   │   ├── contact/   # Contact page
│   │   ├── portfolio/ # Portfolio page
│   │   └── services/  # Services page
│   ├── components/    # React components
│   └── styles/        # Global styles
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

1. Update the content in the following files:
   - `src/app/about/page.tsx` - About page content
   - `src/app/services/page.tsx` - Services and pricing
   - `src/app/portfolio/page.tsx` - Portfolio items
   - `src/app/contact/page.tsx` - Contact information

2. Replace the images in the `public` directory with your own:
   - `public/about/photographer.jpg` - Your portrait
   - `public/portfolio/*` - Portfolio images
   - `public/services/*` - Service images
   - `public/hero-image.jpg` - Hero section background

3. Update the theme colors in `tailwind.config.js` to match your brand.

## Deployment

The site can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
