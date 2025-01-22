import React from 'react';
import './Project.css';
import image1 from '../assets/project1.jpg';
import image2 from '../assets/project2.jpg';
import image3 from '../assets/project3.jpg';
import image4 from '../assets/project4.jpg';
import image5 from '../assets/project5.jpg';
import image6 from '../assets/project6.jpg';
import { Link } from 'react-router-dom'; 
const Project = () => {
  return (
    <>
    <div className="project-container">
    <h1 style={{padding:"50px",textAlign:"center"}}>Latest Projects</h1>

      {/* Row 1: 1 image */}
      <div className="project-row">
        <div className="project-item">
        <Link to="/project1"> {/* Use Link to navigate */}
            <img src={image1} alt="Project 1" />
          </Link>
        </div>
      </div>

      {/* Row 2: 3 images */}
      <div className="project-row">
        <div className="project-item">
          <img src={image2} alt="Project 2" />
        </div>
        <div className="project-item">
          <img src={image3} alt="Project 3" />
        </div>
        <div className="project-item">
          <img src={image4} alt="Project 4" />
        </div>
      </div>

      {/* Row 3: 2 images */}
      <div className="project-row">
        <div className="project-item">
          <img src={image5} alt="Project 5" />
        </div>
        <div className="project-item">
          <img src={image6} alt="Project 6" />
        </div>
      </div>

      {/* You can continue adding more rows as needed */}
      
      {/* Row 2: 3 images */}
      <div className="project-row">
        <div className="project-item">
          <img src={image2} alt="Project 2" />
        </div>
        <div className="project-item">
          <img src={image3} alt="Project 3" />
        </div>
        <div className="project-item">
          <img src={image4} alt="Project 4" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Project;
