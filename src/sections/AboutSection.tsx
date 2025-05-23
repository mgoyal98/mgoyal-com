'use client';

import SectionTitle from '@/components/SectionTitle';
import { aboutSectionData } from '@/data';
import Divider from '@/components/Divider';
import Button from '@/components/Buttons';

export default function AboutSection() {
  return (
    <section id='about' className='relative min-h-[50vh] flex px-5 pt-40 pb-20'>
      <div className='container mx-auto flex flex-col gap-14'>
        <SectionTitle title='About Me' />
        <div className='flex flex-col gap-10'>
          <p className='text-lg md:text-xl'>{aboutSectionData.description}</p>

          <Divider />

          <div className='flex flex-col w-full items-center justify-center xl:flex-row gap-10 xl:gap-12'>
            {/* Video */}
            <div className='rounded-3xl relative overflow-hidden h-80 md:h-[400px] xk:h-[422px] w-full xl:w-[586px]'>
              <div className='absolute w-full h-full flex-none'>
                <video
                  src={aboutSectionData.secondSection.video}
                  loop={true}
                  preload='auto'
                  muted={true}
                  autoPlay={true}
                  playsInline={true}
                  style={{
                    cursor: 'auto',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0px',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                  }}
                ></video>
              </div>
            </div>

            {/* Content */}
            <div className='flex-1 w-full h-min flex flex-col gap-6'>
              <h3 className='text-2xl md:text-3xl'>
                {aboutSectionData.secondSection.title}
              </h3>
              <p>{aboutSectionData.description}</p>
              <p>{aboutSectionData.secondSection.closingLine}</p>
              <Button
                className='w-fit'
                href={aboutSectionData.secondSection.button.href}
              >
                {aboutSectionData.secondSection.button.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
