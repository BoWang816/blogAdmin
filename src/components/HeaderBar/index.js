/**
 * index.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export default class HeaderBar extends Component {

	toggle = () => {
		this.props.onToggle();
	};

    render() {
		const { collapsed } = this.props;

		return (
            <span>
				{collapsed ? <MenuUnfoldOutlined onClick={this.toggle}/> : <MenuFoldOutlined  onClick={this.toggle}/>}
            </span>
        );
    };
}
