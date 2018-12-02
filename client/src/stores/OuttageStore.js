import { observable, action } from 'mobx';
import axios from 'axios';

class OuttageStore {
	@observable
	outtages = [];

	@action
	getOuttages() {
		const jwtoken = localStorage.getItem('jwtoken');

		if (jwtoken) {
			axios
				.get(`/api/outtage/`, {
					headers: {
						token: jwtoken
					}
				})
				.then(res => {
					if (res.data.success) {
						this.outtages = res.data.data;
					}
				});
		}
	}
}

export default OuttageStore;
