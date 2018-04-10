import React, {Component} from 'react';
import SimpleMenuItem from './SimpleMenuItem';
import {Link} from 'react-router-dom'

class DnDMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisibility: "hidechildren",
            activeId: "MainMenuItem"
        };
        this.CreateChildren = this.CreateChildren.bind(this);
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
        if (this.state.childVisibility === "hidechildren") {
            this.setState({childVisibility: "showchildren"});
        }
        if (this.state.childVisibility === "showchildren") {
            this.setState({childVisibility: "hidechildren"});
        }

    }

    ClickHandler() {
        if (this.props.children !== "") {
            this.ToggleChildren();
            // OR open/close child drawer
        }
        this.props.activeHandler(this.props.id);
        if(this.props.buttonActive === this.props.id) {
            this.setState({ activeId: "MainMenuItem-active" });
        }
        else this.setState({ activeId: "MainMenuItem"});
    }


    render() {
        return (
            <div id={this.state.activeId} className={[this.props.theme,
                this.state.childVisibility].join(' ')}>
                <Link to={this.props.target}>
                    <div id="ClickBox" onMouseDown={this.props.activeHandler(this.props.id)}>
                        {this.props.displayText}
                    </div>
                </Link>
                <this.CreateChildren/>
            </div>
        );
    }
}

export default DnDMenuItem;
