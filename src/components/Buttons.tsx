import { cn } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'py-4 px-8 rounded-full text-lg font-medium cursor-pointer transition-all duration-300 relative group border overflow-hidden',
        variant === 'primary' &&
          'bg-primary text-background border-primary hover:text-primary',
        variant === 'secondary' &&
          'bg-transparent border-foreground/70 hover:border-primary hover:text-primary'
      )}
    >
      {variant === 'primary' && (
        <div
          className={cn(
            'absolute -top-0 left-0 inset-0 bg-background w-[calc(100%+2px)] h-[calc(100%+2px)] scale-x-0 origin-left transition-all duration-300 ease-in-out group-hover:scale-x-100'
          )}
        ></div>
      )}
      <p className='relative z-10'>{children}</p>
    </button>
  );
}
