/**
 * index.js
 * @author wangbo
 * @since 2020/4/12
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';

export default class index extends Component {
	render() {
		return (
			<BackTop visibilityHeight={200} style={{ right: 50 }}>
				<ArrowUpOutlined style={{ fontSize: '40px', color: '#CCC' }} />
			</BackTop>
		);
	}
}
