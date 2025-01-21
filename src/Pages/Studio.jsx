import React from 'react';
import './Studio.css'; // Import the CSS file for styling
import studioImage from '../assets/da.jpg'; // Replace with the actual image path

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
        <div >
                    <h1 style={{alignContent:"center",textAlign:"center"}}>Our USP</h1>
                </div>
                <div>
                    
                </div>
        </>
    );
};

export default Studio;
