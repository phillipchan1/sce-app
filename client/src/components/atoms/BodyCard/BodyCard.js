import React, { Component } from 'react';

class BodyCard extends Component {
	render() {
		return (
			<div className={`body-card ${this.props.className}`}>
				{this.props.children}
			</div>
		);
	}
}

export default BodyCard;
