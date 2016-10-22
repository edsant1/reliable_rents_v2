import React from 'react';
import Home from '../components/Home';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default App;
