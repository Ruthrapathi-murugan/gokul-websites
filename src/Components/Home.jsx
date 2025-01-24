import React from 'react';
import './Home.css';
import headerImage from '../assets/home.jpg';
import headerImage2 from '../assets/home2.jpg';
import headerImage3 from '../assets/home3.jpg';
import headerImage4 from '../assets/home4.jpg';

const Home = () => {
    return (
        <div className='home'>
            {/* Header image */}
            <img src={headerImage} alt="Header 1" className="header-img" />
            
            {/* Second image */}
            <img src={headerImage2} alt="Header 2" className="header-img" />
            
            {/* Third image */}
            <img src={headerImage3} alt="Header 3" className="header-img" />
        {/* fourth image */}
        <img src={headerImage4} alt="Header 3" className="header-img" />
        </div>
    );
};

export default Home;
