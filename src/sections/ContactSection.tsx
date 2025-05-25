'use client';

import ContactInfo from '@/components/ContactInfoItem';
import SectionTitle from '@/components/SectionTitle';
import SectionTitleSmall from '@/components/SectionTitleSmall';
import { contactSectionData } from '@/data/contactSectionData';
import { LucideProps } from 'lucide-react';
import { RefAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import Link from 'next/link';

export function SocialLink({
  link,
  Icon,
}: {
  link: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Link
      href={link}
      className='rounded-full p-4 border border-foreground/10 text-foreground hover:bg-primary hover:border-primary hover:text-background transition-all duration-300 flex items-center justify-center'
    >
      <Icon className='w-5 h-5' />
    </Link>
  );
}

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='relative min-h-[50vh] flex px-5 pt-40 pb-20'
    >
      {/* Video */}
      <div className='container mx-auto flex flex-col gap-30'>
        <div className='rounded-3xl relative overflow-hidden h-60 md:h-[350px] w-full'>
          <div className='absolute w-full h-full flex-none'>
            <video
              src={contactSectionData.video}
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
        <div className='flex flex-col gap-14'>
          <SectionTitle title={contactSectionData.title} />

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Details */}
            <div className='flex flex-col gap-6 rounded-3xl bg-bg-secondary p-10'>
              {/* Items */}
              <SectionTitleSmall title={contactSectionData.detailsTitle} />
              {contactSectionData.contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}

              {/* Social Links */}
              <div className='flex flex-col mt-6 gap-6'>
                <SectionTitleSmall title={contactSectionData.socialTitle} />
                <div className='flex gap-4'>
                  {contactSectionData.socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                  ))}
                </div>
              </div>
              
            </div>

            {/* Form */}
          </div>
        </div>
      </div>
    </section>
  );
}
