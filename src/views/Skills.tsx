import '@/styles/Skills.scss';
import React, { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import SkillCard from '@/components/SkillCard';
import ProgCard from '@/components/ProgCard';
import { Techs } from '@/utils/techs-data';
import TechStackCard from '@/components/TechStackCard';

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const parent2: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const children: Variants = {
  hidden: { opacity: 0, x: '10%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.3, staggerChildren: 0.03 } },
};

const children2: Variants = {
  hidden: { opacity: 0, y: '50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.2 } },
};

const margin = '-300px 0px -200px 0px';

const Skills: React.FC = () => {
  const techs: Techs[] = ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript', 'Typescript', 'Node JS', 'Express JS', 'React JS', 'Next JS', 'MongoDB', 'Firebase', 'C', 'CPP', 'GIT', 'GitHub', 'VS Code', 'Figma'];
  const favTechs: Techs[] = ['Typescript', 'React JS', 'Next JS', 'MongoDB', 'Firebase'];
  const targetTechs: Techs[] = ['Golang', 'Supabase', 'Docker', 'Flutter', 'Dart'];

  return (
    <main id="skills">
      <div className="header">
        <h2 className="section-title">
          What <span className="highlighted">skills</span> I am good at
        </h2>
        <p className="section-desc">These are some skills that I oftenly practice and implement when I working on a poject</p>
      </div>
      <div className="skills-container">
        <SkillCard icon="/Code.svg" skillName="Clean Code">
          I make the code to be readable and easy to maintain
        </SkillCard>
        <SkillCard icon="/Device.svg" skillName="Responsive Layout">
          Compatibility to any device&apos;s screen size
        </SkillCard>
        <SkillCard icon="/Layout.svg" skillName="Minimalist Design">
          Simple and easy to understand UI to comfort the user&apos;s experience
        </SkillCard>
        <SkillCard icon="/Tech.svg" skillName="Latest Technology">
          Following the tech trends based on the project&apos;s needs
        </SkillCard>
      </div>
      <div className="fav-stack-section">
        <TechStackCard title="My current Tech Stack" techStack={favTechs} bar="green">
          These are my current favorite techs that I use to develop an app
        </TechStackCard>
        <TechStackCard title="Target Techs to learn" techStack={targetTechs} bar="red">
          These are my techs wishlist that I want to learn to expand my expertise
        </TechStackCard>
      </div>
      <div className="progs-container">
        {techs.map((tech, index) => (
          <ProgCard key={index} techName={tech} />
        ))}
      </div>
    </main>
  );
};

export default Skills;
