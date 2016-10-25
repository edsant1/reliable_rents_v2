import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Home from '../components/Home';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.form = this.form.bind(this);
	}

	form() {
		e.preventDefault();
		this.setState({ showForm: !this.state.showForm })
	}


	render() {
		return(
			<div>
			  <nav>
			    <div className="nav-wrapper blue-grey">
			      <Link to="/" className="brand-logo center">Reliabe Rents</Link>
			      <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="left hide-on-med-and-down">
			        <li><Link to="/apartments">Apartments</Link></li>
			      </ul>
			      <ul>
			      	<li className="right"><a>Sign In</a></li>
			      </ul>
			      <ul className="side-nav" id="mobile">
			      	<li><Link to="/apartments">Apartments</Link></li>
			      </ul>
			    </div>
			  </nav>
				{this.props.children}
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return { showForm: state.showForm };
// }

export default connect()(App);
