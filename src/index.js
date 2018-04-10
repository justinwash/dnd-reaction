// Import main view components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import App from './Components/App'
import DBController from './Components/DBController.js';

const store = createStore(()=>{})

// Connect to and test database
const db = new DBController();
db.checkSRDComplete();

/* Test connection to dnDB
dnDB.find({}, function (err, docs) {
    console.log(docs + "from index.js");
}); */

// Render App
render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
