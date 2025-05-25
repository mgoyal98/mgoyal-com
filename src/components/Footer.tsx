import Divider from './Divider';

export default function Footer() {
  return (
    <footer className='pb-10'>
      <div className='container mx-auto flex flex-col gap-10'>
        <Divider />
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-lg text-foreground/70'>
            &copy; {new Date().getFullYear()}{' '}
            <span className='font-medium text-foreground'>Madhur Goyal</span>.
            All rights reserved.
          </p>
          <p className='text-lg text-foreground/70'>
            Built with{' '}
            <span className='font-medium text-foreground'>Next.js</span> and{' '}
            <span className='font-medium text-foreground'>Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
