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
  button: {
    primary: {
      label: 'Get to Know Me',
      href: '#about',
    },
    secondary: {
      label: 'Download Resume',
      href: '/madhur-goyal-full-stack-developer-resume.pdf',
    },
  },
};
