import React from 'react';
import App from './App';
import DetailPage from './DetailPage';
import { HashRouter, Switch, Route } from "react-router-dom";
import Kiruba from './test/Kiruba';
import Chat from './Chat';
import LoginPage from './LoginPage';


class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route path='/chat' component={Chat} />
           
                    <Route path='/kiruba' component={Kiruba} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;