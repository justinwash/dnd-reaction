import React, {Component} from 'react';
// import components
import DnDSideMenu from './DnDSideMenu/DnDSideMenu';
import TitleBar from './TitleBar';
// import stylesheets
import '../Stylesheets/App/App_Light.css';
import '../Stylesheets/App/App_Dark.css';
import '../Stylesheets/DnDBox/DnDBox.css';
import '../Stylesheets/DnDBox/DnDMainView.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            currentPage: 'DnDHomePage'
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
                <TitleBar title={"DnD Reaction"} themeToggle={this.themeSwitcher} theme={this.state.theme}/>
                <div id="DnDBox">
                    <DnDSideMenu theme={this.state.theme}/>
                    <div id="DnDMainView" className={this.state.theme}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
