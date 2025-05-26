'use client';

import Divider from '@/components/Divider';
import ExperienceCard from '@/components/ExperienceCard';
import RenderConditional from '@/components/RenderConditional';
import SectionTitle from '@/components/SectionTitle';
import { experienceData } from '@/data/experienceData';

export default function SkillsSection() {
  return (
    <section
      id='experience'
      className='relative min-h-[50vh] flex px-6 pt-22 pb-10'
    >
      <div className='container mx-auto flex flex-col gap-14'>
        <SectionTitle title={experienceData.title} />

        <div className='flex flex-col gap-10'>
          {experienceData.experiences.map((experience, index) => (
            <div key={index} className='flex flex-col gap-10'>
              <ExperienceCard {...experience} />
              <RenderConditional
                condition={index !== experienceData.experiences.length - 1}
              >
                <Divider />
              </RenderConditional>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
