/**
 * webpack.dev.config.js
 * @author wangbo
 * @since 2020/3/13
 * @github https://github.com/BoWang816
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const apiMocker = require('mocker-api');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 根据环境使用不同模版
const commonConfig = require('./webpack.common');
const MainConfig = {
    mode: "development",

    // 控制是否生成，以及如何生成 source map，配置项很多，cheap-module-eval-source-map表示原始源代码（仅限行）
    devtool: "cheap-module-eval-source-map",

    // 本地开发服务器配置
    devServer: {
        before(app){
            apiMocker(app, path.resolve('./mock/mock.js'))
        },
        contentBase: path.resolve(__dirname, 'admin'),
        port: 4000, // 默认8080
        quiet: false, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台，这也意味着来自 webpack 的错误或警告在控制台不可见
        inline: true, // 内联模式开启，false为iframe模式
        // stats: 'errors-only', // 控制台只打印错误，使用了quiet:true 或noInfo: true 时该配置无效
        overlay: true, // 当存在编译错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。
        clientLogLevel: "info", // 日志等级，默认info，可能的值有 none, error, warning 或者 info（默认值），当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息
        compress: true, // 一切服务都启用gzip 压缩
        hot: true, // 开启热更新
        proxy: {
            // 配置跨域代理
            "/api": {
                // 访问"/api"的接口时走4000端口
                target: "http://localhost:3000",
                pathRewrite: {
                    // 不想始终传递 /api ，则需要重写路径
                    '/api': ''
                },
                secure: true // 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受则设置为false
            }
        }
    },

    // 配置插件
    plugins: [
        // 开启热更新，整个页面都会刷新
        new webpack.HotModuleReplacementPlugin(),

        // 打包文件分析 todo
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = merge(MainConfig, commonConfig(true));
