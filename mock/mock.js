/**
 * mock.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
module.exports = {
    'GET /user': {name: 'wang'},
    'POST /login': (req, res) => {
        const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
            return res.send({
                status: 'ok',
                code: 0,
                token: 'd4eddfgesrr34rt',
                data: { id: 1, name: 'wb' }
            })
        } else {
            return res.send({status: 'error', code: 403})
        }
    }
};
