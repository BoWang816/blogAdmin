/**
 * webpack.common.js
 * @author wangbo
 * @since 2020/3/13
 * @github https://github.com/BoWang816
 */
const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
// html打包
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// css压缩
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 中间缓存优化
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// css优化
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 清除已打包文件
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
                    use: ['thread-loader', 'cache-loader', 'babel-loader'],
                    // 不使用cache-loader的时候，可以在babel-loader的options中设置cacheDirectory: true
                    include: [path.resolve(__dirname, 'src')],
                    exclude: /node_modules/
                },
                {
                    // css loader配置
                    test: /\.(le|c)ss/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: isDev, // 仅dev环境启用HMR功能，Hot Module Replacement，模块热更新
                                reloadAll: true // 如果模块热更新不起作用，重新加载全部样式
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: true, // 启用/禁用 url() 处理
                                sourceMap: false // 启用/禁用 Sourcemaps
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                // 使用插件
                                plugins: (loader) => [
                                    require('postcss-import')({root: loader.resourcePath}), // 支持@import 引入css
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
                    test: /\.(png|jpg|jpeg|gif|webp|svg|eot|ttf|woff|woff2|ico)$/,
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
        externals: {
            // 引入CDN文件时希望，通过 import 的方式去引用(如 import $ from 'jquery')，并且希望 webpack 不会对其进行打包
            // 'react': 'react',
            // 'react-dom': 'react-dom',
        },

        // 入口，可以是数组、对象、字符串，数组和对象方式可以配置多入口
        entry: {
            index: './src/index.js',
        },

        // 出口配置
        output: {
            path: path.resolve(__dirname, 'admin'), // 绝对路径，打包到admin文件夹，可以自定义打包目录，默认dist
            filename: '[name]_[hash:6].js', // 打包出的文件名, entry中使用对象方式设置的名称，如在entry中设置为index，则打包出的文件名就是index_哈希值.js，不设置的话默认是main.js
            publicPath: '/'
        },

        // 寻找第三方模块
        resolve: {
            //从左到右依次查找，暴露出的文件在使用时会进行索引
            modules: ['./src/components', 'node_modules'],
            // 将包进行映射，这样就不用写很长的路径，在使用是直接 import components from "@components"即可
            alias: {
                '@components': resolve('./src/components')
            },
            // 文件扩展，从左到右寻找，适配不通类型的文件
            extensions: ['.js', 'web.js', 'aa.json']
        },

        // 配置插件
        plugins: [
            // public目录 html文件打包，默认根目录/
            new HtmlWebpackPlugin({
                title: 'wb\'s blog Admin',
                template: "./src/public/index.html",
                // 打包出来的文件名称
                filename: "index.html",
                // 是否加上hash，默认false
                hash: false,
                // 最小化输出方式
                minify: {
                    removeAttributeQuotes: false, // 是否删除属性的双引号
                    collapseWhitespace: false // 是否折叠空白
                }
            }),

            // 打包前清除历史包
            new CleanWebpackPlugin(),

            // 拷贝lib包，不进行编译
            new CopyWebpackPlugin([
                {
                    from: './src/common/lib/*.js', // 拷贝哪些文件
                    to: path.resolve(__dirname, 'dist', 'lib'), // 拷贝到dist目录的lib目录下
                    flatten: true, // 只拷贝文件，不拷贝路径
                    ignore: [] // 设置不拷贝文件
                }
            ]),

            // 抽离css文件
            new MiniCssExtractPlugin({
                filename: 'css/[name]_[hash:6].css', // 将css文件抽离到css文件夹下，抽离的css文件名为'index_6位hash值'
                publicPath: '/'
            }),

            // 压缩抽离的css
            new OptimizeCssAssetsWebpackPlugin(),

            // 自定义环境变量
            new webpack.DefinePlugin({
                DEV: JSON.stringify('dev'),
                FLAG: 'true'
            }),

            // 设置中间缓存
            new HardSourceWebpackPlugin()
        ],

        // 公共模块统一打包
        optimization: {
            splitChunks: {
                // 分割代码块
                cacheGroups: {
                    vendor: {
                        // 第三方依赖
                        priority: 1, // 设置优先级，首先抽离第三方模块
                        name: 'vendor',
                        test: /node_modules/,
                        chunks: 'initial',
                        minSize: 0,
                        minChunks: 1 //最少引入了1次
                    },
                    // 缓存组
                    common: {
                        // 公共模块
                        chunks: 'initial',
                        name: 'common',
                        minSize: 100, // 大小超过100个字节
                        minChunks: 3 // 最少引入了3次
                    }
                }
            }
        }
    };
};
