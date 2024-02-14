import '@/styles/Skills.scss';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const children: Variants = {
  hidden: { opacity: 0, y: '50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.3, staggerChildren: 0.03 } },
};

const children2: Variants = {
  hidden: { opacity: 0, y: '50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.2 } },
};

const Skills: React.FC = () => {
  const progIcons = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Node', 'React', 'Next', 'C', 'CPP', 'Python', 'PHP', 'Golang', 'Bootstrap', 'MongoDB', 'MySQL', 'GIT', 'VS Code'];

  return (
    <main id="skills">
      <Reveal always={true} variants={parent} className="row1">
        <motion.h2 variants={children} className="title">
          What <span className="gradient-text">skills</span>
          <br />I am good at
        </motion.h2>
        <div className="skill-cards">
          <motion.div variants={children} className="card">
            <img src="/Code.png" alt="clean-code" className="skill-icon" />
            <p className="skill-desc">Clean and readable code to ease the web maintain and debug</p>
          </motion.div>
          <motion.div variants={children} className="card">
            <img src="/Device.png" alt="responsive layout" className="skill-icon" />
            <p className="skill-desc">Responsive web layout to fit the layout with various different devices</p>
          </motion.div>
          <motion.div variants={children} className="card">
            <img src="/Layout.png" alt="minimlaist design" className="skill-icon" />
            <p className="skill-desc">Minimalist web design to please the user with an aesthetic modern design</p>
          </motion.div>
        </div>
      </Reveal>
      <Reveal always={true} variants={parent} className="row2">
        <motion.h4 variants={children} className="tech-title">
          <span className="gradient-text">Technology</span>
          <br />I currently can use
        </motion.h4>
        <div className="prog-stacks">
          <motion.div variants={children} className="icons">
            {progIcons.map((icon, index) => (
              <div key={index} className="icon">
                <motion.img variants={children2} className="icon-image" src={`/${icon}.png`} alt={icon} style={{ width: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </motion.div>
          <motion.div variants={children} className="tech-image" />
        </div>
      </Reveal>
    </main>
  );
};

export default Skills;
