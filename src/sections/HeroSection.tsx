'use client';

import Image from 'next/image';
import { cn } from '@/utils';
import { CircleArrowDown } from 'lucide-react';
import Button from '@/components/Buttons';
import { heroSectionData } from '@/data';

export default function HeroSection() {
  return (
    <section id='home' className='relative min-h-screen flex items-center px-5'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-8'>
        <div className='opacity-40'>
          {/* <!-- Neon Lime Subtle Blob --> */}
          <div className='absolute w-[500px] h-[500px] left-[30%] top-[20%] rounded-full bg-[radial-gradient(circle,#E3F505_10%,transparent_60%)] pulse blur-3xl mix-blend-screen pointer-events-none opacity-60'></div>

          {/* <!-- Pink Subtle Blob --> */}
          <div className='absolute w-[400px] h-[400px] left-[50%] top-[30%] rounded-full bg-[radial-gradient(circle,#ff00c8_10%,transparent_60%)] pulse-delayed blur-2xl mix-blend-screen pointer-events-none opacity-60'></div>

          {/* <!-- Blue Subtle Blob --> */}
          <div className='absolute w-[450px] h-[450px] left-[20%] top-[30%] rounded-full bg-[radial-gradient(circle,#00cfff_10%,transparent_60%)] pulse-delayed-2 blur-2xl mix-blend-screen pointer-events-none opacity-60'></div>

          {/* <!-- White Glow Blob --> */}
          <div className='absolute w-[600px] h-[600px] left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,white_10%,transparent_60%)] pulse-delayed-3 blur-2xl mix-blend-screen pointer-events-none opacity-60'></div>
        </div>
        {/* photo */}
        <div
          className={cn(
            'relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden',
            'hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300'
          )}
        >
          <Image
            src={heroSectionData.image.src}
            alt={heroSectionData.image.alt}
            fill
            className='object-cover h-full w-full'
          />
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <p className='font-medium text-xl text-primary text-center'>
            {heroSectionData.title}
          </p>
          <h1 className='text-4xl md:text-6xl font-bold text-center'>
            {heroSectionData.name}
          </h1>
          <p className='text-xl md:text-2xl text-foreground/80 text-center'>
            {heroSectionData.designation}
          </p>
        </div>

        {/* <p className='text-center w-full lg:w-1/2'>
          {heroSectionData.description}
        </p> */}

        <div className='flex gap-4 sm:flex-row flex-col'>
          <Button href={heroSectionData.button.primary.href}>
            {heroSectionData.button.primary.label}
          </Button>
          <Button
            variant='secondary'
            href={heroSectionData.button.secondary.href}
          >
            {heroSectionData.button.secondary.label}
          </Button>
        </div>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
          <a
            href='#about'
            className='text-foreground/50 hover:text-primary transition-colors duration-300'
          >
            <CircleArrowDown className='w-8 h-8' />
          </a>
        </div>
      </div>
    </section>
  );
}
