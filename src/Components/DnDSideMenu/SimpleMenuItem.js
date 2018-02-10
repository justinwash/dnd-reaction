import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SimpleMenuItem extends Component {

    render() {
        return (
            <Link to={this.props.target}>
                <div id={this.props.menuItemType} className={this.props.visibility}>
                    {this.props.displayText}
                </div>
            </Link>
        );
    }
}

export default SimpleMenuItem;