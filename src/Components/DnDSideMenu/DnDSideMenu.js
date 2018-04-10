import React, {Component} from 'react';
import DnDMenuItem from './DnDMenuItem';
import '../../Stylesheets/DnDBox/DnDSideMenu_Dark.css';
import '../../Stylesheets/DnDBox/DnDSideMenu_Light.css';
const menuItemTypes = {
    HOME: 0
}

class DnDSideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeMenuItem: 0
        };
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
                             activeHandler={() => this.activeHandler()}
                             id={menuItemTypes.HOME}
                             buttonActive={this.state.activeMenuItem}/>
                <DnDMenuItem displayText={"Character Sheets"}
                             target={"/charsheet"}
                             children={[]}
                             theme={this.props.theme}/>
                <DnDMenuItem displayText={"Campaign Notes"}
                             target={"/campnotes"}
                             children={[]}
                             theme={this.props.theme}/>
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
                             theme={this.props.theme}/>
                <DnDMenuItem displayText={"Encounters"}
                             target={"/encounters"}
                             children={[]}
                             theme={this.props.theme}/>

            </div>
        );
    }
}

export default DnDSideMenu;

