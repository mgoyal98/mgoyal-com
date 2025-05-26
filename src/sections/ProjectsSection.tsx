'use client';

import Button from '@/components/Buttons';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projectsData } from '@/data/projectsData';
import { Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='relative min-h-[50vh] flex px-6 pt-10 sm:pt-20 pb-10'
    >
      <div className='container mx-auto flex flex-col gap-18'>
        <SectionTitle title={projectsData.title} />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {projectsData.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <Button
          variant='primary'
          className='w-fit mx-auto'
          href={projectsData.viewAllProjects.link}
          isExternal
        >
          <Github className='w-5 h-5' />
          {projectsData.viewAllProjects.title}
        </Button>
      </div>
    </section>
  );
}
