import React from 'react';
import ReactDOM from 'react-dom';
import HeaderApp from './app.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

ReactDOM.render(<HeaderApp />, document.getElementById('HEADER'));

window.HeaderApp = HeaderApp;
