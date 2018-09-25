import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'; 
import PlayerList from './Components/PlayerList'; 

class App extends Component {
  render() {
    return (
      <Fragment>
	    <Header /> 
	      <div className="grid-container">
		    <PlayerList />
	      </div>  
      </Fragment> 
    );
  }
}

export default App;
