'use client';

import SectionTitle from '@/components/SectionTitle';
import Divider from '@/components/Divider';
import { skillsData } from '@/data/skillsData';
import RenderConditional from '@/components/RenderConditional';
import Image from 'next/image';

export default function SkillsSection() {
  return (
    <section id='skills' className='relative min-h-[50vh] flex px-5 py-40'>
      <div className='container mx-auto flex flex-col gap-14'>
        <SectionTitle title='Skills' />

        <div className='flex flex-col gap-10'>
          {skillsData.map((skillSection, index) => (
            <div key={index} className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <h3 className='text-2xl md:text-3xl'>{skillSection.name}</h3>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-6'>
                  {skillSection.skills.map((skill, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center gap-4 p-4 justify-center rounded-lg bg-zinc-900 hover:bg-primary text-foreground hover:text-background transition-all duration-300'
                    >
                      <Image
                        src={skill.icon || ''}
                        alt={skill.name}
                        width={36}
                        height={36}
                      />
                      <span className='text-lg font-medium'>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <RenderConditional condition={index !== skillsData.length - 1}>
                <Divider />
              </RenderConditional>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
