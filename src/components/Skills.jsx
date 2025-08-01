import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 90, icon: 'fas fa-code' },
        { name: 'Python', level: 85, icon: 'fab fa-python' },
        { name: 'Java', level: 80, icon: 'fab fa-java' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
        { name: 'SQL', level: 80, icon: 'fas fa-database' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React.js', level: 90, icon: 'fab fa-react' },
        { name: 'Node.js', level: 85, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 80, icon: 'fas fa-server' },
        { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
        { name: '.NET', level: 75, icon: 'fas fa-code' }
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', level: 85, icon: 'fas fa-database' },
        { name: 'MySQL', level: 80, icon: 'fas fa-database' },
        { name: 'Oracle DB', level: 75, icon: 'fas fa-database' },
        { name: 'RESTful APIs', level: 90, icon: 'fas fa-link' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: 'fab fa-git-alt' },
        { name: 'Docker', level: 80, icon: 'fab fa-docker' },
        { name: 'Kubernetes', level: 75, icon: 'fas fa-dharmachakra' },
        { name: 'Linux', level: 85, icon: 'fab fa-linux' },
        { name: 'Postman', level: 90, icon: 'fas fa-paper-plane' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
