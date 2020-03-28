/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from './store'
import Main from './public';

ReactDOM.render(
	<Router>
		<ConfigProvider locale={zh_CN}>
			<Provider {...store}>
				<Main/>
			</Provider>
		</ConfigProvider>
	</Router>,
	document.querySelector('#root')
);
