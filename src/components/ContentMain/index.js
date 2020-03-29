/**
 * index.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import LoadProgress from '@utils/loadProgress';
import PrivateRoute from '../PrivateRouter';

const Home = LoadProgress(()=>import('../../public/home'));

@withRouter
export default class ContentMain extends Component {

    render() {
        return (
            <section style={{ padding: 16, position: 'relative' }}>
				<Switch>
					<PrivateRoute exact path="/home" component={Home}/>
					<Redirect exact from="/" to="/home"/>
				</Switch>
			</section>
        );
    };
}
