// Experience.js
import React, { useEffect, useState } from 'react';
import '../styles/Designs.css';

function Designs() {
    const foodPath = '/food.png';
    const youtubePath = "/youtube.png"
    const invictusPath = "/invictus.png"


  return (
    <>
    <h1 className = "designsHeader">Designs</h1>
    <div className = "outerDesignsContainer">
        <div className = "designsContainer">
            <img className="foodDesign" src={process.env.PUBLIC_URL +foodPath} alt="Food design" />
            <img className="youtubeDesign" src={process.env.PUBLIC_URL +youtubePath} alt="Youtube design" />
            <img className="invictusDesign" src={process.env.PUBLIC_URL +invictusPath} alt="Invictus design" />
        </div>
    </div>
    </>
  );
}


export default Designs;