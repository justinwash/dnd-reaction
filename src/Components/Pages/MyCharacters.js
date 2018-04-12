import React, {Component} from 'react';
import DnDTitle from '../DnDTitle';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react';


class MyCharacters extends Component {
    render() {
        return (
            <div id="characters-page">
                <DnDTitle Title={"My Characters"}/>
                <br/>
                This isn't quite finished...
                <br/>
                <br/>
                <DefaultButton
                    text='Sample Character Sheet'
                    primary={ true }
                    href='/charsheettest' />
            </div>
        )
    }
}

export default MyCharacters;