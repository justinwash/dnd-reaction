import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDCombat extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Combat</div>
                <SRDSection section={'combat'}/>
            </div>
        )
    }
}

export default SRDCombat;