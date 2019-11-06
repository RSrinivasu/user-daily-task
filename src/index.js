import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { store , persistor } from './redux/middleware'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react';
import history from './redux/history'

import client from 'socket.io-client'
window.socket = client(process.env.REACT_APP_SOCKET_END_POINT);

window.socket.on('connect', function(){
    console.log("client connection request")
});




ReactDOM.render(
<Provider store= {store}>
    <PersistGate loading={null} persistor= {persistor}>
        <Router history={history}>
            <App />
        </Router>
    </PersistGate>
</Provider>
, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
