import React, { Component, Fragment } from 'react';
import './App.css';

import PlayerList from './Components/PlayerList'; 
 

class App extends Component {
  render() {
    return (
      <Fragment>
	      <div className="grid-container">
		    <PlayerList />
	      </div>  
      </Fragment> 
    );
  }
}

export default App;
