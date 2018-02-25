import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'nedb';
// import window components
import DnDSideMenu from './DnDSideMenu/DnDSideMenu';
import TitleBar from './TitleBar';
// import stylesheets
import '../Stylesheets/App/App_Light.css';
import '../Stylesheets/App/App_Dark.css';
import '../Stylesheets/DnDBox/DnDBox.css';
import '../Stylesheets/DnDBox/DnDMainView.css'
// import pages
import DnDHomePage from './Pages/DnDHomePage';
import CharSheet from './Pages/CharSheet';
import CampNotes from './Pages/CampNotes';
import Encounters from './Pages/Encounters';
import SRDHomePage from './Pages/SRD/SRDHomePage';
import SRDClasses from './Pages/SRD/SRDClasses';
import SRDRaces from './Pages/SRD/SRDRaces';
import SRDSpellcasting from './Pages/SRD/SRDSpellcasting';
import SRDEquipment from './Pages/SRD/SRDEquipment';
import SRDLegal from './Pages/SRD/SRDLegal';

// import SRD Pages


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
                        <Switch>
                            <Route exact path='/' component={DnDHomePage}/>
                            <Route path='/charsheet' component={CharSheet}/>
                            <Route path='/campnotes' component={CampNotes}/>
                            <Route path='/encounters' component={Encounters}/>
                            <Route path='/srd' component={SRDHomePage}/>
                            // srd child routes. MOVE THESE!!!
                            <Route path='/Classes' component={SRDClasses}/>
                            <Route path='/Races' component={SRDRaces}/>
                            <Route path='/Spellcasting' component={SRDSpellcasting}/>
                            <Route path='/Equipment' component={SRDEquipment}/>
                            <Route path='/Legal Info' component={SRDLegal}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
