import React, {Component} from 'react';
import { TextField } from 'office-ui-fabric-react';

class AbilityRow extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        //this is stupid lazy and doesnt cover all cases. fix it.
        var profBonus = 0;
        if (this.props.value >= 8)
            profBonus = -1;
        if (this.props.value >= 10)
            profBonus = 0;
        if (this.props.value >= 12)
            profBonus = 1;
        if (this.props.value >= 14)
            profBonus = 2;
        if (this.props.value >= 16)
            profBonus = 3;

        return(
            <div id="character-ability-row">
                <div id="ability-label">{this.props.name}</div>
                <TextField placeholder={this.props.value} />
                <div id="proficiency-bonus">
                    Bonus: {profBonus}
                </div>
            </div>
        )
    }
}

export default AbilityRow;