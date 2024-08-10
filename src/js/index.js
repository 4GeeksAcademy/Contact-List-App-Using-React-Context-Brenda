import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './store/appContext';
import Home from './views/home';
import ContactList from './views/ContactList';
import CreateContact from './views/CreateContact';
import Layout from './layout';

import '../styles/demo.css';
import '../styles/home.css';
import '../styles/index.css';

ReactDOM.render(
    <AppContextProvider>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contacts" component={ContactList} />
                    <Route path="/create-contact/:id?" component={CreateContact} />
                </Switch>
            </Layout>
        </Router>
    </AppContextProvider>,
    document.getElementById('root')
);
