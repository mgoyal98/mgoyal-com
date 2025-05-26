import { cn } from '@/utils';

export default function NavToggleButton({
  isMenuOpen,
  toggleMenuOpen,
}: {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}) {
  return (
    <div className='md:hidden'>
      <button
        type='button'
        className='group/menu-button flex flex-col items-center justify-center p-4 cursor-pointer gap-2'
        onClick={toggleMenuOpen}
      >
        <div
          className={cn(
            'w-6 h-0.5 bg-foreground/70 rounded-full',
            'transition-all duration-300 ease-in-out',
            'group-hover/menu-button:bg-foreground',
            isMenuOpen && 'rotate-45 translate-y-1 bg-foreground'
          )}
        ></div>
        <div
          className={cn(
            'w-6 h-0.5 bg-foreground/70 rounded-full',
            'transition-all duration-300 ease-in-out',
            'group-hover/menu-button:bg-foreground',
            isMenuOpen && '-rotate-45 -translate-y-1.5 bg-foreground'
          )}
        ></div>
      </button>
    </div>
  );
}
