/**
 * webpack-dev.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack-common.config');
const serverConfig = require('./server-config');

const { mockServer } = require('./src/common/utils/mockConfig');

const serverMock =  serverConfig.useMock ? {
	before: app => mockServer(path.resolve(__dirname, './mock'), app, { apiPrefix: serverConfig.apiPrefix }),
} : {
	proxy: {
		[serverConfig.apiPrefix]: {
			target: `${serverConfig.apiUri}`,
			secure: false,
			changeOrigin: true
		}
	}
};

const devConfig = {
	mode: 'development',

	devtool: "cheap-module-eval-source-map",

	devServer: {
		contentBase: path.resolve(__dirname, 'admin'),
		port: serverConfig.serverPort, // 默认8080
		quiet: false, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台，这也意味着来自 webpack 的错误或警告在控制台不可见
		inline: true, // 内联模式开启，false为iframe模式
		overlay: true, // 当存在编译错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。
		clientLogLevel: "info", // 日志等级，默认info，可能的值有 none, error, warning 或者 info（默认值），当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息
		compress: true, // 一切服务都启用gzip 压缩
		hot: true, // 开启热更新
		...serverMock
	},

	plugins: [
		// 热加载
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = merge(devConfig, commonConfig(true));

