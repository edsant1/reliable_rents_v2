import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import SignIn from './SignIn';

class Home extends React.Component  {
	constructor(props){
		super(props);
		this.signInToggle = this.signInToggle.bind(this);
		this.signInForm = this.signInForm.bind(this);
		this.state = { showForm: false };
	}

	signInToggle(e) {
		e.preventDefault();
		this.setState({ showForm: !this.state.showForm })
	}

	signInForm() {
		if (this.state.showForm) {
			return (
				<SignIn />
			)
		} else {
			return null;
		}
	}

	render() {
			return(
			<div>
				<button className="btn" onClick={ this.signInToggle }>Click to toggle form</button>
				{ this.signInForm() }
				<h1>Welcome to Reliable Rents home page</h1>
			</div>
		)
	}
};

export default connect()(Home);
