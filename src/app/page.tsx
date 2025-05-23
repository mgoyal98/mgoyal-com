import Navbar from '@/components/Navbar';
import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import ScrollObserver from '@/components/ScrollObserver';
import SkillsSection from '@/sections/SkillsSection';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen gap-28'>
      <Navbar />
      <main className='flex-grow'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ScrollObserver />
      </main>
    </div>
  );
}
