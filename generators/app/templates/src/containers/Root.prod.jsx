import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';

export default function Root({ store }) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App} />
        </Router>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
};
