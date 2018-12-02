import React, { Component } from 'react';

class BodyCard extends Component {
	render() {
		return (
			<div class={`body-card ${this.props.className}`}>
				{this.props.children}
			</div>
		);
	}
}

export default BodyCard;
