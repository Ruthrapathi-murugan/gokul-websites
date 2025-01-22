import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import './App.css';
import Home from './Components/Home';
import Studio from './Pages/Studio';
import VideoIntro from './Components/VideoIntro'; // Import the VideoIntro component
import Header from './Components/Header'; // Import the Header component
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Project from './Pages/Project';
import Project1 from './Pages/Project1';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // Check sessionStorage on page load to see if the video has already played
  useEffect(() => {
    const videoPlayed = sessionStorage.getItem('videoPlayed');
    if (videoPlayed) {
      setIsVideoFinished(true); // If video was already played, skip the video
    }
  }, []);

  // Handle video end
  const handleVideoEnd = () => {
    setIsVideoFinished(true);
    sessionStorage.setItem('videoPlayed', 'true'); // Mark the video as played for the session
  };

  return (
    <Router>
      <div>
        {/* Header with Navbar rendered on all pages */}
        <Header />
        <WhatsAppButton />
        
        {/* Only show the video on initial load (if not marked as played in sessionStorage) */}
        {!isVideoFinished ? (
          <VideoIntro handleVideoEnd={handleVideoEnd} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project1" element={<Project1 />} />
          </Routes>
        )}
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
