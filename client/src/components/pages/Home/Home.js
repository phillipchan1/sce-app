// libraries
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ProtectedRoute from '../../../components/services/ProtectedRoute';

// components
import Navigation from '../../organisms/Navigation/Navigation';
import Header from '../../organisms/Header/Header';

// pages
import OuttagesPage from '../../pages/OuttagesPage/OuttagesPage';
import OuttagePage from '../../pages/OuttagePage/OuttagePage';

@inject('AuthStore')
@inject('OuttageStore')
@observer
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		};
	}

	componentDidMount() {
		this.props.OuttageStore.getOuttages();
	}

	handleMenuOpen() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	render() {
		return (
			<div>
				<Header handleMenuOpen={this.handleMenuOpen.bind(this)} />
				<Navigation menuOpen={this.state.menuOpen} />

				<div className="body-container">
					<div className="body-content">
						<ProtectedRoute
							exact
							path={`/`}
							component={OuttagesPage}
						/>

						<ProtectedRoute
							exact
							path={`/admin`}
							component={OuttagesPage}
						/>
						<ProtectedRoute
							path={`${this.props.match.url}/outtage/:id`}
							component={OuttagePage}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
