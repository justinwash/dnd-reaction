import React, {Component} from 'react';
// Connect to dnDB
import Datastore from 'nedb';

var dnDB = new Datastore({filename: 'dnDB.db', autoload: true});

class SRDLegal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this.helpMe = this.helpMe.bind(this);
        this.querySRDSection = this.querySRDSection.bind(this);
        this.fn = this.fn.bind(this);
    }

    async componentDidMount() {
        this.helpMe();
    }

    helpMe() {
        this.querySRDSection('legal');
    }

    querySRDSection(section) {
        var query = {};
        query[section] = {$exists: true};

        dnDB.findOne(query, this.fn);

    }

    fn(err, data) {
        var stringdata = data.toString();
        if (err) return console.log(err);
        if (data === undefined) return console.log('undefined');
        if (data.length > 0) {
            this.setState({
                content: stringdata
            });
        }
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.content} legal stuff
            </div>
        )
    }

}

export default SRDLegal;