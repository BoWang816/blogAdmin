/**
 * webpack-pro.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const merge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const commonConfig = require('./webpack-common.config');

const smp = new SpeedMeasurePlugin();

const MainConfig = {
    mode: 'production',
    // 控制是否生成，以及如何生成 source map，配置项很多，cheap-module-eval-source-map表示原始源代码（仅限行）
    devtool: 'none',

    // 代码优化配置
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    minChunks: 1,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                    // name(module) {
                    // 	const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];// npm package names are URL-safe, but some servers don't like @ symbols
                    // 	return `libs.${packageName.replace('@', '')}`;
                    // },
                },
                default: {
                    name: 'libs',
                    minChunks: 1,
                    priority: -20, // 优先级配置项
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            // 压缩js
            new TerserWebpackPlugin({
                cache: true,
                parallel: false,
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),

            // 压缩css
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    minifyGradients: true
                },
                canPrint: true
            }),

            // 开启gzip压缩
            new CompressionWebpackPlugin({
                filename: '[path].gz',
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 对超过10kb的数据进行压缩
                deleteOriginalAssets: false, // 是否删除原文件
                algorithm: 'gzip',
                minRatio: 0.8
            })
        ]
    }
};

// smp.wrap loader所用打包时间
module.exports = smp.wrap(merge(MainConfig, commonConfig(true)));
