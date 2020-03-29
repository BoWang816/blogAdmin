/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import './style.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

@withRouter
@inject('appStore')

export default class Login extends Component {

	onFinish = values => {
		console.log('Success:', values);
		// const users = this.props.appStore.users;
		// const result = users.find(item => item.username === values.username);

		this.props.appStore.toggleLogin(true, { username: values.username });

		const { from } = this.props.location.state || { from: { pathname: '/' } };
		this.props.history.push(from);
	};

    render() {
        return (
			<section className="login-area">
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={this.onFinish}>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your Username!' }]}>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</section>
        );
    };
}
