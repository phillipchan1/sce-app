// libraries
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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

				<p>Welcome to SoCal Edison</p>
			</div>
		);
	}
}

export default Home;
