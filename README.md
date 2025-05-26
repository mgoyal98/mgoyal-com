# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14 and TailwindCSS. This project showcases a clean, professional design with smooth animations and a great user experience.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 SEO optimized with metadata and sitemap
- 📝 Sections for:
  - Hero/Introduction
  - About
  - Experience
  - Projects
  - Skills
  - Contact
- 🔄 Smooth animations and transitions
- 📊 Performance optimized

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev//)
- **Deployment:** [Vercel](https://vercel.com)

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── sections/          # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   └── ...
├── data/             # Static data and content
└── utils/            # Utility functions
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mgoyal98/mgoyal.com.git portfolio-template
cd portfolio-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Content**: Update the content in the respective section components under `src/sections/`
2. **Styling**: Modify the TailwindCSS classes in the components
3. **Theme**: Customize colors and theme in `tailwind.config.js`
4. **Images**: Replace images in the `public` directory with your own

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com) for the deployment platform
