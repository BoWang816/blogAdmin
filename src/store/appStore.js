/**
 * appStore.js
 * @author
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import { observable, action } from 'mobx';
import { isAuthenticated, authenticateSuccess, logout } from '@utils/session';

class AppStore {
	@observable isLogin = !!isAuthenticated(); // 利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失

	@observable loginUser = {}; // 当前登录用户信息

	@action toggleLogin(flag, info = {}) {
		this.loginUser = info; // 设置登录用户信息
		if (flag) {
			authenticateSuccess(info.username);
			this.isLogin = true;
		} else {
			logout();
			this.isLogin = false;
		}
	}
}

export default new AppStore();
