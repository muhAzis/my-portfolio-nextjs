import '@/styles/Skills.scss';
import React, { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import Icons from '@/components/Icons';

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
  const [isHovered, setIsHovered] = useState<[string, number]>(['none', 0]);

  const progIcons = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Node', 'React', 'Next', 'C', 'CPP', 'Python', 'Bootstrap', 'MongoDB', 'GIT', 'VS Code'];
  const progScores = [90, 90, 85, 80, 85, 80, 78, 75, 78, 70, 80, 85, 87, 95];

  return (
    <main id="skills">
      <Reveal always={true} variants={parent} className="row1">
        <div className="section-desc">
          <motion.h2 variants={parent2} className="title">
            What <span className="gradient-text">skills</span>
            <br />I am good at
          </motion.h2>
          <motion.p variants={parent2} className="desc">
            These are some skills that I oftenly practice and implement when I working on a project
          </motion.p>
        </div>
        <div className="skill-cards">
          <div className="col1">
            <Reveal always={true} variants={children} margin={margin} className="card">
              <div className="skill-icon">
                <Icons name="code" colors={['#c8d746', '#f7e298']} />
              </div>
              <div className="skill-name">Clean Code</div>
              <p className="skill-desc">I make the code to be readable and easy to maintain</p>
            </Reveal>
            <Reveal always={true} variants={children} margin={margin} className="card">
              <div className="skill-icon">
                <Icons name="layout" colors={['#c8d746', '#f7e298']} />
              </div>
              <div className="skill-name">Minimalist Design</div>
              <p className="skill-desc">Simple and easy to understand UI to comfort the user&apos;s experience</p>
            </Reveal>
          </div>
          <div className="col2">
            <Reveal always={true} variants={children} margin={margin} className="card">
              <div className="skill-icon">
                <Icons name="device" colors={['#c8d746', '#f7e298']} />
              </div>
              <div className="skill-name">Responsive Layout</div>
              <p className="skill-desc">Compatibility to any device&apos;s screen size</p>
            </Reveal>
            <Reveal always={true} variants={children} margin={margin} className="card">
              <div className="skill-icon">
                <Icons name="tech" colors={['#c8d746', '#f7e298']} />
              </div>
              <div className="skill-name">Latest Technology</div>
              <p className="skill-desc">Following the tech trends based on the project&apos;s needs</p>
            </Reveal>
          </div>
        </div>
      </Reveal>
      <Reveal always={true} variants={parent} className="row2">
        <div className="section-desc">
          <motion.h3 variants={parent2} className="tech-title">
            <span className="gradient-text">Technology</span>
            <br />I currently can use
          </motion.h3>
          <motion.p variants={parent2} className="tech-desc">
            These are the techs that I usually use to develop a project, yet there will be moe added to the list in the future
          </motion.p>
        </div>
        <div className="prog-stacks">
          <Reveal always={true} variants={children} className="icons" onHoverEnd={() => setIsHovered(['none', 0])}>
            {progIcons.map((icon, index) => (
              <motion.div variants={children2} key={index} className="icon" onHoverStart={() => setIsHovered([icon, index])}>
                <img className="icon-image" src={`/${icon}.png`} alt={icon} />
              </motion.div>
            ))}
          </Reveal>
          <Reveal always={true} variants={children} className="tech-image">
            <div className="tech-image-layer" style={{ filter: isHovered[0] !== 'none' ? 'blur(4px)' : 'blur(0px)', transition: 'filter 0.5s ease-in-out' }} />
            <div className="percentage-bar" style={{ width: isHovered[0] !== 'none' ? progScores[isHovered[1]] + '%' : '0%' }} />
            <div className="percentage-number">{isHovered[0] !== 'none' ? progScores[isHovered[1]] : ''}</div>
            <div className="tech-name">{isHovered[0] !== 'none' ? isHovered[0] : ''}</div>
          </Reveal>
        </div>
      </Reveal>
    </main>
  );
};

export default Skills;
