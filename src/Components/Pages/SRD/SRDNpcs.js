import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDNpcs extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>NPCs</div>
                <SRDSection section={'npcs'}/>
            </div>
        )
    }
}

export default SRDNpcs;