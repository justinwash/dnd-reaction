import React, { Component } from 'react';
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
        var theme;
        if (this.props.selectedTheme === 'dark') {
            theme = 'dark';
        }
        if (this.props.selectedTheme === 'light') {
            theme = 'light';
        }

        return (
                <div id="title-bar" className={theme} >
                    <div id="title" className={theme} onMouseDown={this.props.themeToggle}>{this.props.title}</div>

                     <div id="title-bar-btns" className={theme}>
                         <button onMouseDown={this.props.themeToggle}>💡</button>
                         <button id="min-btn" className={theme}>-</button>
                         <button id="max-btn" className={theme}>+</button>
                         <button id="close-btn" className={theme}>x</button>
                    </div>
                </div>
        );
    }
}

export default TitleBar;