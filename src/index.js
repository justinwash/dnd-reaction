// Import main view components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import App from './Components/App'

// Create/load database
var Datastore = require('nedb'),
    db = new Datastore({filename: '/data/datafile.db', autoload: true});
// Test database
var doc = {
    hello: 'world'
    , n: 5
    , today: new Date()
    , nedbIsAwesome: true
    , notthere: null
    , notToBeSaved: undefined  // Will not be saved
    , fruits: ['apple', 'orange', 'pear']
    , infos: {name: 'nedb'}
};
db.insert(doc, function (err, newDoc) {
    console.log(newDoc);
});

ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>),
    document.getElementById('root'));
registerServiceWorker();
