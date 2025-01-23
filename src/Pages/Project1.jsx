import React from 'react';
import './Project1.css'; // Custom CSS file for styling
import image11 from '../assets/projectpage2.jpg';
import image21 from '../assets/projectpage2.jpg';
import image31 from '../assets/projectpage3.jpg';
import image41 from '../assets/projectpage4.jpg';
import image51 from '../assets/projectpage2.jpg';
import image61 from '../assets/projectpage2.jpg';
import image71 from '../assets/projectpage3.jpg';
import image81 from '../assets/projectpage4.jpg';



const Project1 = () => {
  return (
    <div className="project1-container">
      <div className="project1-row">
        {/* Text Section */}
        <div className="project1-text">
          <h1>iVedic Vidya Kendra</h1>
          <p><b>Institutional</b></p>
          <p><b>Location:</b> Pondicherry</p>
          <p><b>Typology:</b> Educational</p>
          <p><b>Year:</b> 2024</p>
          <p><b>Status:</b> Built</p>
          <p><b>Built up area:</b> 1,67,000 Sqft</p>
          <p><b>Client:</b> DAV Groups</p>
          <p><b>Structural:</b> Er Balasubramanian</p>
          <p><b>Contractor:</b> Dhara Constructions, Erode</p>
          <p><b>Consultants:</b> Alfa Associates [Electrical], D&D [Plumbing]</p>
          <p><b>Landscape:</b> Earthscapes</p>
          <p><b>Photography:</b> Denis Amirtharaj</p>
          <p><b>Lead Architects:</b> Raja Krishnan, Santhosh, Ramya</p>
          <p><b>Design Team:</b> Suriya Kumar, Hanush Praveen, Sofia Nathan, Sabrinath, Surya Narayan, Krishnah</p>
          <p>
            Vedic Vidya Kendra is a Vedic learning center that exemplifies simple living and promotes yoga within a dense, natural landscape.
            The architecture is deeply integrated with the environment, using natural materials and earth construction techniques, such as
            exposed brickwork, which seamlessly blend with the surroundings.
          </p>
         
        </div>

        {/* Photo Section */}
        <div className="project1-photos">
          <img src={image11} alt="Project 1" />
          <img src={image21} alt="Project 2" />
          <img src={image31} alt="Project 3" />
          <img src={image41} alt="Project 4" />
          <img src={image51} alt="Project 1" />
          <img src={image61} alt="Project 2" />
          <img src={image71} alt="Project 3" />
          <img src={image81} alt="Project 4" />
          
        </div>
      </div>
    </div>
  );
};

export default Project1;
