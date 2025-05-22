import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen gap-28'>
      <Navbar />
      <main className='flex-grow'>
        <HeroSection />
      </main>
    </div>
  );
}
