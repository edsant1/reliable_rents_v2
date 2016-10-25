import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Home from './components/Home';
import Apartments from './components/Apartments';
import NotFound from './components/NotFound';

const AuthenticatedUser = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: history.push,
  failureRedirectPath: '/',
  wrapperDisplayName: 'AuthenticatedUser'
});

export default (
	<Route>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/apartments" component={Apartments} />
			<Route path="*" component={NotFound} />
		</Route>
	</Route>
);
