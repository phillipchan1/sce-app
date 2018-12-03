import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OuttageCard extends Component {
	render() {
		return (
			<div className="outtage-card">
				<div className="outtage-info">
					{this.props.address} {this.props.city}
				</div>
				<div className="status">{this.props.status}</div>
			</div>
		);
	}
}

OuttageCard.propTypes = {
	id: PropTypes.number,
	city: PropTypes.string,
	address: PropTypes.string
};

export default OuttageCard;
