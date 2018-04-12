import React, {Component} from 'react';
import { TextField } from 'office-ui-fabric-react';

class VitalsRow extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="character-vitals-row">
                <div id="vitals-label">{this.props.name}</div>
                <TextField placeholder={this.props.value} />
            </div>
        )
    }
}

export default VitalsRow;