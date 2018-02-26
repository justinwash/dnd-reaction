import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDMechanics extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Mechanics</div>
                <SRDSection section={'mechanics'}/>
                <div id='SRDPageTitle'>Conditions</div>
                <SRDSection section={'conditions'}/>
            </div>
        )
    }
}

export default SRDMechanics;