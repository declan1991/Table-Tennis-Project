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
        this.matchPairs = this.matchPairs.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        this.setState({
            value: '', 
            playerNames: this.state.playerNames.concat([this.state.value] + ' '),
        }); 
    }

    matchPairs(event) {
        let playerMatches = this.state.playerNames //copy array

        /***************************************************************

        DECLAN - STEPS TO TAKE

        1. Move shuffle and getPairs functions into matchPairs

        2.Pass this.state.playerNames as an argument to shuffle

        3. Take the result of the shuffle function call and pass it into getPairs and store as a variable of your naming

        4. Call this.setState passing in this variable as the value to playerNames

        5. Clear up lines 53 - 90 as this is stray code

        6. At this stage I'd consider styling it as much as you can.

        ***************************************************************/

        if (playerMatches.length % 2 !== 0) {
        alert("You must have an even number of players. You currently have " + playerMatches.length + " players.");
   
    }

    /*
    Shuffle the provided array.
    */

    let shuffle = function(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    } 

    /*
    Return an array of pairs.

    Loop through the array and on each iteration, use ++i to push it to the 
    next item, so each iteration is actually incrementing i twice.
    */

    let getPairs = function(a) {
        let pairs = []; //Create an empty array
        for (let i = 0; i < a.length; i++) { // loop through provided array
            pairs.push([ // add a pair to the pairs array
                a[i], // get the current array position
                a[++i] // increment i to get the next array position
            ]);
        }
        return pairs;
    }

    console.log(getPairs(shuffle(playerMatches)));

    this.setState({ })
    
    }
    //console.log(getPairs(shuffle(names)));*/ 

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
                    onClick={this.matchPairs}
                >Generate Pairings
                    </button>

                <div className="player-matches"> 

                    <label className="subheadright">Match Pairings</label>

                </div> 

            </Fragment> 

        );
    }
}

export default PlayerList; 