import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const projectData = [
  {
    name: 'Othello',
    description: 'A two-player Reversi game on a hexagonal grid, built in Java with full game logic, disc flipping mechanics, and a visual board renderer.',
    image: '/othello1.png',
    tags: ['Java', 'Game Logic', 'OOP'],
    link: '/othello',
  },
  {
    name: 'Klondike Solitaire',
    description: 'Classic solitaire card game with full deck management, drag-and-drop gameplay, and win-state detection.',
    image: '/klondike2.png',
    tags: ['Java', 'MVC', 'Data Structures'],
    link: null,
  },
  {
    name: 'Bullet Journal',
    description: 'A digital bullet journal app for organizing tasks, habits, and notes with a clean and intuitive interface.',
    image: '/bulletJournal.png',
    tags: ['UI/UX', 'Design', 'Frontend'],
    link: null,
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="page-title">My <span>Projects</span></h1>
      <p className="page-subtitle">A collection of things I've built.</p>
      <div className="projects-grid">
        {projectData.map((proj) => {
          const card = (
            <div className="project-card" key={proj.name}>
              <div className="project-img-wrap">
                <img
                  className="project-img"
                  src={process.env.PUBLIC_URL + proj.image}
                  alt={proj.name}
                />
              </div>
              <div className="project-info">
                <h2 className="project-name">{proj.name}</h2>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tags">
                  {proj.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );

          return proj.link ? (
            <Link to={proj.link} style={{ textDecoration: 'none' }} key={proj.name}>
              {card}
            </Link>
          ) : card;
        })}
      </div>
    </div>
  );
}

export default Projects;
