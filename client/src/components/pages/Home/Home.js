// libraries
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ProtectedRoute from '../../services/ProtectedRoute';

// components
import Navigation from '../../organisms/Navigation/Navigation';

@inject('AuthStore')
@observer
class Home extends Component {
	componentDidMount() {}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '3em',
					flexDirection: 'column'
				}}
			>
				<Navigation />

				<h1>Outtasge</h1>

				<p>Welcome to SoCal Edison</p>
			</div>
		);
	}
}

export default Home;
