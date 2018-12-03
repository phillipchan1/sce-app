// libraries
import React, { Component } from 'react';
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import { Redirect, Link } from 'react-router-dom';

// components
import { Button, Header, Form, Message } from 'semantic-ui-react';

@inject('AuthStore')
@observer
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginSuccess: false,
			errorMessage: ''
		};
		this.handleChange.bind(this);
	}

	handleChange(e) {
		var key = e.target.name;
		var value = e.target.value;
		var obj = {};

		obj[key] = value;

		this.setState(obj);
	}

	handleSubmit() {
		axios.post(`/api/auth/login`, this.state).then(res => {
			if (res.data.success) {
				this.setState({
					loginSuccess: true
				});

				this.props.AuthStore.login(res.data.user, res.data.token);
			} else {
				this.setState({
					loginSuccess: false,
					errorMessage: res.data.message
				});
			}
		});
	}

	render() {
		if (this.props.AuthStore.isAuthenticated) {
			return <Redirect to="/" />;
		} else {
			return (
				<div className="auth-page">
					<div
						className="auth-background"
						style={{
							backgroundImage: `url(https://source.unsplash.com/collection/2022043/1200x900)`
						}}
					/>
					<div className="auth-container">
						<header style={{ marginBottom: '1rem' }}>
							<Header as="h1">SCE App Login</Header>
							{this.state.errorMessage ? (
								<Message warning>
									<p>{this.state.errorMessage}</p>
								</Message>
							) : (
								''
							)}
						</header>
						<Form>
							<Form.Field>
								<label>Email</label>
								<input
									onChange={this.handleChange.bind(this)}
									name="email"
									placeholder="Email"
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									type="password"
									onChange={this.handleChange.bind(this)}
									name="password"
									placeholder="Enter Your Password"
								/>
							</Form.Field>

							<div className="auth-helper-container">
								<Button
									onClick={this.handleSubmit.bind(this)}
									type="submit"
								>
									Login
								</Button>{' '}
								Don't have an account?{' '}
								<Link to={'/register'}>Register for one</Link>
							</div>
						</Form>
					</div>
				</div>
			);
		}
	}
}

export default Login;
