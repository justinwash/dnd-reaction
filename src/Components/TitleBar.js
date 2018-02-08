import React, {Component} from 'react';
import '../Stylesheets/TitleBar/TitleBar_Dark.css';
import '../Stylesheets/TitleBar/TitleBar_Light.css';

const remote = window.require('electron').remote;

class TitleBar extends Component {
    componentDidMount() {
            document.getElementById("min-btn").addEventListener("click", function (e) {
                const window = remote.getCurrentWindow();
                window.minimize();
            });

            document.getElementById("max-btn").addEventListener("click", function (e) {
                const window = remote.getCurrentWindow();
                if (!window.isMaximized()) {
                    window.maximize();
                } else {
                    window.unmaximize();
                }
            });

            document.getElementById("close-btn").addEventListener("click", function (e) {
                const window = remote.getCurrentWindow();
                window.close();
            });
        };

    render () {
        return (
            <div id="title-bar" className={this.props.theme}>
                <div id="title" className={this.props.theme}>{this.props.title}</div>

                <div id="title-bar-btns" className={this.props.theme}>
                         <button onMouseDown={this.props.themeToggle}>💡</button>
                    <button id="min-btn" className={this.props.theme}>-</button>
                    <button id="max-btn" className={this.props.theme}>+</button>
                    <button id="close-btn" className={this.props.theme}>x</button>
                    </div>
                </div>
        );
    }
}

export default TitleBar;