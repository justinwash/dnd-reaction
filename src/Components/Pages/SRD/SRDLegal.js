import React, {Component} from 'react';
// Connect to dnDB
const remote = window.require('electron').remote;
const dbapi = require('../../../db-api.js');

class SRDLegal extends Component {
    render() {
        return (
            <div>
                {dbapi.checkSRDComplete()}
            </div>
        )
    }
}

export default SRDLegal;