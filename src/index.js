// Import main view components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import App from './Components/App'
import 'nedb';

// Connect to Electron Remote
const remote = window.require('electron').remote;
// Connect to dnDB
var dnDB = remote.getGlobal('dnDB');
// Test connection to dnDB
dnDB.find({}, function (err, docs) {
    console.log(docs + "from index.js");
});

// Render App
ReactDOM.render((
        <BrowserRouter>
            <App datastore={dnDB}/>
        </BrowserRouter>),
    document.getElementById('root'));
registerServiceWorker();
