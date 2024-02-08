import '@/styles/Skills.css';
import React from 'react';

const Skills: React.FC = () => {
  const progIcons = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Node', 'React', 'Next', 'C', 'CPP', 'Python', 'PHP', 'Golang', 'Bootstrap', 'MongoDB', 'MySQL', 'GIT', 'VS Code'];

  return (
    <main id="skills">
      <div className="row1">
        <h2 className="title">
          What <span className="gradient-text">skills</span>
          <br />I am good at
        </h2>
        <div className="skill-cards">
          <div className="card">
            <img src="/Code.png" alt="clean-code" className="skill-icon" />
            <p className="skill-desc">Clean and readable code to ease the web maintain and debug</p>
          </div>
          <div className="card">
            <img src="/Device.png" alt="responsive layout" className="skill-icon" />
            <p className="skill-desc">Responsive web layout to fit the layout with various different devices</p>
          </div>
          <div className="card">
            <img src="/Layout.png" alt="minimlaist design" className="skill-icon" />
            <p className="skill-desc">Minimalist web design to please the user with an aesthetic modern design</p>
          </div>
        </div>
      </div>
      <div className="row2">
        <h4 className="tech-title">
          <span className="gradient-text">Technology</span>
          <br />I currently can use
        </h4>
        <div className="prog-stacks">
          <div className="icons">
            {progIcons.map((icon, index) => (
              <div key={index} className="icon">
                <img className="icon-image" src={`/${icon}.png`} alt={icon} style={{ width: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div className="tech-image" />
        </div>
      </div>
    </main>
  );
};

export default Skills;
