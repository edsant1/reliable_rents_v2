import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default (
	<Route>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="*" component={NotFound} />
		</Route>
	</Route>
);
