import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Container from 'react-bootstrap/Container';

import '../../shared/styles';

import Header from '../header/header';
import Home from '../pages/home/home';
import Test from '../pages/test/test';
import client from '../../shared/apollo-client';
import { store } from '../../store/store';


const App: React.FC = () => {
    return (
       <ApolloProvider client={client} >
            <Provider store={store}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/test'><Test /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </Router>
            </Provider>
       </ApolloProvider>
    );
};

export default App;