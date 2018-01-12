import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/login.css';
import './static/js/rem';
import App from './template/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
