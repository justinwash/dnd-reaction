import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDSpellcasting extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Spellcasting</div>
                <SRDSection section={'spellcasting'}/>
            </div>
        )
    }
}

export default SRDSpellcasting;