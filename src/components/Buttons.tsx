import { cn } from '@/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RenderConditional from './RenderConditional';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className,
}: ButtonProps) {
  return (
    <Link
      className={cn(
        'py-4 px-8 rounded-full text-lg font-medium cursor-pointer transition-all duration-300 relative group border overflow-hidden',
        className,
        variant === 'primary' &&
          'bg-primary text-background border-primary hover:text-primary',
        variant === 'secondary' &&
          'bg-transparent border-foreground/70 hover:border-primary hover:text-primary'
      )}
      href={href}
    >
      <RenderConditional condition={variant === 'primary'}>
        <div
          className={cn(
            'absolute -top-0 left-0 inset-0 bg-background w-[calc(100%+2px)] h-[calc(100%+2px)] scale-x-0 origin-left transition-all duration-300 ease-in-out group-hover:scale-x-100'
          )}
        ></div>
      </RenderConditional>

      <div className='relative z-10 flex items-center justify-center gap-2'>
        {children}
        <RenderConditional condition={variant === 'primary'}>
          <ArrowRight className='w-5 h-5 bg-primary text-background -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out  rounded-full' />
        </RenderConditional>
      </div>
    </Link>
  );
}
