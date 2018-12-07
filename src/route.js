// SETUP
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// IMPORT PAGES
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'



// ROUTES
export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Wizard} path='/wizard' />
    </Switch>
)