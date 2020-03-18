/**
 * webpack.prod.config.js
 * @author wangbo
 * @since 2020/3/13
 * @github https://github.com/BoWang816
 */

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const MainConfig = {
    mode: "production",
    // 控制是否生成，以及如何生成 source map，配置项很多，cheap-module-eval-source-map表示原始源代码（仅限行）
    devtool: "none",
};

// smp.wrap loader所用打包时间
module.exports = smp.wrap(merge(MainConfig, commonConfig(true)));
