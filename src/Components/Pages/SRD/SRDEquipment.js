import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDEquipment extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Equipment</div>
                <SRDSection section={'equipment'}/>
                <div id='SRDPageTitle'>Magic Items</div>
                <SRDSection section={'magicitems1'}/>
                <SRDSection section={'magicitems2'}/>
            </div>
        )
    }
}

export default SRDEquipment;