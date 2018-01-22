import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker.js';

//引入font
import './static/font/iconfont.css';

//全局引用remjs
import rem from './static/common/rem.js';

//引入组件
import HomeComponent from './components/home.jsx';


//引入路由
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';



ReactDOM.render(
	<Router>
		<Route path="/" component={HomeComponent} exact></Route>
	</Router>, document.getElementById('root'));
registerServiceWorker();