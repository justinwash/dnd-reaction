// Import main view components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import App from './Components/App'
import DBController from './Components/DBController.js';

// Connect to and test database
const db = new DBController();
db.checkSRDComplete();

/* Test connection to dnDB
dnDB.find({}, function (err, docs) {
    console.log(docs + "from index.js");
}); */

// Render App
ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>),
    document.getElementById('root'));
registerServiceWorker();
