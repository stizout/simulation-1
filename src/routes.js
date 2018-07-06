import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShowPuppies from './showPuppies';
import App from './App';

export default (
    <Switch>
        <Route path="/puppies" exact component={App}/>
        <Route path='/puppies/showPuppies' component={ShowPuppies}/>
    </Switch>
)