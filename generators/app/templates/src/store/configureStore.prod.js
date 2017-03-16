import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import exampleSaga from '../sagas';

const sagaMiddleware = createSageMiddleware();

const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  // sagaMiddleware.run(exampleSaga);

  return store;
}
