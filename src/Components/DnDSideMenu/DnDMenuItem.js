import React, {Component} from 'react';

class DnDMenuItem extends Component {
    constructor(props) {
        super(props);
        this.CreateChildren = this.CreateChildren.bind(this);
        this.GoToTarget = this.GoToTarget.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
    }

    CreateChildren(props) {
        var children = this.props.children;
        var childMenuItems = children.map((child) =>
            <div id="MainMenuChildItem">
                child: {child}
            </div>
        );
        return (
            <div id="MenuItemChildren">
                {childMenuItems}
            </div>
        );
    }

    GoToTarget() {
        // go to the right page
    }

    ClickHandler() {
        this.GoToTarget();
        // OR open/close child drawer
    }

    render() {
        return (
            <div id="MainMenuItem" onMouseDown={this.ClickHandler}>
                {this.props.displayText}
                <this.CreateChildren/>
            </div>
        );
    }
}

export default DnDMenuItem;
