import React from 'react';
import {Route} from 'react-router';

import App from './App';
import DnDHomePage from './Pages/DnDHomePage';

export default (
    <Route path="/" component={App}>
        <Route component={DnDHomePage}/>
    </Route>
);
