import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { RefAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import RenderConditional from './RenderConditional';

export interface ContactInfoProps {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: string;
  link?: string;
}

export default function ContactInfo({
  Icon,
  title,
  value,
  link,
}: ContactInfoProps) {
  return (
    <div className='flex gap-4 w-full items-center'>
      {/* Icon */}
      <div className='w-11 h-11 bg-primary rounded-xl flex items-center justify-center'>
        <Icon className='w-5 h-5 text-background' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1'>
        <p className='text-sm text-foreground/80'>{title}</p>
        <RenderConditional condition={!!link}>
          <Link href={link as string} className='text text-foreground'>
            {value}
          </Link>
        </RenderConditional>
        <RenderConditional condition={!link}>
          <p className='text text-foreground'>{value}</p>
        </RenderConditional>
      </div>
    </div>
  );
}
