import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import Chat from './Chat';
import App from './App';
import DetailPage from './DetailPage';
import Kiruba from './test/Kiruba';
import Reducers from './Reducers';
import LoginPage from './LoginPage';

const store = createStore(Reducers);

ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA




serviceWorker.unregister();
