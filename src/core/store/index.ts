import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
