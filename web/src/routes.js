import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateLetter from './pages/CreateLetter';
import List from './pages/List';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" exact component={CreateLetter} />
                <Route path="/list" exact component={List} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;