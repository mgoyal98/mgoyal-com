import Link from 'next/link';
import RenderConditional from './RenderConditional';

export interface ExperienceCardProps {
  company: string;
  position: string;
  timeline: string;
  location: string;
  companyLink: string;
  descriptions: string[];
}

const companyClasses =
  'hover:text-primary text-lg md:text-xl transition-all duration-300';

export default function ExperienceCard({
  company,
  position,
  timeline,
  location,
  companyLink,
  descriptions,
}: ExperienceCardProps) {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-2 justify-between'>
        <div className='flex flex-col gap-3 lg:gap-2 shrink-0'>
          <h3 className='text-2xl md:text-3xl'>{position}</h3>
          <RenderConditional condition={!!companyLink}>
            <Link
              href={companyLink}
              target='_blank'
              rel='noopener noreferrer'
              className={companyClasses}
            >
              {company}
            </Link>
          </RenderConditional>
          <RenderConditional condition={!companyLink}>
            <p className={companyClasses}>{company}</p>
          </RenderConditional>
        </div>
        <div className='flex flex-col gap-3 lg:gap-2 shrink-0 justify-end'>
          <p className='md:text-lg lg:text-right'>{timeline}</p>
          <p className='md:text-lg lg:text-right'>{location}</p>
        </div>
      </div>

      <ul className='list-disc list-inside'>
        {descriptions.map((description, index) => (
          <li key={index} className='md:text-lg'>
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
