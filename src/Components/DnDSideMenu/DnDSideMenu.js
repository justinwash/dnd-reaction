import React, {Component} from 'react';
import DnDMenuItem from './DnDMenuItem';
import '../../Stylesheets/DnDBox/DnDSideMenu_Dark.css';
import '../../Stylesheets/DnDBox/DnDSideMenu_Light.css';
const menuItemTypes = {
    HOME: 0,
    CHARSHEETS: 1,
    CAMPNOTES: 2,
    SRD: 3,
    ENCOUNTERS: 4
}

class DnDSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem: 1
        };
        this.activeHandler = this.activeHandler.bind(this);
    }

    activeHandler(id) {
        this.setState({ activeMenuItem: id});
    }

    render() {

        return (
            <div id="DnDSideMenu" className={this.props.theme}>
                <DnDMenuItem displayText={"Home"}
                             target={"/"}
                             children={[]}
                             theme={this.props.theme}
                             activator={this.activeHandler}
                             id={menuItemTypes.HOME}
                             activeMenuItem={this.state.activeMenuItem}/>
                <DnDMenuItem displayText={"Character Sheets"}
                             target={"/charsheet"}
                             children={[]}
                             theme={this.props.theme}
                             activator={this.activeHandler}
                             id={menuItemTypes.CHARSHEETS}
                             activeMenuItem={this.state.activeMenuItem}/>
                <DnDMenuItem displayText={"Campaign Notes"}
                             target={"/campnotes"}
                             children={[]}
                             theme={this.props.theme}
                             activator={this.activeHandler}
                             id={menuItemTypes.CAMPNOTES}
                             activeMenuItem={this.state.activeMenuItem}/>
                <DnDMenuItem displayText={"Browse The SRD"}
                             target={"/srd"}
                             children={['Spellcasting',
                                 'Characters',
                                 'Classes',
                                 'Combat',
                                 'Equipment',
                                 'Mechanics',
                                 'Monsters',
                                 'NPCs',
                                 'Playing',
                                 'Legal Info']}
                             theme={this.props.theme}
                             activator={this.activeHandler}
                             id={menuItemTypes.SRD}
                             activeMenuItem={this.state.activeMenuItem}/>
                <DnDMenuItem displayText={"Encounters"}
                             target={"/encounters"}
                             children={[]}
                             theme={this.props.theme}
                             activator={this.activeHandler}
                             id={menuItemTypes.ENCOUNTERS}
                             activeMenuItem={this.state.activeMenuItem}/>

            </div>
        );
    }
}

export default DnDSideMenu;

