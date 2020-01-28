import React from 'react';
import ReactPlayer from 'react-player';

class DroneVideo extends React.Component {
    render () {
        return <ReactPlayer url="https://www.youtube.com/watch?v=I07MZ50OQN" playing />
    }
}

export default DroneVideo;