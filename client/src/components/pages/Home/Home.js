// libraries
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ProtectedRoute from '../../services/ProtectedRoute';

// components
import Navigation from '../../organisms/Navigation/Navigation';
import Header from '../../organisms/Header/Header';
import moduleName from '../../atoms/BodyCard/BodyCard';
import BodyCard from '../../atoms/BodyCard/BodyCard';

@inject('AuthStore')
@observer
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		};
	}

	handleMenuOpen() {
		console.log('open');
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	render() {
		return (
			<div>
				<Header handleMenuOpen={this.handleMenuOpen.bind(this)} />
				<Navigation menuOpen={this.state.menuOpen} />

				<div className="body-content">
					<BodyCard className="outtages">
						<h1>Outtages</h1>

						<p>See outtages in the area</p>
					</BodyCard>
				</div>
			</div>
		);
	}
}

export default Home;
