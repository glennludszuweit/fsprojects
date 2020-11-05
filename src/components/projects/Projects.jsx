import React from 'react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <main>
      <div className='cards'>
        {projects.length < 1 && <li key='empty'>No projects yet!</li>}
        {projects.map((project) => (
          <div className='card' key={project.title}>
            <div className='card__image-container'>
              <a href={project.url} target='_blank' rel='noopener noreferrer'>
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            <div className='card__content'>
              <h2 className='card__title'>{project.title}</h2>
              <div className='card__info'>
                <p>
                  <a
                    className='card__info-project'
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Project
                  </a>
                </p>
                <p className='card__info-code'>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Source Code
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
