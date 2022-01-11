import { combineReducers } from 'redux';

import home from './home/reducer';
import coin from './coin/reducer';

const rootReducer = combineReducers({
  home,
  coin,
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default rootReducer;
