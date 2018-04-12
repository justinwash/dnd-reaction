import React, {Component} from 'react';
import AbilityRow from './AbilityRow';
import DnDTitle from '../../DnDTitle';

class AbilityTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var c = this.props.character;

        return (
            <div id="character-ability-table">
                <DnDTitle Title="Abilities" />
                <AbilityRow name="Strength"
                            value={c.strength} />
                <AbilityRow name="Dexterity"
                            value={c.dexterity} />
                <AbilityRow name="Constitution"
                            value={c.constitution} />
                <AbilityRow name="Intelligence"
                            value={c.intelligence} />
                <AbilityRow name="Wisdom"
                            value={c.wisdom} />
                <AbilityRow name="Charisma"
                            value={c.charisma} />
            </div>
        )
    }
}

export default AbilityTable;