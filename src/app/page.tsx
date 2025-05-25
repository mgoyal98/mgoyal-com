import Navbar from '@/components/Navbar';
import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import ScrollObserver from '@/components/ScrollObserver';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Toaster } from 'sonner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className='flex flex-col min-h-screen gap-20'>
        <Navbar />
        <main className='flex-grow'>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          >
            <ContactSection />
          </ReCaptchaProvider>
          <ScrollObserver />
        </main>
        <Footer />
      </div>
      <Toaster position='top-right' richColors duration={3000} />
    </>
  );
}
