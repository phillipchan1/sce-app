import React, { Component } from 'react';
import axios from 'axios';

import { Modal, Button } from 'semantic-ui-react';

import BodyCard from '../../atoms/BodyCard/BodyCard';
import UpdateCard from '../../molecules/UpdateCard/UpdateCard';
import AddEditJobUpdate from '../../molecules/AddEditJobUpdate/AddEditJobUpdate';

class OuttagePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentOuttage: {},
			updates: []
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
				this.setState(
					{
						currentOuttage: res.data.data
					},
					() => {
						this.getUpdates();
					}
				);
			});
	}

	getUpdates() {
		const jwtoken = localStorage.getItem('jwtoken');

		axios
			.get(`/api/outtage/${this.state.currentOuttage.id}/updates`, {
				headers: {
					token: jwtoken
				}
			})
			.then(res => {
				this.setState({ updates: res.data.data });
			});
	}

	handleJobUpdate() {
		this.getUpdates();
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
						{this.state.updates.length > 0
							? this.state.updates.map(update => {
									return <UpdateCard {...update} />;
							  })
							: 'No Updates Yet'}

						<Modal
							trigger={
								<Button>
									<svg
										width="30"
										height="30"
										enable-background="new 0 0 100 100"
										id="Layer_1"
										version="1.1"
										viewBox="0 0 100 100"
									>
										<polygon
											fill="#010101"
											points="80.2,51.6 51.4,51.6 51.4,22.6 48.9,22.6 48.9,51.6 19.9,51.6 19.9,54.1 48.9,54.1 48.9,83.1   51.4,83.1 51.4,54.1 80.4,54.1 80.4,51.6 "
										/>
									</svg>
								</Button>
							}
						>
							<Modal.Content image>
								<AddEditJobUpdate
									outtageId={this.state.currentOuttage.id}
									jobUpdated={this.handleJobUpdate.bind(this)}
								/>
							</Modal.Content>
						</Modal>
					</div>
				</div>
			);
		}
	}
}

export default OuttagePage;
