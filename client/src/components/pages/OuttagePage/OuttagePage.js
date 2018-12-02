import React, { Component } from 'react';
import axios from 'axios';

import BodyCard from '../../atoms/BodyCard/BodyCard';

class OuttagePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentOuttage: {}
		};
	}

	componentDidMount() {
		const jwtoken = localStorage.getItem('jwtoken');

		axios
			.get(`/api/outtage/${this.props.match.params.id}`, {
				headers: {
					token: jwtoken
				}
			})
			.then(res => {
				this.setState({
					currentOuttage: res.data.data
				});
			});
	}

	render() {
		if (!this.state.currentOuttage.id) {
			return 'Outtage not found';
		} else {
			return (
				<div class="outtage-page">
					<div className="outtage-information">
						<h1>Outage</h1>
						<p>
							{this.state.currentOuttage.address},
							{this.state.currentOuttage.city}
						</p>

						<BodyCard className="information-table">
							<aside>
								<label>Id</label>
								{this.state.currentOuttage.id}
							</aside>

							<aside>
								<label>Type</label>
								{this.state.currentOuttage.type}
							</aside>

							<aside>
								<label>Customers Impacted</label>
								{this.state.currentOuttage.customersImpacted}
							</aside>

							<aside>
								<label>Reason</label>
								{this.state.currentOuttage.reason}
							</aside>
						</BodyCard>
					</div>
					<div className="updates-container">
						<h2>Updates</h2>
					</div>
				</div>
			);
		}
	}
}

export default OuttagePage;
