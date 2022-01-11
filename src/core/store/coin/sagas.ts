import { SagaIterator } from '@redux-saga/core';
import { put, call, takeLatest } from 'redux-saga/effects';
import CoinsService from '../../services/coins';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* coinRequest(action: actionTypes.CoinRequest): SagaIterator {
  try {
    const coinResponse = yield call(CoinsService.fetchCoinData, { id: action.payload.id });
    yield put(actions.coinSuccess(coinResponse.data));
  } catch (error) {
    yield put(actions.coinError('Ooops, Something went wrong...'));
  }
}

function* watchCoinActions(): SagaIterator {
  yield takeLatest(actionTypes.COIN_REQUEST, coinRequest);
}

export default watchCoinActions;
