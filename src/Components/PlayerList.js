import React, { Component, Fragment } from 'react'; 

class PlayerList extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			value: '', //empty string for user to input player names
			playerNames: [], // empty array to store players name 

		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.randomise = this.randomise.bind(this)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		this.setState({
			value: '',
			playerNames: this.state.playerNames.concat([this.state.value] + ' ') 
		}); 
	}

	randomise(event) {

		let randomisePlayers = this.state.playerNames;

		if(randomisePlayers.length % 2 != 0) {
			alert("You must have an even number of players. You currenty have " + randomisePlayers.length + " players.");
		} else {

			let arr1 = randomisePlayers.slice(), // copy array
			    arr2 = randomisePlayers.slice(); // copy array again

			    arr1.sort(function() {return 0.5 - Math.random();}); // shuffle arrays
			    arr2.sort(function() {return 0.5 - Math.random();});

			    while (arr1.length) {
			    	let player1 = arr1.pop() // get last value of arr1 
			    	let player2 = arr2[0] == player1 ? arr2.pop() : arr2.shift(); 
			    	              // if the first value is the same as player1,
			    	              // get the last value, otherwise get the first

		this.setState({
			randomisePlayers: player1 + 'vs ' + player2 
			});
    
		}
	}
}
	
	render() {
		return (

			<Fragment> 

			    <div className="player-form">	

					<input className="inputField" 
					placeholder="Enter Player Name..."
					value={this.state.value} 
					onChange={this.handleChange} />

					<p>Player: {this.state.value}</p> 

					<button className="addBtn" 
					onClick={this.handleSubmit}>Add Player
					</button>

						
				</div>

				<button className="generateBtn" 
					onClick={this.randomise}>Generate Pairings
					</button>

				<div className="player-matches"> 

					<label className="subheadright">Who vs Who</label> 

					<p>{this.randomisePlayers}</p>

				</div> 

			</Fragment> 

		);
	}
}

export default PlayerList; 