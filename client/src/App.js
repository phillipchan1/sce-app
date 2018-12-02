// libraries
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader';

// services
import AuthStore from './stores/AuthStore';
import AppMessagingStore from './stores/AppMessagingStore';
import OuttageStore from './stores/OuttageStore';

// service components
import ProtectedRoute from './components/services/ProtectedRoute';
import Init from './components/services/Init';

// pages
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

// components
import 'react-table/react-table.css';

class App extends Component {
	render() {
		return (
			<Provider
				AuthStore={new AuthStore()}
				AppMessagingStore={new AppMessagingStore()}
				OuttageStore={new OuttageStore()}
			>
				<Router>
					<div className="app">
						<Init />
						<div className="router">
							<ProtectedRoute path="/admin" component={Home} />

							<ProtectedRoute path="/" component={Home} />

							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default hot(module)(App);
