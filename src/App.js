import React from 'react';
import './App.css';

import DroneVideo from './components/Drone/droneVideo';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>NP & Me</h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="droneVideo">
            <DroneVideo />
          </div>
          <div className="NationalParkList">
            <h3>United States National Parks</h3>
            {/* <NPList /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
