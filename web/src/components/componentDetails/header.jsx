import React , {Component} from 'react';

import {Layout,Icon} from 'antd';
const {Header,Footer,Sider,Content} =Layout;


const styles={
	addressIcon:{
		color:"#aaacae"
	},
	addressWord:{
		color:"#aaacae"
	}
}

class HeaderComponent extends Component {
	constructor(props){
		super(props)
		this.state={
			loginToken:true
		}
	}


	render(){
		return (
			<div className="header">
				<Layout>
					<Header>
						<i className="iconfont icon-zhiyuandidian5" style={styles.addressIcon}></i>
						<span style={styles.addressWord}>当前所在城市:</span>
						<span style={styles.addressWord}>上海</span>
						<Icon type="down" style={styles.addressIcon}/>
						<div>
							<span>您好！欢迎来到猫舍</span>
						{

							this.state.loginToken?<span>hello</span>:<span>222</span>
						}
						<span>全国统一服务热线：400-333-4444</span>
						</div>						
					</Header>
				</Layout>				
			</div>
			)
	}
}


export default HeaderComponent;