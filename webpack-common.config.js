/**
 * webpack-common.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = () => {
	return {
		module: {
			// 如果一些第三方模块没有AMD/CommonJS规范版本，可以使用 noParse 来标识这个模块，但是webpack不进行转化和解析
			// noParse: [],
			rules: [
				{
					test: /\.(jsx|js)?$/,
					// thread-loader：放置在这个 loader 之后的 loader 就会在一个单独的 worker 池中运行
					use: ['thread-loader', 'cache-loader', 'babel-loader?cacheDirectory=true', 'eslint-loader'],
					exclude: resolve('node_modules'),
				},
				{
					// css loader配置
					test: /\.(le|c)ss/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: process.env.NODE_ENV === 'development', // 仅dev环境启用HMR功能，Hot Module Replacement，模块热更新
								reloadAll: true, // 如果模块热更新不起作用，重新加载全部样式
								esModule: true,
							},
						},
						{
							loader: 'css-loader',
							options: {
								url: true, // 启用/禁用 url() 处理
								sourceMap: false, // 启用/禁用 Sourcemaps,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								// 使用插件
								plugins: loader => [
									require('postcss-import')({ root: loader.resourcePath }), // 支持@import 引入css
									require('autoprefixer')(), // CSS浏览器兼容
									require('cssnano')(), // 压缩css
								],
							},
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true, // 启用/禁用 Sourcemaps
							},
						},
					],
				},
				{
					// 图片、字体等处理
					test: /\.(png|jpg|jpeg|gif|webp|svg|eot|ttf|woff|woff2)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10240, // 最大10K,
								esModule: false, // 文件加载器生成使用ES模块语法的JS模块
								name: '[name]_[hash:6].[ext]', // 打包出的文件名称为"文件名_6位哈希值"
								outputPath: 'assets', // 文件过多时输出到名称为assets的文件夹中
							},
						},
					],
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'svg-sprite-loader',
							options: {},
						},
						'svg-transform-loader',
						'svgo-loader',
					],
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'fonts/[name].[ext]',
								outputPath: 'static',
							},
						},
					],
				},
			],
		},

		entry: {
			index: './src/index.js',
		},

		output: {
			path: path.resolve(__dirname, 'admin'),
			filename: '[name].js',
			chunkFilename: '[name]_[hash:6].js'
		},

		resolve: {
			alias: {
				'@components': resolve('src/components'),
				'@constants': resolve('src/common/constants'),
				'@assets': resolve('src/assets'),
				'@utils': resolve('src/common/utils'),
				'@http': resolve('src/common/http'),
			},
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [resolve(__dirname, './src'), 'node_modules'],
		},
		externals: [
			{
				moment: 'moment',
				react: 'React',
				'react-dom': 'ReactDOM',
				'react-router': 'ReactRouter',
				'react-router-dom': 'ReactRouterDOM',
				mobx: 'mobx',
				'mobx-react': 'mobxReact',
				axios: 'axios',
				antd: 'antd',
				'@antv/data-set': 'DataSet',
				bizcharts: 'BizCharts',
			},
		],

		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'admin')],
			}),

			new HtmlWebpackPlugin({
				title: 'blog admin',
				template: './src/public/index.html',
				// 打包出来的文件名称
				filename: 'index.html',
				// 是否加上hash，默认false
				hash: false,
				// 最小化输出方式
				minify: {
					removeAttributeQuotes: false, // 是否删除属性的双引号
					collapseWhitespace: true, // 是否折叠空白
				},
			}),

			new HappyPack({
				id: 'babel',
				verbose: true,
				loaders: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['env', 'react'],
						},
					},
				],
			}),

			// 抽离css
			new MiniCssExtractPlugin({
				ignoreOrder: true,
				filename: '[name].css',
				chunkFilename: '[name]_[hash:6].css',
			}),

			// 打包进度
			new webpack.ProgressPlugin(),

			// moment插件优化打包
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
		],
	};
};
