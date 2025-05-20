'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg' : 'py-6'
      )}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-primary'>
          <h3>mg</h3>
        </div>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
