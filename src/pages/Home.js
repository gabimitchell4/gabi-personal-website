import React from 'react';
import '../styles/home.css';
import headshotImg from '../assets/headshot.png';

function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Gabi Mitchell</h1>
          <p className="hero-bio">
            I'm a Computer Science and Design student passionate about turning
            great designs into great code. I love UI/UX, exploring how medicine
            and tech intersect, and teaching underrepresented groups how to build things.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">UI / UX Design</span>
            <span className="hero-tag">Computer Science</span>
            <span className="hero-tag">React</span>
            <span className="hero-tag">Java</span>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img
            className="hero-headshot"
            src={headshotImg}
            alt="Gabi Mitchell"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
