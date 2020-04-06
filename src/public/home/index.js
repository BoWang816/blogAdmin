/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';

export default class Home extends Component {

	render() {
		return (
			<div style={{ height: 'calc(100vh - 100px)' }}>
				<img alt="welcome" style={{ width: '100%', height: '100%' }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586094122708&di=0ba3daa85f97ef9886a94dcce19de709&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn13%2F720%2Fw1920h1200%2F20180818%2F9ccb-hhvciix2574150.jpg" />
			</div>
        );
    };
}
