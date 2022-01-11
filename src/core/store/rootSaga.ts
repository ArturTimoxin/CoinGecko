import { all } from 'redux-saga/effects';

// Watchers
import watchHomeActions from './home/sagas';
import watchCoinActions from './coin/sagas';

function* rootSaga(): Generator {
  yield all([watchHomeActions(), watchCoinActions()]);
}

export default rootSaga;
