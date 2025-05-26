'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/utils';
import { navLinks } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 300;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-8',
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg' : 'py-6'
      )}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-primary'>
          <Link href='#home'>
            <h3>mg</h3>
          </Link>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex gap-6'>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={cn(
                  'relative',
                  'after:content-[" "] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-center after:transition-all after:duration-300 after:ease-in-out',
                  activeSection === link.href.substring(1) && 'after:scale-x-70'
                )}
              >
                <Link
                  href={link.href}
                  target={link.isExternal ? '_blank' : '_self'}
                  rel={link.isExternal ? 'noopener noreferrer' : ''}
                  className={cn(
                    'group flex flex-col flex-nowrap items-center relative font-medium flex-none overflow-hidden h-6'
                  )}
                >
                  <div
                    className={cn(
                      'group-hover:-translate-y-full transition-transform duration-300 ease-in-out',
                      activeSection === link.href.substring(1) &&
                        '-translate-y-full'
                    )}
                  >
                    {link.name}
                  </div>
                  <div
                    className={cn(
                      'group-hover:-translate-y-full transition-transform duration-300 ease-in-out text-primary',
                      activeSection === link.href.substring(1) &&
                        '-translate-y-full'
                    )}
                  >
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
