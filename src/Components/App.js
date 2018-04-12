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
import MyCharacters from './Pages/MyCharacters';
import CharacterSheet from './Pages/CharacterSheet/CharacterSheet';
import CampNotes from './Pages/CampNotes';
import Encounters from './Pages/Encounters';
// import SRD Pages
import SRDHomePage from './Pages/SRD/SRDHomePage';
import SRDSpellcasting from './Pages/SRD/SRDSpellcasting';
import SRDCharacters from './Pages/SRD/SRDCharacters';
import SRDClasses from './Pages/SRD/SRDClasses';
import SRDCombat from './Pages/SRD/SRDCombat';
import SRDEquipment from './Pages/SRD/SRDEquipment';
import SRDMechanics from './Pages/SRD/SRDMechanics';
import SRDMonsters from './Pages/SRD/SRDMonsters';
import SRDNpcs from './Pages/SRD/SRDNpcs';
import SRDPlaying from './Pages/SRD/SRDPlaying';
import SRDLegal from './Pages/SRD/SRDLegal';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
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
                            <Route exact path='/mycharacters' component={MyCharacters}/>
                            <Route path='/charsheettest' render={(routeProps) => (
                                <CharacterSheet {...routeProps} theme={this.state.theme} />)} />
                            <Route path='/campnotes' component={CampNotes}/>
                            <Route path='/encounters' component={Encounters}/>
                            <Route path='/srd' component={SRDHomePage}/>
                            // srd child routes. MOVE THESE!!!
                            <Route path='/Spellcasting' component={SRDSpellcasting}/>
                            <Route path='/Characters' component={SRDCharacters}/>
                            <Route path='/Classes' component={SRDClasses}/>
                            <Route path='/Combat' component={SRDCombat}/>
                            <Route path='/Equipment' component={SRDEquipment}/>
                            <Route path='/Mechanics' component={SRDMechanics}/>
                            <Route path='/Monsters' component={SRDMonsters}/>
                            <Route path='/NPCs' component={SRDNpcs}/>
                            <Route path='/Playing' component={SRDPlaying}/>
                            <Route path='/Legal Info' component={SRDLegal}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
