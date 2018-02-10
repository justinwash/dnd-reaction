import React, {Component} from 'react';
import SimpleMenuItem from './SimpleMenuItem';
import {Link} from 'react-router-dom'

class DnDMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisibility: "hide"
        };
        this.CreateChildren = this.CreateChildren.bind(this);
        this.GoToTarget = this.GoToTarget.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
        this.ToggleChildren = this.ToggleChildren.bind(this);
    }

    CreateChildren(props) {
        var children = this.props.children;
        var theme = this.props.theme;
        var childMenuItems = children.map((child) =>
            <SimpleMenuItem clickHandler={this.ClickHandler}
                            menuItemType={"ChildMenuItem_" + theme}
                            displayText={child}
                            visibility={this.state.childVisibility}
                            target={child}/>
        );
        return (
            <div id="MenuItemChildren">
                {childMenuItems}
            </div>
        );
    }

    ToggleChildren() {
        if (this.state.childVisibility == "hide") {
            this.setState({childVisibility: "show"});
        }
        if (this.state.childVisibility == "show") {
            this.setState({childVisibility: "hide"});
        }
    }

    GoToTarget() {
        // go to the right page
    }

    ClickHandler() {
        this.GoToTarget();
        this.ToggleChildren();
        // OR open/close child drawer
    }

    render() {
        return (
            <div id="MainMenuItem" className={this.props.theme}>
                <Link to={this.props.target}>
                    <div id="ClickBox" onMouseDown={this.ClickHandler}>
                        {this.props.displayText}
                    </div>
                </Link>
                <this.CreateChildren/>
            </div>
        );
    }
}

export default DnDMenuItem;
