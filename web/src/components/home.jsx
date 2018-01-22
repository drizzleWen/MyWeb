import React, {
	Component
} from 'react';

//引入头部组件
import HeaderComponent from './componentDetails/header.jsx';


class HomeComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<HeaderComponent />
			</div>
		)
	}
}


export default HomeComponent;