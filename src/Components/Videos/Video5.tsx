import React from 'react';

const VideoPlayer5: React.FC = () => {
  return (
    <div>
      <iframe
        frameBorder={0}
        allowFullScreen
        src="https://scripts.converteai.net/92be81cf-06f2-4dc3-9145-e762e8be94b8/players/6579e12264b96d00098dea8e/embed.html" 
        id="ifr_6579e12264b96d00098dea8e" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        referrerPolicy="origin"
      ></iframe>
    </div>
  );
};

export default VideoPlayer5;
