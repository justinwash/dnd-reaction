import React, {Component} from 'react';
import CombatRow from './CombatRow';
import DnDTitle from '../../DnDTitle';
import {MessageBar} from 'office-ui-fabric-react';

class CombatTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var c = this.props.character;

        return (
            <div id="character-combat-table">
                <DnDTitle Title="Combat" />
                <MessageBar
                    isMultiline={ true }
                    onDismiss={ console.log('test') }
                    truncated={ true }
                    overflowButtonAriaLabel='Overflow'>

                <CombatRow name="Hit Dice"
                           value={c.hitDice} />
                <CombatRow name="Initiative"
                           value={c.initiative} />
                <CombatRow name="Speed"
                           value={c.speed + " feet"} />
                <CombatRow name="Vision"
                           value={c.vision + " feet"} />
                </MessageBar>
            </div>
        )
    }
}

export default CombatTable;