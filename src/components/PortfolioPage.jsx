// PortfolioPage.jsx
import React, { useState } from 'react';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Women Safety Analytics',
    category: 'App',
    image: '/images/womeni.jpeg',
    description: 'Real-time video surveillance system with gender detection and threat alerts using YOLOv8 and TensorFlow.',
    previewLink: 'https://github.com/DevAyush27/Women_Safety_Analytics'
  },
  {
    id: 2,
    title: 'Bloom Together (Team Project)',
    category: 'Web',
    image: '/images/BT.jpeg',
    description: 'Mental health platform built with a team. I contributed the chatbot integration and MongoDB backend.',
    previewLink: 'https://github.com/CodesavvySiddharth/Bloom_Together'
  },
  {
    id: 3,
    title: 'MedTrack',
    category: 'Web',
    image: '/images/Med.jpeg',
    description: 'Full-stack medicine tracker app currently under development. Features include reminders, authentication, and RESTful APIs. Will be pushed to GitHub once stable.',
    previewLink: 'https://github.com/DevAyush27/med-tracker'
  },
  {
    id: 4,
    title: 'News App',
    category: 'App',
    image: '/images/News.jpeg',
    description: 'React-based categorized news app.',
    previewLink: 'https://github.com/DevAyush27/News-app'
  },
   {
   id: 5,
   title: 'Translator',
   category: 'Web',
   image: '/images/translator.png',
   description: 'React-based app which makes life easy.',
   previewLink: 'https://github.com/DevAyush27/hinglish-AI-translator'
 },
  {
   id: 6,
   title: 'Logo',
   category: 'Logo',
   image: '/images/image.png',
   description: 'React-based categorized news app.',
   previewLink: 'https://github.com/DevAyush27/News-app'
 },








];

const categories = ['All', 'Web', 'App', 'Logo'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: '50px',
        paddingBottom: '50px'
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          padding: '30px'
        }}
      >
        <h2 className="text-center fw-bold mb-4">My Portfolio</h2>

        {/* Category Filter Buttons */}
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredProjects.map((project) => (
            <div className="col" key={project.id}>
              <div
                className="card h-100"
                onClick={() => setSelectedProject(project)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    height: '180px',
                    objectFit: 'cover'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.category}</p>
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
    </div>
  );
};

export default PortfolioPage;
