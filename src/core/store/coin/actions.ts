import { Coin } from '../../models/coins';
import * as actionTypes from './actionTypes';

export function sendCoinRequest(id: string): actionTypes.CoinRequest {
  return {
    type: actionTypes.COIN_REQUEST,
    payload: {
      id,
    },
  };
}

export function coinSuccess(coin: Coin): actionTypes.CoinSuccess {
  return {
    type: actionTypes.COIN_SUCCESS,
    payload: coin,
  };
}

export function coinError(coinErrorText: string): actionTypes.CoinError {
  return {
    type: actionTypes.COIN_ERROR,
    payload: {
      coinError: coinErrorText,
    },
  };
}
