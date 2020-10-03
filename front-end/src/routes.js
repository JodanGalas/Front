import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './app/pages/home';

import NotFound from './app/pages/notFound'
import Connection from './app/pages/connection';
import About from './app/pages/about';
import DeParaShp from './app/pages/deparashp';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/connection" component={Connection} />
            <Route path="/about" component={About} />
            <Route path="/deparashp" component={DeParaShp} />
           
            <Route path='*' component={NotFound} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;