import { Project } from '@/utils/projects-data';
import Image from 'next/image';
import React from 'react';
import '@/styles/ProjectCard.scss';
import ButtonCTA from './ButtonCTA';
import { techs } from '@/utils/techs-data';
import { useViewport } from '@/hooks/useViewport';

interface Props {
  data: Project;
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  const [width, height] = useViewport();
  const { image, title, description, tags, techStack, github, demo } = data;

  return (
    <div className="project-card">
      <div className="project-image">
        <Image className="project-thumbnail" src={image} alt="Project Picture" width={600} height={350} />
        {width > 576 && (
          <div className="field-tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {width <= 576 && (
        <div className="field-tags outside">
          {tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="tech-stack">
        <span className="tech-header">Tech stack:</span>
        <div className="techs">
          {techStack.map((techy, i) => (
            <Image src={techs.filter((tech) => tech.name === techy)[0].icon} alt={techy} key={i} className="tech" width={30} height={30} />
          ))}
        </div>
      </div>
      <div className="call-to-actions">
        <ButtonCTA href={github} bIcon="bi bi-github" style={{ width: width <= 576 ? '100%' : 'fit-content' }}>
          Go to Repo
        </ButtonCTA>
        <ButtonCTA href={demo} style={{ width: width <= 576 ? '100%' : 'fit-content' }}>
          Demo website &gt;
        </ButtonCTA>
      </div>
    </div>
  );
};

export default ProjectCard;
