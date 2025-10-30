import React from "react";
import "./Skills.css";

// Import your icons (make sure these paths are correct)
import reactIcon from "../assets/icons/react.png";
import javascriptIcon from "../assets/icons/JavaScript.png";
import cypressIcon from "../assets/icons/cypress.png";
import figmaIcon from "../assets/icons/figma.png";
import expressjsIcon from "../assets/icons/expressjs.png";
import gitIcon from "../assets/icons/git.webp";
import mongodbIcon from "../assets/icons/mongodb.png";
import nestjsIcon from "../assets/icons/nestjs.png";
import nextjsIcon from "../assets/icons/nextjs.png";
import nodejsIcon from "../assets/icons/nodejs.jpg";
import postgresqlIcon from "../assets/icons/postgresql.png";
import sassIcon from "../assets/icons/sass.png";
import socketioIcon from "../assets/icons/socketio.png";
import storybookIcon from "../assets/icons/storybook.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import typescriptIcon from "../assets/icons/Typejava.png";

function Skills() {
  // Organize skills based on your structure
  const jsSkills = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressjsIcon },
    { name: "Next.js", icon: nextjsIcon },
    { name: "Nest.js", icon: nestjsIcon },
    { name: "Cypress", icon: cypressIcon },
    { name: "Git", icon: gitIcon },
    { name: "Figma", icon: figmaIcon },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: mongodbIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "Socket.io", icon: socketioIcon },
    { name: "Storybook", icon: storybookIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Sass", icon: sassIcon },
  ];

  // Create duplicated arrays for seamless scrolling
  const topRowSkills = [...jsSkills, ...jsSkills];
  const bottomRowSkills = [...databaseSkills, ...databaseSkills];

  return (
    <div id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        Continuously expanding my toolkit — mastering modern frameworks,
        libraries, and design tools to create seamless digital experiences.
      </p>

      <div className="slider-container">
        {/* Top Row - JS Skills */}
        <div className="slider-track top-row">
          {topRowSkills.map((skill, index) => (
            <div key={`top-${index}`} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Database & Tools */}
        <div className="slider-track bottom-row">
          {bottomRowSkills.map((skill, index) => (
            <div key={`bottom-${index}`} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
