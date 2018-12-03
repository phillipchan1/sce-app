import React, { Component } from 'react';
import { Form, Select, Button } from 'semantic-ui-react';
import axios from 'axios';

class AddEditJobUpdate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentJobUpdate: {
				arrivalTime: null,
				estimatedWorkTime: 0,
				delayCode: '',
				completeTime: null
			}
		};
	}

	delayKeyCodes = [
		{ key: '123', value: '123', text: '123 - Transportation' },
		{ key: '142', value: '142', text: '142 - Missing Equipment' },
		{ key: '189', value: '189', text: '189 - Hungry (Needed Food)' }
	];

	handleChange(e) {
		console.log(e.target.name);
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit() {
		const jwtoken = localStorage.getItem('jwtoken');

		axios
			.post(
				`/api/jobupdate/`,
				Object.assign({ outtageId: this.props.outtageId }, this.state),
				{ headers: { token: jwtoken } }
			)
			.then(res => {
				this.props.jobUpdated();
			});
	}

	render() {
		return (
			<div className="add-update-job-update">
				<h1>Add Update</h1>
				<Form>
					<Form.Field>
						<label>Arrival Time</label>
						<input
							name="arrivalTime"
							onChange={this.handleChange.bind(this)}
							placeholder="Arrival Time"
						/>
					</Form.Field>
					<Form.Field>
						<label>Estimated Work Time</label>
						<input
							name="estimatedWorkTime"
							onChange={this.handleChange.bind(this)}
							placeholder="Hours"
						/>
					</Form.Field>
					<Form.Field>
						<label>Estimated Work Time</label>
						<Select
							onChange={(e, { value }) =>
								this.setState({ estimatedWorkTime: value })
							}
							placeholder="Select your country"
							options={this.delayKeyCodes}
						/>
					</Form.Field>
					<Form.Field>
						<label>Complete Work Time</label>
						<input
							name="completeTime"
							onChange={this.handleChange.bind(this)}
							placeholder="Time"
						/>
					</Form.Field>
				</Form>
				<Button onClick={this.handleSubmit.bind(this)}>
					Add Update
				</Button>
			</div>
		);
	}
}

export default AddEditJobUpdate;
