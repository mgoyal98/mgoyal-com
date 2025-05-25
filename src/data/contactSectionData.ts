import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

export const contactSectionData = {
  title: 'Contact Me',
  video: 'https://cdn.pixabay.com/video/2023/09/11/180078-863401749_large.mp4',
  detailsTitle: 'Get In Touch With Me',
  contactInfo: [
    {
      Icon: Mail,
      title: 'Email',
      value: 'hi@mgoyal.com',
      link: 'mailto:hi@mgoyal.com',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
    },
  ],
  socialTitle: 'Connect With Me',
  socialLinks: [
    {
      Icon: Linkedin,
      link: 'https://www.linkedin.com/in/madhur-goyal',
    },
    {
      Icon: Github,
      link: 'https://github.com/mgoyal98',
    },
    {
      Icon: Twitter,
      link: 'https://x.com/mgoyal98',
    },
  ],
};
