import React from 'react';

const VideoPlayer: React.FC = () => {
    return (
        <div>
            <iframe
                frameBorder={0}
                allowFullScreen
                src="https://scripts.converteai.net/92be81cf-06f2-4dc3-9145-e762e8be94b8/players/654d14e121585a0009a9cef4/embed.html" 
                id="ifr_654d14e121585a0009a9cef4"
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

export default VideoPlayer;
