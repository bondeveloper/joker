import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../../shared/styles';

import Header from '../header/header';
import Home from '../pages/home/home';
import Test from '../pages/test/test';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/test'><Test /></Route>
                <Route path='/'><Home /></Route>
            </Switch>
        </Router>
    );
};

export default App;