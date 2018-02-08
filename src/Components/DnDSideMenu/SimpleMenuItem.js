import React, {Component} from 'react';

class SimpleMenuItem extends Component {

    render() {
        return (
            <div id={this.props.menuItemType} className={this.props.visibility}>
                {this.props.displayText}
            </div>
        );
    }
}

export default SimpleMenuItem;