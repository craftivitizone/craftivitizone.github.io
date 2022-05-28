import React from 'react';
import video from '../videos/tiger.mp4';

class TigerVideo extends React.Component {
    render() {
        return (
            <video className="vid" autoPlay loop muted preload='true'>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
        );
    }
}

export default TigerVideo;
