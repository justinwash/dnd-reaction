import React, {Component} from 'react';
import DnDMenuItem from './DnDMenuItem'

class DnDSideMenu extends Component {
    render() {
        return (
            <div id="DnDSideMenu">
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

