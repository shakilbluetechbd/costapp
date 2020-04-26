import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';
// import middlewares from './middlewares'

// import { updateTheme } from './themes/middleware';

// import { persistedState, saveState } from './persisted.store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...reducers }),
  // persistedState, // second argument overrides the initial state
  applyMiddleware(
    // ...middlewares,
    sagaMiddleware,
  )
);

sagaMiddleware.run(rootSaga);

// add a listener that will be invoked on any state change
// store.subscribe(() => {
//   saveState(store.getState());
// });

// Update the initial theme
// updateTheme(store.getState())

export default store;
