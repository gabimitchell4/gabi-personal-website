import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  const bulletJournalPath = '/bulletJournal.png';
  const othelloPath =  '/othello1.png';
  const klondikePath = '/klondike2.png';


  return (
    <>
      <h1 className = "recentProjects">Recent Projects</h1>
      <div className = "container">
        <div className = "projectsGrid">
          <div className = "othello">
            <img className="project" src={process.env.PUBLIC_URL + othelloPath} alt="Othello View 1" />
          </div>
          <div className = "klondike">
            <img className="project" src={process.env.PUBLIC_URL + klondikePath} alt="Bullet Journal" />
          </div>
          <div className = "bulletJournal">
            <img className="project" src={process.env.PUBLIC_URL + bulletJournalPath} alt="Bullet Journal" />
          </div>
        </div>
      </div>
     </>
     
  );
}

export default Projects;
