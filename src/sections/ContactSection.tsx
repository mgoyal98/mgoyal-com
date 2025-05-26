'use client';

import ContactInfo from '@/components/ContactInfoItem';
import SectionTitle from '@/components/SectionTitle';
import SectionTitleSmall from '@/components/SectionTitleSmall';
import { contactSectionData } from '@/data/contactSectionData';
import { LucideProps } from 'lucide-react';
import { RefAttributes, useState } from 'react';
import { ForwardRefExoticComponent } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Buttons';
import { useReCaptcha } from 'next-recaptcha-v3';
import { toast } from 'sonner';

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

export function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-6 rounded-3xl bg-bg-secondary p-10'>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState<Record<string, string>>(
    contactSectionData.form.fields.reduce(
      (acc, field) => {
        acc[field.name] = '';
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const [isLoading, setIsLoading] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = await executeRecaptcha('contact_form');

      const response = await fetch('/api/contact/send', {
        method: 'POST',
        body: JSON.stringify({ token, ...formData }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(contactSectionData.form.successMessage);
      } else {
        toast.error(contactSectionData.form.errorMessage);
      }
    } catch {
      toast.error(contactSectionData.form.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact'
      className='relative min-h-[50vh] flex px-8 pt-10 sm:pt-20 pb-10'
    >
      {/* Video */}
      <div className='container mx-auto flex flex-col gap-20'>
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
            <ContactCard>
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
            </ContactCard>

            {/* Form */}
            <ContactCard>
              {/* Items */}
              <SectionTitleSmall title={contactSectionData.form.title} />

              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                {contactSectionData.form.fields.map((field, index) => (
                  <Input
                    key={index}
                    {...field}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      })
                    }
                  />
                ))}

                <Button type='submit' variant='primary' disabled={isLoading}>
                  {contactSectionData.form.buttonText}
                </Button>
              </form>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
}
