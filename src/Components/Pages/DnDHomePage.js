import React, {Component} from 'react';

class DnDHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // put stuff here
        }
    }

    render() {
        return (
            <div id="DdDHomePage">
                <h1 id="App-title" className={this.state.theme}>Welcome to DnD Reaction</h1>
                <p id="App-intro" className={this.state.theme}>
                    A Dungeon Master's companion
                    built with<code> React.js </code>
                    <code> Electron </code>
                </p>
            </div>
        );
    }
}

export default DnDHomePage;