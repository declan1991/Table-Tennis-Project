import React, { Component, Fragment } from 'react'; 

class PlayerList extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			value: '', //empty string for the user name
			item: [], // empty array to store players name 

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
			item: this.state.item.concat([this.state.value])
		}); 
	}

	sort(event) {

		this.setState({
			item: this.state.item.sort(function(a, b){
				return 0.5 - Math.random()
			})
		}); 
    
	  }

	render() {
		return (

			<Fragment> 

			    <div className="player-form">

				<label>Create Player Name</label>

					<input value={this.state.value} 
					onChange={this.handleChange} />

					<button onClick={this.handleSubmit}>Add Player</button> 

						<ul> 
							{
								this.state.item.map((item, index) =>
							<li className="player-names" key={index}>{item}</li> 

							)
						}

						</ul> 
				</div>
				<div className="player-matches"> 

					<button onClick={this.sort}>Generate VS HERE</button>

					<p>{this.item}</p> 

				</div> 

			</Fragment> 

		);
	}
}

export default PlayerList; 