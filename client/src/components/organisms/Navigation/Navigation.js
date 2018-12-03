// libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
class Navigation extends Component {
	render() {
		return (
			<div className={`app-nav ${this.props.menuOpen ? 'open' : ''}`}>
				<Link to={'/'}>
					<svg
						enableBackground="new 0 0 128 128"
						height="40px"
						version="1.1"
						viewBox="0 0 128 128"
						width="40px"
					>
						<g id="Layer_2" />
						<g id="Layer_1">
							<g>
								<polyline
									fill="none"
									points="    23.747,55.721 64.304,26.575 104.253,55.721   "
									stroke="#231F20"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="5"
								/>
								<path
									d="    M52.727,98.896V73.509c0,0,3.342-5.843,10.428-5.843c7.084,0,10.425,5.843,10.425,5.843v25.387"
									fill="none"
									stroke="#231F20"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="5"
								/>
								<polyline
									fill="none"
									points="    38.588,42.93 38.588,26.575 47.684,26.575 47.684,37.192   "
									stroke="#231F20"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="5"
								/>
								<path
									d="    M98.79,51.735v42.867c0,3.769-3.054,6.822-6.822,6.822H36.032c-3.769,0-6.822-3.054-6.822-6.822V51.795"
									fill="none"
									stroke="#231F20"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="5"
								/>
							</g>
						</g>
					</svg>
				</Link>
			</div>
		);
	}
}

export default Navigation;
