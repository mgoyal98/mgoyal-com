import { cn } from '@/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RenderConditional from './RenderConditional';

interface ButtonProps {
  type?: 'link' | 'submit' | 'button';
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  type = 'link',
  children,
  variant = 'primary',
  href,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const baseClasses = cn(
    'py-4 px-8 rounded-full text-lg font-medium cursor-pointer transition-all duration-300 relative group border overflow-hidden',
    className,
    variant === 'primary' &&
      'bg-primary text-background border-primary hover:text-primary',
    variant === 'secondary' &&
      'bg-transparent border-foreground/70 hover:border-primary hover:text-primary',
    'disabled:bg-primary/20 disabled:cursor-not-allowed disabled:text-background disabled:border-primary/20'
  );

  const getBackdrop = () => (
    <RenderConditional condition={variant === 'primary' && !disabled}>
      <div
        className={cn(
          'absolute -top-0 left-0 inset-0 bg-background w-[calc(100%+2px)] h-[calc(100%+2px)] scale-x-0 origin-left transition-all duration-300 ease-in-out group-hover:scale-x-100'
        )}
      ></div>
    </RenderConditional>
  );

  const getChildren = () => (
    <div className='relative z-10 flex items-center justify-center gap-2'>
      {children}
      <RenderConditional condition={variant === 'primary'}>
        <ArrowRight
          className={cn(
            'w-5 h-5 bg-primary text-background -rotate-45 transition-transform duration-300 ease-in-out rounded-full',
            disabled && 'bg-primary/20',
            !disabled && 'group-hover:rotate-0'
          )}
        />
      </RenderConditional>
    </div>
  );

  return (
    <>
      <RenderConditional condition={type === 'link'}>
        <Link className={baseClasses} href={href || '#'}>
          {getBackdrop()}
          {getChildren()}
        </Link>
      </RenderConditional>

      <RenderConditional condition={type !== 'link'}>
        <button
          className={baseClasses}
          type={type as 'submit' | 'button'}
          onClick={onClick}
          disabled={disabled}
        >
          {getBackdrop()}
          {getChildren()}
        </button>
      </RenderConditional>
    </>
  );
}
