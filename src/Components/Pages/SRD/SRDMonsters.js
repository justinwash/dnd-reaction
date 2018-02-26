import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDMonsters extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Monsters</div>
                <SRDSection section={'monsters'}/>
            </div>
        )
    }
}

export default SRDMonsters;