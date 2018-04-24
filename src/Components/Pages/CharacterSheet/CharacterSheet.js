import React, {Component} from 'react';
import CharPersona from './CharPersona';
import CharStory from './CharStory';
import AbilityTable from './AbilityTable';
import VitalsTable from './VitalsTable';
import CombatTable from './CombatTable';

import '../../../Stylesheets/Pages/CharacterSheet.css';

const exampleCharacter = {
    initials: 'AG',
    name: 'Aeron Gwinne',
    race: 'Snakeperson',
    class: 'Monk',
    level: '2',
    xp: '350',
    alignment: 'Neutral Good',
    backStory: 'Has a backstory, and I\'m sure it\'s extremely exciting and dramatic, ' +
    'but this is only here to test this component, so it doesn\'t really matter what ' +
    'it would have been.',
    ac: '13',
    maxHP: '16',
    tempHP: '16',
    curHP: '11',
    hitDice: '1d6',
    initiative: '+1',
    speed: '15',
    vision: '30',
    strength: '10',
    dexterity: '11',
    constitution: '12',
    intelligence: '8',
    wisdom: '9',
    charisma: '10'
};

class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="charactersheet">
                <CharPersona character={exampleCharacter}
                             theme={this.props.theme}/>
                <CharStory character={exampleCharacter}/>
                <AbilityTable character={exampleCharacter}/>
                <VitalsTable character={exampleCharacter}/>
                <CombatTable character={exampleCharacter}/>
            </div>
        );
    }
}

export default CharacterSheet;