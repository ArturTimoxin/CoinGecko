import { CoinMarket } from '../../models/coins';
import * as actionTypes from './actionTypes';
import { DEFAULT_CURRENCY, COIN_MARKETS_DEFAULT_ORDER } from '../../appConstants';

export function sendCoinMarketsRequest(
  page: number,
  vsCurrency: string = DEFAULT_CURRENCY,
  order: string = COIN_MARKETS_DEFAULT_ORDER,
): actionTypes.CoinMarketsRequest {
  return {
    type: actionTypes.COIN_MARKETS_REQUEST,
    payload: {
      page,
      vsCurrency,
      order,
    },
  };
}

export function coinMarketsSuccess(
  coinMarkets: CoinMarket[],
  page: number,
): actionTypes.CoinMarketsSuccess {
  return {
    type: actionTypes.COIN_MARKETS_SUCCESS,
    payload: {
      coinMarkets,
      page,
    },
  };
}

export function coinMarketsError(coinMarketsErrorText: string): actionTypes.CoinMarketsError {
  return {
    type: actionTypes.COIN_MARKETS_ERROR,
    payload: {
      coinMarketsError: coinMarketsErrorText,
    },
  };
}
