import { observable, action, computed } from 'mobx';
import axios from 'axios';

class AuthStore {
	constructor() {
		const jwtoken = localStorage.getItem('jwtoken');

		if (jwtoken) {
			this.isAuthenticated = true;
		}
	}
	@observable
	isAuthenticated = false;

	@observable
	currentUser = {};

	@computed
	get authenticationStatus() {
		return this.isAuthenticated;
	}

	@action.bound
	logout() {
		console.log('logging out');
		localStorage.removeItem('jwtoken');
		this.isAuthenticated = false;
		this.currentUser = {};
	}

	@action.bound
	login(user, token) {
		(this.isAuthenticated = true), (this.currentUser = user);

		localStorage.setItem('jwtoken', token);
	}

	@action
	verifyToken() {
		const jwtoken = localStorage.getItem('jwtoken');

		if (jwtoken) {
			axios
				.get(`/api/auth/verify`, {
					headers: {
						token: jwtoken
					}
				})
				.then(res => {
					console.log('login', res);

					if (res.data.success) {
						this.login(res.data.user, jwtoken);
					} else {
						console.log('should logout');
						this.logout();
					}
				});
		} else {
			console.log('should logout');
			this.logout();
		}
	}
}

export default AuthStore;
