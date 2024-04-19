import React from 'react';
import '@/styles/Projects.scss';
import Image from 'next/image';
import { projects } from '@/utils/projects-data';
import ProjectCard from '@/components/ProjectCard';
import ButtonCTA from '@/components/ButtonCTA';

const Projects = () => {
  return (
    <main id="projects">
      <Image id="wave" src="/wave.svg" alt="wave" width={1920} height={100} />
      <div className="projects-container">
        <div className="projects-heading">
          <div className="heading-content">
            <p className="subtitle">
              <Image className="cakram-red" src="/cakram-red.svg" alt="caramR" width={20} height={20} />
              My current works
            </p>
            <h2 className="title">
              This is a few of my <span className="bold">projects</span> that will catch <span className="bold">your interest!</span>
            </h2>
            <p className="desc">These are products I made that can be your consideration about what I actually can do for you</p>
            <div className="cta">
              <span className="line" />
              <ButtonCTA navigate={true} href="/projects" bIcon="bi bi-arrow-right" bIconPos="right" style={{ width: 'fit-content' }}>
                See all projects
              </ButtonCTA>
            </div>
          </div>
        </div>
        <div className="projects-section">
          {projects.map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
