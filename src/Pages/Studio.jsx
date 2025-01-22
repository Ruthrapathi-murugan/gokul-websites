import React from 'react';
import './Studio.css'; // Import the CSS file for styling
import studioImage from '../assets/da.jpg'; // Replace with the actual image path
import teamImage1 from '../assets/team1.jpg'; // Replace with the actual image path
import teamImage2 from '../assets/team2.jpg'; // Replace with the actual image path
import uspImage1 from '../assets/project1.jpg'; 
import uspImage2 from '../assets/project2.jpg'; 
import uspImage3 from '../assets/project3.jpg'; 

const Studio = () => {
    return (
        <>
        <section className="studio" style={{padding: "100px"}}>
                            <div className="studio-content">
            <div className="studio-image">
                    <img src={studioImage} alt="Studio" />
                </div>
                <div className="studio-text">
                    <h2><b>Get to Know Us</b></h2>
                    <p><b>
                        This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does, and what makes it unique. Share its core values and what this site has to offer.
                        This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does, and what makes it unique. Share its core values and what this site has to offer.
                        This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does, and what makes it unique. Share its core values and what this site has to offer.
                        </b>
                    </p>
                </div>
            </div>
          
        </section>

    <div className="border-line"></div>
                         {/* usp Section */}
        <section className="usp">
    <h1 className="section-title" style={{fontSize:"70px"}}>Our USP</h1>
    <div className="usp-row">
        <div className="usp-item">
            <img src={uspImage1} alt="USP 1" />
            <h4>Affordable & Accessible Design</h4>
            <p>Add paragraph text. Click “Edit Text” to customize this theme across your site. You can update and reuse text themes.</p>
        </div>
        <div className="usp-item">
            <img src={uspImage2} alt="USP 2" />
            <h4>Designs Inspired by Local Heritage</h4>
            <p>Add paragraph text. Click “Edit Text” to customize this theme across your site. You can update and reuse text themes.</p>
        </div>
        <div className="usp-item">
            <img src={uspImage3} alt="USP 3" />
            <h4>Hassle-Free End-to-End Services</h4>
            <p>Add paragraph text. Click “Edit Text” to customize this theme across your site. You can update and reuse text themes.</p>
        </div>
    </div>
</section>


<div className="border-line"></div>
                 {/* Our Team Section */}
                 <section className="team">
    <h1 className="section-title" style={{fontSize:"70px"}}>Our Team</h1>
    <div className="team-row">
        <div className="team-item">
            <img src={teamImage1} alt="Team Member 1" />
            <p>James Williams</p>
            <p>mysite@wix.com</p>
        </div>
        <div className="team-item">
            <img src={teamImage2} alt="Team Member 2" />
            <p>Chloe Wilson</p>
            <p>mysite@wix.com</p>
        </div>
    </div>
</section>

        </>
    );
};

export default Studio;
