import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const imagePath1 = '/page1.png';
  const imagePath2 = '/page3.png';
  const imagePath3 = '/page5.png';
  const imagePath4 =  '/othello1.png';
  const imagePath5 =  '/othello2.png';
  const imagePath6 =  '/othello3.png';
  const imagePath7 =  '/othello4.png';
  const imagePath9 = '/klondike2.png';
  const imagePath10 = '/klondike3.png';
  const imagePath11 = '/klondike4.png';

  return (
    <>
      <h1>Welcome to the Projects Page</h1>
      <h2>Online Bullet Journal</h2>
      <div className = "othello">
        <img className="project" src={process.env.PUBLIC_URL + imagePath4} alt="Bullet Journal" />
      </div>
      <div className = "othello">
        <img className="project" src={process.env.PUBLIC_URL + imagePath5} alt="Bullet Journal" />
      </div>
      <div className = "othello">
        <img className="project" src={process.env.PUBLIC_URL + imagePath6} alt="Bullet Journal" />
      </div>
      <div className = "othello">
        <img className="project" src={process.env.PUBLIC_URL + imagePath7} alt="Bullet Journal" />
      </div>
      <div className = "klondike">
        <img className="project" src={process.env.PUBLIC_URL + imagePath9} alt="Bullet Journal" />
      </div>
      <div className = "klondike">
        <img className="project" src={process.env.PUBLIC_URL + imagePath10} alt="Bullet Journal" />
      </div>
      <div className = "klondike">
        <img className="project" src={process.env.PUBLIC_URL + imagePath11} alt="Bullet Journal" />
      </div>
      <div className = "bulletJournal">
        <img className="project" src={process.env.PUBLIC_URL + imagePath1} alt="Bullet Journal" />
      </div>
      <div className = "bulletJournal">
        <img className="project" src={process.env.PUBLIC_URL + imagePath2} alt="Bullet Journal" />
      </div>
      <div className = "bulletJournal">
        <img className="project" src={process.env.PUBLIC_URL + imagePath3} alt="Bullet Journal" />
      </div>
      <p>Description of your project goes here.</p>
     </>
     
  );
}

export default Projects;
