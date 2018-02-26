import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDPlaying extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Playing D&D 5e</div>
                <SRDSection section={'playing'}/>
            </div>
        )
    }
}

export default SRDPlaying;