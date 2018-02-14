import React, {Component} from 'react';
import DnDMenuItem from './DnDMenuItem';
import '../../Stylesheets/DnDBox/DnDSideMenu_Dark.css';
import '../../Stylesheets/DnDBox/DnDSideMenu_Light.css';

class DnDSideMenu extends Component {
    render() {
        return (
            <div id="DnDSideMenu" className={this.props.theme}>
                <DnDMenuItem displayText={"Home"}
                             target={"/"}
                             children={[]}
                             theme={this.props.theme}/>
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
                             children={['Classes', 'Races', 'Spells', 'Equipment']}
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

