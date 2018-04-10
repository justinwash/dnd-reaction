import React, {Component} from 'react';

class DnDTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="dnd-title">{this.props.Title}</div>
        );
    }
}

export default DnDTitle;