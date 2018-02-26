import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDCharacters extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Races</div>
                <SRDSection section={'races'}/>
                <div id='SRDPageTitle'>Feats</div>
                <SRDSection section={'feats'}/>
                <div id='SRDPageTitle'>Beyond 1st Level</div>
                <SRDSection section={'beyond1st'}/>
            </div>
        )
    }
}

export default SRDCharacters;