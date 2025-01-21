import React from 'react';

const VideoIntro = ({ handleVideoEnd }) => {
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="video-background"
      >
        <source src="/gokul (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoIntro;
