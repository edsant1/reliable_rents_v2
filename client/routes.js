import React from 'react';
import { Route, indexRoute } from 'react-router';
import App from './containers/App';
import { UserAuthWrapper } from 'redux-auth-wrapper';

export default (
	<Route>
		<Route path="/" component={App}>
		</Route>
	</Route>
);
