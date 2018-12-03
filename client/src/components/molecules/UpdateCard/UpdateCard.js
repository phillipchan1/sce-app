import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpdateCard extends Component {
	render() {
		return (
			<div class="update-card">
				<aside>
					<label>Arrival Time</label>
					{this.props.arrivalTime}
				</aside>

				<aside>
					<label>Estimated Work Time</label>
					{this.props.estimatedWorkTime}
				</aside>

				<aside>
					<label>Delay Code</label>
					{this.props.delayCode}
				</aside>

				<aside>
					<label>Complete Time</label>
					{this.props.completeTime}
				</aside>
			</div>
		);
	}
}

UpdateCard.propTypes = {
	arrivalTime: PropTypes.string,
	estimatedWorkTime: PropTypes.string,
	delayCode: PropTypes.string,
	completeTime: PropTypes.string
};

export default UpdateCard;
