import { SagaIterator } from '@redux-saga/core';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import CoinsService from '../../services/coins';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* coinMarketsRequest(action: actionTypes.CoinMarketsRequest): SagaIterator {
  try {
    const state = yield select();
    const coinMarketsResponse = yield call(CoinsService.fetchCoinMarkets, {
      page: action.payload.page,
      vsCurrency: action.payload.vsCurrency,
      order: action.payload.order,
    });
    let newCoinMarkets = [...state.home.coinMarkets, ...coinMarketsResponse.data];
    if (action.payload.page === 1) {
      newCoinMarkets = coinMarketsResponse.data;
    }
    yield put(actions.coinMarketsSuccess(newCoinMarkets, action.payload.page));
  } catch (error) {
    yield put(actions.coinMarketsError('Ooops, Something went wrong...'));
  }
}

function* watchHomeActions(): SagaIterator {
  yield takeLatest(actionTypes.COIN_MARKETS_REQUEST, coinMarketsRequest);
}

export default watchHomeActions;
