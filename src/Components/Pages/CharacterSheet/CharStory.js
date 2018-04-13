import React, {Component} from 'react';
import {Fabric} from 'office-ui-fabric-react';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';
import DnDTitle from '../../DnDTitle';

class CharStory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var c = this.props.character;

        return (
            <div id="character-story">
                <DnDTitle Title="Alignment & Backstory"/>
                <MessageBar
                    isMultiline={ false }
                    onDismiss={ console.log('test') }
                    truncated={ true }
                    overflowButtonAriaLabel='Overflow'>
                        {c.alignment}: {c.backStory}
                </MessageBar>
            </div>
        );
    }
}

export default CharStory;