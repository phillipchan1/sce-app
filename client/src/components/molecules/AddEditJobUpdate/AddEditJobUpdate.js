import React, { Component } from 'react';
import { Form, Select, Button } from 'semantic-ui-react';
import {
	DateInput,
	TimeInput,
	DateTimeInput,
	DatesRangeInput
} from 'semantic-ui-calendar-react';
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

	handleChange(e, { name, value }) {
		var newState = this.state;

		newState.currentJobUpdate[name] = value;

		this.setState(newState);
	}

	handleSubmit() {
		const jwtoken = localStorage.getItem('jwtoken');

		axios
			.post(
				`/api/jobupdate/`,
				Object.assign(
					{ outtageId: this.props.outtageId },
					this.state.currentJobUpdate
				),
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
						<DateTimeInput
							name="arrivalTime"
							placeholder="Date Time"
							value={this.state.currentJobUpdate.arrivalTime}
							iconPosition="left"
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
					<Form.Field>
						<label>Estimated Work Time</label>
						<input
							name="estimatedWorkTime"
							onChange={e => {
								var newState = this.state;

								newState.currentJobUpdate.estimatedWorkTime =
									e.target.value;
								this.setState(newState);
							}}
							placeholder="Hours"
						/>
					</Form.Field>
					<Form.Field>
						<label>Delay Code</label>
						<Select
							onChange={(e, { value }) => {
								this.setState(prevState => ({
									currentJobUpdate: {
										...prevState.currentJobUpdate,
										delayCode: value
									}
								}));
							}}
							name="delayCode"
							placeholder="Select your country"
							options={this.delayKeyCodes}
						/>
					</Form.Field>
					<Form.Field>
						<label>Complete Work Time</label>
						<DateTimeInput
							name="completeTime"
							placeholder="Time"
							value={this.state.currentJobUpdate.completeTime}
							iconPosition="left"
							onChange={this.handleChange.bind(this)}
						/>
					</Form.Field>
				</Form>
				<div style={{ padding: '1em 0' }}>
					<Button onClick={this.handleSubmit.bind(this)}>
						Add Update
					</Button>
				</div>
			</div>
		);
	}
}

export default AddEditJobUpdate;
