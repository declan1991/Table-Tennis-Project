import React, { Component, Fragment } from 'react'; 

class PlayerList extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			value: '',
			item: [],

		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
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

	render() {
		return (

			<Fragment> 

				<label>Create Player Name</label>

					<input value={ this.state.value } 
					onChange={ this.handleChange } />

					<button onClick={this.handleSubmit}>Add Player</button> 

						<ul> 
							{
								this.state.item.map((item, index) =>
							<li className="player-names" key={index}>{item}</li> 

							)
						}

						</ul> 

					<button>Generate HERE</button> 

			</Fragment> 

		);
	}
}

export default PlayerList; 