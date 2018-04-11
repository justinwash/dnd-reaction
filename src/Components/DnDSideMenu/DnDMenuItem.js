import React, {Component} from 'react';
import SimpleMenuItem from './SimpleMenuItem';
import {Link} from 'react-router-dom'

class DnDMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisibility: "hidechildren",
            activeState: "MainMenuItem"
        };
        this.CreateChildren = this.CreateChildren.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
        this.ToggleChildren = this.ToggleChildren.bind(this);
        this.Activate = this.Activate.bind(this);
    }

    CreateChildren() {
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
        if (this.props.children == []) {
            return;
        }
        if (this.state.childVisibility === "hidechildren") {
            this.setState({childVisibility: "showchildren"});
        }
        if (this.state.childVisibility === "showchildren") {
            this.setState({childVisibility: "hidechildren"});
        }
    }

    ClickHandler() {
        this.ToggleChildren();
        this.Activate();
    }

    Activate() {
        this.props.activator(this.props.id);
    }

    render() {
        var highlightId = "MainMenuItem";
        if(this.props.activeMenuItem === this.props.id) {
            highlightId = "MainMenuItem-active";
        }
        else highlightId = "MainMenuItem";

        return (
            <div id={highlightId} className={[this.props.theme,
                this.state.childVisibility].join(' ')}>
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
