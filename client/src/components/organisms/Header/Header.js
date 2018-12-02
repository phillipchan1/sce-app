import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
class Header extends Component {
	render() {
		return (
			<div id="header">
				<div
					className="menu-container"
					onClick={this.props.handleMenuOpen}
				>
					<svg
						enable-background="new 0 0 32 32"
						height="32px"
						id="Слой_1"
						version="1.1"
						viewBox="0 0 32 32"
						width="32px"
					>
						<g id="Menu_1_">
							<path
								d="M1,10h30c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1H1C0.448,8,0,8.448,0,9C0,9.552,0.448,10,1,10z"
								fill="#121313"
							/>
							<path
								d="M31,15H1c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1C32,15.448,31.552,15,31,15z"
								fill="#121313"
							/>
							<path
								d="M31,22H11c-0.552,0-1,0.448-1,1s0.448,1,1,1h20c0.552,0,1-0.448,1-1S31.552,22,31,22z"
								fill="#121313"
							/>
						</g>
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
					</svg>
				</div>
				<div className="logo-container">SoCal Edison</div>
				<div className="login-button-container">
					<div onClick={this.props.AuthStore.logout}>Logout</div>
				</div>
			</div>
		);
	}
}

export default Header;
