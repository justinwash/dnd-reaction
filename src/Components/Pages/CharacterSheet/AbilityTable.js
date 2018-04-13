import React, {Component} from 'react';
import AbilityRow from './AbilityRow';
import DnDTitle from '../../DnDTitle';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';

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
                <MessageBar
                    isMultiline={ true }
                    onDismiss={ console.log('test') }
                    truncated={ true }
                    overflowButtonAriaLabel='Overflow'>

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
                </MessageBar>
            </div>
        )
    }
}

export default AbilityTable;