/**
 * postcss.config.js.js
 * @author wangbo
 * @since 2020/3/16
 * @github https://github.com/BoWang816
 */
module.exports = {
    plugins: [
        require('autoprefixer')({overrideBrowserslist: ['Chrome > 35', 'Firefox > 30', 'Safari > 7']})
    ]
};
