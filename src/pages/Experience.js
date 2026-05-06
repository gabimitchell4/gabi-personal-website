import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience-page">
      <h1 className="page-title">My <span>Resume</span></h1>
      <div className="experience-subtitle-row">
        <p className="page-subtitle">Education, experience, and skills.</p>
        <a
          className="resume-download"
          href="/resume.pdf"
          download="Gabi_Mitchell_Resume.pdf"
        >
          Download PDF
        </a>
      </div>
      <div className="resume-frame">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="resume-embed"
        />
      </div>
    </div>
  );
}

export default Experience;
