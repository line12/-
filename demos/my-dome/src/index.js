import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
