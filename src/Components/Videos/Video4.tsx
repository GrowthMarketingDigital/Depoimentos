import React from 'react';

const VideoPlayer4: React.FC = () => {
  return (
    <div>
      <iframe
        frameBorder={0}
        allowFullScreen
        src="https://scripts.converteai.net/92be81cf-06f2-4dc3-9145-e762e8be94b8/players/6579df4756c598000932da50/embed.html" 
        id="ifr_6579df4756c598000932da50" 
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

export default VideoPlayer4;
