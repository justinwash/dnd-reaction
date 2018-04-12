import React, {Component} from 'react';
import { TextField } from 'office-ui-fabric-react';

class VitalsRow extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="character-combat-row">
                <div id="combat-label">{this.props.name}</div>
                <TextField placeholder={this.props.value} />
            </div>
        )
    }
}

export default VitalsRow;