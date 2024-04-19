'use client';
import { Project } from '@/utils/projects-data';
import Image from 'next/image';
import React from 'react';
import '@/styles/ProjectCard.scss';
import ButtonCTA from './ButtonCTA';
import { techs } from '@/utils/techs-data';
import { useViewport } from '@/hooks/useViewport';
import Div from './animations/Div';
import { Variants } from 'framer-motion';
import Link from 'next/link';

interface Props {
  data: Project;
}

const anim: Variants = {
  hidden: { opacity: 0, x: '10%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.5 } },
};

const ProjectCard = ({ data }: Props) => {
  const [width, height] = useViewport();
  const { id, image, title, description, tags, techStack, github, demo } = data;

  return (
    <Div variants={anim} once={false} className="project-card">
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
      <Link href={`/projects/${id}`} className="project-title">
        {title}
      </Link>
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
    </Div>
  );
};

export default ProjectCard;
