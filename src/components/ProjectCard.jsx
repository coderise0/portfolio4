import React, { useState } from 'react'
import { projectImages } from '../assets/projectImages'

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="card-front">
          <div className="project-image">
            <img 
              src={projectImages[project.id] || project.image || '/api/placeholder/300/200'} 
              alt={project.title}
              loading="lazy"
            />
          </div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="back-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="technologies">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          width: 100%;
          height: 380px;
          perspective: 1000px;
          cursor: pointer;
          
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          }
          
          .card-inner.flipped {
            transform: rotateY(180deg);
          }
            
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          background:#6d94c5
        }

        .card-back {
          transform: rotateY(180deg);
          padding: 20px;
          display: flex;
          flex-direction: column;
          color: var(--color-white);
          justify-content: space-between;
        }

        /* Front Side Styles */
        .project-image {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-info {
          padding: 20px;
          text-align: left;
          
        }

        .project-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-white);
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .project-category {
          font-size: 0.9rem;
          color: var(--color-light-gray);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
          font-weight: 500;
        }

        /* Back Side Styles */
        .back-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-back .project-title {
          font-size: 1.3rem;
          margin-bottom: 15px;
          text-align: center;
          color: #333333;
          font-family: Playfair Display;
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.5;
          color: var(--color-light-gray)
          margin-bottom: 20px;
          text-align: left;
          flex-grow: 1;
          font-Family:Nunito;
        }

        .technologies h4 {
          font-size: 0.9rem;
          color: var(--color-light-gray);
          margin: 0 0 10px 0;
          text-align: left;
          font-weight: 600;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .tech-tag {
          background: var(--color-secondary-text);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .btn-primary,
        .btn-secondary {
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--beige-light);
          border: 2px solid #dedede;
          color: #333333;
        }

        .btn-primary:hover {
          background: #cccccc;
          color: #333333;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #cbdceb;
          color: var(--color-secondary-text);
          border: 2px solid var(--color-secondary-text);
        }

        .btn-secondary:hover {
          background: var(--color-secondary-text);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .project-card {
            height: 320px;
          }

          .project-image {
            height: 180px;
          }

          .project-info {
            padding: 15px;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .card-back {
            padding: 15px;
          }

          .project-description {
            font-size: 0.85rem;
          }

          .project-links {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            height: 300px;
          }

          .project-image {
            height: 160px;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-category {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}