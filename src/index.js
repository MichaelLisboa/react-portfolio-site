import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.jsx';
import './css/Main.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render () {
        return (
            <Router />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
