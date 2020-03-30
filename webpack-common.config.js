/**
 * webpack-common.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VersionPlugin = require('generate-version-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = () => {
	return {
		module: {
			// 如果一些第三方模块没有AMD/CommonJS规范版本，可以使用 noParse 来标识这个模块，但是webpack不进行转化和解析
			// noParse: [],
			rules: [
				{
					enforce: 'pre',
					test: /\.jsx?$/,
					use: 'eslint-loader',
					exclude: resolve('node_modules')
				},
				{
					test: /\.(jsx|js)?$/,
					// thread-loader：放置在这个 loader 之后的 loader 就会在一个单独的 worker 池中运行
					use: ['thread-loader', 'cache-loader', "babel-loader", "eslint-loader"],
					// 不使用cache-loader的时候，可以在babel-loader的options中设置cacheDirectory: true
					include: [path.resolve(__dirname, 'src')],
					exclude: resolve('node_modules')
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
								esModule: true
							}
						},
						{
							loader: 'css-loader',
							options: {
								url: true, // 启用/禁用 url() 处理
								sourceMap: false // 启用/禁用 Sourcemaps,
							}
						}, {
							loader: 'postcss-loader',
							options: {
								// 使用插件
								plugins: (loader) => [
									require('postcss-import')({ root: loader.resourcePath }), // 支持@import 引入css
									require('autoprefixer')(), //CSS浏览器兼容
									require('cssnano')()  //压缩css
								]
							}
						}, {
							loader: 'less-loader',
							options: {
								sourceMap: true // 启用/禁用 Sourcemaps
							}
						}]
				},
				{
					// 图片、字体等处理
					test: /\.(png|jpg|jpeg|gif|webp|svg|eot|ttf|woff|woff2)$/,
					use: [
						{
							loader: "url-loader",
							options: {
								limit: 10240, // 最大10K,
								esModule: false, // 文件加载器生成使用ES模块语法的JS模块
								name: '[name]_[hash:6].[ext]', // 打包出的文件名称为"文件名_6位哈希值"
								outputPath: 'assets' // 文件过多时输出到名称为assets的文件夹中
							}
						}
					]
				}
			]
		},

		entry: { index: './src/index.js' },

		output: {
			path: path.resolve(__dirname, 'admin'),
			filename: '[name]_[hash:6].js',
			publicPath: '/'
		},

		resolve: {
			alias: {
				'@components': resolve('src/components'),
				'@constants': resolve('src/common/constants'),
				'@assets': resolve('src/assets'),
				'@utils': resolve('src/common/utils')
			},
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [resolve(__dirname, './src'), 'node_modules']
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'wb \'s blog admin',
				template: "./src/public/index.html",
				// 打包出来的文件名称
				filename: "index.html",
				// 是否加上hash，默认false
				hash: false,
				// 最小化输出方式
				minify: {
					removeAttributeQuotes: true, // 是否删除属性的双引号
					collapseWhitespace: true // 是否折叠空白
				},
				chunks: ['index']
			}),

			// 版本信息插件
			new VersionPlugin({
				// 指定版本信息数据的绝对路径, 必设项。 [默认值使用数据为插件自身的版本信息]
				dataPath: path.join(__dirname, './version.json'),

				// 配置version.json 中 的list.type 值文本对应关系 [当前展示的为默认值]
				type: {
					'1': {
						text: '新增',
						style: 'color: green'
					},
					'2': {
						text: '修复',
						style: 'color: red'
					},
					'3': {
						text: '优化',
						style: 'color: orange'
					}
				}
			}),

			// 抽离css
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].css'
			}),

			// 打包进度
			new webpack.ProgressPlugin(),

			// 清除包,3.0以后不会清除打包出来的根文件夹
			new CleanWebpackPlugin()
		]
	}
};
