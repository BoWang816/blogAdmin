/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRouter';
import '@assets/css/common.less';
import Login from './login';
import Index from './main';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<PrivateRoute path="/" component={Index} />
			</Switch>
		);
	}
}
