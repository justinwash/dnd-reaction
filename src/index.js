import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import App from './Components/App'
// import React Router stuff
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>),
    document.getElementById('root'));
registerServiceWorker();
