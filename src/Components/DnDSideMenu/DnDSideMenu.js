import React, {Component} from 'react';
import DnDMenuItem from './DnDMenuItem';
import '../../Stylesheets/DnDBox/DnDSideMenu_Dark.css';
import '../../Stylesheets/DnDBox/DnDSideMenu_Light.css';

class DnDSideMenu extends Component {
    render() {
        return (
            <div id="DnDSideMenu" className={this.props.theme}>
                <DnDMenuItem displayText={"Character Sheets"}
                             target={"/charsheets"}
                             children={[]}/>
                <DnDMenuItem displayText={"Campaign Notes"}
                             target={"/campnotes"}
                             children={[]}/>
                <DnDMenuItem displayText={"Browse The SRD"}
                             target={"doNothing"}
                             children={['Classes', 'Races', 'Spells', 'Equipment']}/>
                <DnDMenuItem displayText={"Encounters"}
                             target={"/encounters"}
                             children={[]}/>

            </div>
        );
    }
}

export default DnDSideMenu;

