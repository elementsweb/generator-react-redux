import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
// import exampleSaga from '../sagas';

const reducers = require('../reducers').default;

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  // sagaMiddleware.run(exampleSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(reducers),
    );
  }

  return store;
}
