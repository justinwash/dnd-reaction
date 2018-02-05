import React, {Component} from 'react';
import logo from '../Images/logo.svg';
import TitleBar from './TitleBar';
import '../Stylesheets/App/App_Light.css';
import '../Stylesheets/App/App_Dark.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark'
        };
        this.themeSwitcher = this.themeSwitcher.bind(this);
    }

    themeSwitcher() {
        if (this.state.theme === 'dark') {
            this.setState({theme: 'light'})
        }
        else {
            this.setState({theme: 'dark'})
        }
    }

    render() {
        return (
            <div id="App" className={this.state.theme}>
                <TitleBar title={"DnD Reaction"} themeToggle={this.themeSwitcher} selectedTheme={this.state.theme}/>
                <header id="App-header" className={this.state.theme}>
                    <img src={logo} id="App-logo" className={this.state.theme} alt="logo"/>
                    <h1 id="App-title" className={this.state.theme}>Welcome to DnD Reaction</h1>
                </header>
                <p id="App-intro" className={this.state.theme}>
                    A Dungeon Master's companion
                    built with<code> React.js </code>
                    <code> Electron </code>
                </p>
            </div>
        );
    }
}

export default App;
