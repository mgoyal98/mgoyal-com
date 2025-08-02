export const projectsData = {
  title: 'Featured Work',
  projects: [
    {
      image: '/projects/pdf-pipeline.png',
      title: 'PDF Pipeline',
      description:
        'Automated pipeline for generating, customizing, and delivering PDFs from structured data using Node.js and TypeScript.',
      tags: ['Node.js', 'SQS', 'Puppeteer', 'Mustache', 'S3', 'Typescript'],
      codeLink: 'https://github.com/mgoyal98/pdf-pipeline',
      comingSoon: false,
    },
    {
      image: '/projects/devease.png',
      title: 'DevEase',
      description:
        'DevEase is a modern web application built with Next.js that offers a suite of essential development tools to streamline your workflow.',
      tags: ['Next.js', 'Tailwind', 'TypeScript'],
      codeLink: 'https://github.com/mgoyal98/dev-ease',
      liveLink: 'https://devease.app/',
      comingSoon: false,
    },
    {
      image: 'https://opengraph.githubassets.com/ee808fad35b545c18f0757d0d2e6fb7d20a8b381826004ba03bb0b594c523f09/mgoyal98/nestjs-blueprint',
      title: 'NestJS Blueprint',
      description:
        'Scalable starter template for NestJS applications, featuring built-in integrations for AWS, databases, observability, event-driven architecture, and many more features. It provides a solid foundation to quickly build robust APIs and real-time systems with best practices.',
      tags: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker'],
      codeLink: 'https://github.com/mgoyal98/nestjs-blueprint',
      comingSoon: false,
    },
    {
      image: '/projects/react-scroll-progress-bar.png',
      title: 'React Scroll Progress Bar',
      description:
        'A lightweight, customizable React scroll progress bar NPM package for tracking page or container scroll progress. Easy to use, smooth, and highly customizable!',
      tags: ['React', 'TypeScript', 'Tailwind', 'NPM'],
      comingSoon: true,
    },
  ],
  viewAllProjects: {
    title: 'View All Projects',
    link: 'https://github.com/mgoyal98?tab=repositories',
  },
};
