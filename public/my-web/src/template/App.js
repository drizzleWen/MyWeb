import React, { Component } from 'react';
import {Form,Icon,Input,Button,Checkbox} from 'antd';
import '../css/login.css';
const FormItem=Form.Item;

class NormalLoginForm extends Component {
  render() {
      const {getFieldDecorator} = this.props.form;
    return (
        <Form className="login-form">
            <FormItem>
                {
                    getFieldDecorator('userName',{
                        rules:[{required:true,message:'please input your username!'}]
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize:13}}/>} placeholder="Username"/>
                    )
                }

            </FormItem>
            <FormItem>
                {
                    getFieldDecorator('password',{
                        rules:[{
                            required:true,message:'please input your password!'
                        }]
                    })(<Input prefix={<Icon type="lock" style={{fontSize:13}}/>} type="password" placeholder="Password"/>)
                }
            </FormItem>
            <FormItem>
                {
                    getFieldDecorator('remember',{
                        valuePropName:'checked',
                        initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)
                }
                <a href="" className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login in
                </Button>
                Or <a href="">register now!</a>
            </FormItem>
        </Form>
    );
  }
}

const App = Form.create()(NormalLoginForm);

export default App;
