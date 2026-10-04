import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-header">
        <div>
          <h1 className="experience-title">Resume</h1>
          <p className="experience-sub">Gabriella Mitchell · Software Engineer & Product Designer</p>
        </div>
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
