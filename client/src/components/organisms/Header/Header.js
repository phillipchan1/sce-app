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
						enableBackground="new 0 0 32 32"
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
				<div
					className="login-button-container"
					onClick={this.props.AuthStore.logout}
				>
					<svg
						height="25"
						viewBox="0 0 32 32"
						width="25"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title />
						<g data-name="1" id="_1">
							<path
								d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z"
								id="logout_account_exit_door"
							/>
						</g>
					</svg>
					<aside>Logout</aside>
				</div>
			</div>
		);
	}
}

export default Header;
