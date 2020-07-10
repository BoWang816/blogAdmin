/**
 * article.js
 * @author wangbo
 * @since 2020/4/11
 * @github https://github.com/BoWang816
 */
const config = [];
const commonResponse = {
    data: null,
    code: 200,
    msg: 'success'
};

for (let i = 0; i < 23; i++) {
    config.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    });
}
module.exports = {
    '/articleList': config,

    '/addArticle': {
        post: commonResponse
    },

    '/deleteArticle': {
        delete: commonResponse
    }
};
