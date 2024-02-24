import '@/styles/Skills.scss';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const children: Variants = {
  hidden: { opacity: 0, x: '50%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.3, staggerChildren: 0.03 } },
};

const children2: Variants = {
  hidden: { opacity: 0, y: '50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.2 } },
};

const margin = '-300px 0px -200px 0px';

const Skills: React.FC = () => {
  const progIcons = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Node', 'React', 'Next', 'C', 'CPP', 'Python', 'Bootstrap', 'MongoDB', 'GIT', 'VS Code'];

  return (
    <main id="skills">
      <Reveal always={true} variants={parent} className="row1">
        <div className="section-desc">
          <motion.h2 variants={children} className="title">
            What <span className="gradient-text">skills</span>
            <br />I am good at
          </motion.h2>
          <motion.p variants={children} className="desc">
            These are some skills that I oftenly practice and implement when I working on a project
          </motion.p>
        </div>
        <div className="skill-cards">
          <div className="col1">
            <Reveal always={true} variants={children} margin={margin} className="card">
              <img src="/Code.svg" alt="clean-code" className="skill-icon" />
              <div className="skill-name">Clean Code</div>
              <p className="skill-desc">I make the code to be readable and easy to maintain</p>
            </Reveal>
            <Reveal always={true} variants={children} margin={margin} className="card">
              <img src="/Layout.svg" alt="minimlaist design" className="skill-icon" />
              <div className="skill-name">Minimalist Design</div>
              <p className="skill-desc">Simple and easy to understand UI to comfort the user&apos;s experience</p>
            </Reveal>
          </div>
          <div className="col2">
            <Reveal always={true} variants={children} margin={margin} className="card">
              <img src="/Device.svg" alt="responsive layout" className="skill-icon" />
              <div className="skill-name">Responsive Layout</div>
              <p className="skill-desc">Compatibility to any device&apos;s screen size</p>
            </Reveal>
            <Reveal always={true} variants={children} margin={margin} className="card">
              <img src="/Tech.svg" alt="modern tech" className="skill-icon" />
              <div className="skill-name">Latest Technology</div>
              <p className="skill-desc">Following the tech trends based on the project&apos;s needs</p>
            </Reveal>
          </div>
        </div>
      </Reveal>
      <Reveal always={true} variants={parent} className="row2">
        <div className="section-desc">
          <motion.h3 variants={children} className="tech-title">
            <span className="gradient-text">Technology</span>
            <br />I currently can use
          </motion.h3>
          <motion.p variants={children} className="tech-desc">
            These are the techs that I usually use to develop a project, yet there will be moe added to the list in the future
          </motion.p>
        </div>
        <div className="prog-stacks">
          <Reveal always={true} variants={children} className="icons">
            {progIcons.map((icon, index) => (
              <motion.div variants={children2} key={index} className="icon">
                <img className="icon-image" src={`/${icon}.png`} alt={icon} />
              </motion.div>
            ))}
          </Reveal>
          <Reveal always={true} variants={children} className="tech-image" />
        </div>
      </Reveal>
    </main>
  );
};

export default Skills;
