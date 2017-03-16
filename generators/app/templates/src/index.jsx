import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const rootContainer = require('./containers/Root').default;

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = rootContainer;
    render(
      <AppContainer>
        <RootContainer store={store} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
