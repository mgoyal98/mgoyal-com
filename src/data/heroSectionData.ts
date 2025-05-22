import madhur from '@/assets/madhur.jpg';

export const heroSectionData = {
  id: 1,
  image: {
    src: madhur,
    alt: 'Madhur Goyal',
  },
  title: 'Hi, My name is',
  name: 'Madhur Goyal',
  designation: 'Full Stack Developer',
  description: `Crafting scalable backend systems and clean, intuitive frontends with
          technologies like Node.js, React, NestJS, and AWS. I specialize in
          building robust APIs, deploying microservices, and designing seamless
          user experiences. With a strong product mindset and a love for solving
          complex problems, I focus on delivering real-world impact through
          code. Currently building tools, apps, and brands that matter.`,
  button: {
    primary: {
      label: 'Get In Touch',
      href: '#contact',
    },
    secondary: {
      label: 'Download Resume',
      href: '/madhur-goyal-full-stack-developer-resume.pdf',
    },
  },
};
