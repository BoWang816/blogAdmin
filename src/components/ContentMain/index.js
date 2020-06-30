/**
 * index.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import { MENUS } from '@constants';
import PrivateRoute from '../PrivateRouter';

@withRouter
class ContentMain extends Component {
    render() {
        // 路由统一管理
        const children = [];
        MENUS.forEach(item => {
            if (item.subs && item.subs.length) {
                item.subs.forEach(son => {
                    children.push(<PrivateRoute key={son.key} exact path={son.key} component={son.component} />);
                });
            }
            children.push(<PrivateRoute key={item.key} exact path={item.key} component={item.component} />);
        });
        return (
            <section style={{ padding: 20, position: 'relative' }}>
                <Switch>
                    {children}
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </section>
        );
    }
}
export default ContentMain;
