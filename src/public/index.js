/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component, Fragment } from 'react';
import Menu from "./menuComponent";
import Content from "./contentComponent";

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <Content/>
            </Fragment>
        );
    };
}
