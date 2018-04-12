import React, {Component} from 'react';
import {Persona, PersonaSize} from 'office-ui-fabric-react/lib/Persona';

class CharPersona extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        var c = this.props.character;
        var style = ".ms-Persona-primaryText {color: white;}";
        if (this.props.theme == "dark")
            style = ".ms-Persona-primaryText {color: white;}";
        else style = ".ms-Persona-primaryText {color: black;}";

        return (
            <div id="character-persona">
                <style>
                    {style}
                </style>

                <Persona imageInitials={c.initials}
                         primaryText={c.name}
                         secondaryText={c.race + " " + c.class}
                         tertiaryText={"Level: " + c.level}
                         optionalText={"XP: " + c.xp}
                         size={ PersonaSize.size100 } />
            </div>
        )
    }
}

export default CharPersona;