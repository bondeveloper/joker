import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import '../../shared/styles';

import Header from '../header/header';
import Home from '../pages/home/home';
import Test from '../pages/test/test';
import client from '../../shared/apollo-client';

const App: React.FC = () => {
    console.log(client);
    return (
       <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route path='/test'><Test /></Route>
                    <Route path='/'><Home /></Route>
                </Switch>
            </Router>
       </ApolloProvider>
    );
};

export default App;