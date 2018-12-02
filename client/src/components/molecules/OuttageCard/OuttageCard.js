import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OuttageCard extends Component {
	render() {
		return (
			<div className="outtage-card">
				{this.props.id} city: {this.props.city}
			</div>
		);
	}
}

OuttageCard.propTypes = {
	id: PropTypes.number,
	city: PropTypes.string
};

export default OuttageCard;
