import React, { useState } from 'react';
import './Work.css';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Women Safety Analytics',
    category: 'App',
    image: '/images/womeni.jpeg',
    description: 'Real-time video surveillance system with gender detection and threat alerts using YOLOv8 and TensorFlow.',
    previewLink: 'https://github.com/DevAyush27/Women_Safety_Analytics',
    technologies: ['Python', 'YOLOv8', 'TensorFlow', 'OpenCV']
  },
  {
    id: 2,
    title: 'Bloom Together',
    category: 'Web',
    image: '/images/BT.jpeg',
    description: 'Mental health platform built with a team. I contributed the chatbot integration and MongoDB backend.',
    previewLink: 'https://github.com/CodesavvySiddharth/Bloom_Together',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 3,
    title: 'MedTrack',
    category: 'Web',
    image: '/images/Med.jpeg',
    description: 'Full-stack medicine tracker app currently under development. Features include reminders, authentication, and RESTful APIs.',
    previewLink: 'https://github.com/DevAyush27/med-tracker',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    id: 4,
    title: 'News App',
    category: 'App',
    image: '/images/News.jpeg',
    description: 'React-based categorized news app with real-time updates and clean UI.',
    previewLink: 'https://github.com/DevAyush27/News-app',
    technologies: ['React', 'News API', 'Bootstrap', 'JavaScript']
  },
  {
    id: 5,
    title: 'AI Translator',
    category: 'Web',
    image: '/images/translator.png',
    description: 'Hinglish AI translator that makes communication easy between Hindi and English.',
    previewLink: 'https://github.com/DevAyush27/hinglish-AI-translator',
    technologies: ['React', 'AI API', 'JavaScript', 'CSS']
  },
  {
    id: 6,
    title: 'Brand Identity',
    category: 'Logo',
    image: '/images/image.png',
    description: 'Creative logo design and brand identity work for various clients.',
    previewLink: '#',
    technologies: ['Photoshop', 'Illustrator', 'Design', 'Branding']
  }
];

const categories = ['All', 'Web', 'App', 'Logo'];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <div className="project-tech">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    <button className="view-btn">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Work;
