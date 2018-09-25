import React, { Component, Fragment } from 'react'; 

class PlayerList extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			value: '', //empty string for palyers names inputted
			playerNames: [], // empty array to store players name 

		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.sort = this.sort.bind(this)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		this.setState({
			value: '',
			playerNames: this.state.playerNames.concat([this.state.value] + ' ' + 'vs ') 
		}); 
	}

	sort(event) {

		this.setState({
			randomisePlayers: this.state.playerNames.sort(function(a, b){
				return 0.5 - Math.random()
			})
		}); 
    
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
					onClick={this.sort}>Generate Pairings
					</button>

				<div className="player-matches"> 

					<label className="subheadright">Who vs Who</label> 

					<p>{this.state.randomisePlayers}</p>

				</div> 

			</Fragment> 

		);
	}
}

export default PlayerList; 