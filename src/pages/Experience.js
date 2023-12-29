// Experience.js
import React, { useEffect, useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [pdfSrc, setPdfSrc] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch('/resume.pdf');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfSrc(url);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    fetchPdf();
  }, []);

  return (
    <div>
      <div className="content">
        <div className="resume-container">
          <div className="resume">
            {pdfSrc && <embed src={pdfSrc} type="application/pdf" width="100%" height="1500px" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
