import { CoinMarket } from '../../models/coins';
import { DEFAULT_CURRENCY, COIN_MARKETS_DEFAULT_ORDER } from '../../appConstants';
import * as actionTypes from './actionTypes';

export type HomeState = {
  isLoadingCoinMarkets: boolean;
  coinMarkets: CoinMarket[];
  page: number;
  vsCurrency: string;
  coinMarketsError: null | string;
  order: string;
};

const initialState: HomeState = {
  isLoadingCoinMarkets: false,
  vsCurrency: DEFAULT_CURRENCY,
  coinMarkets: [],
  page: 1,
  coinMarketsError: null,
  order: COIN_MARKETS_DEFAULT_ORDER,
};

const homeReducer = (state = initialState, action: actionTypes.HomeActionTypes): HomeState => {
  switch (action.type) {
    case actionTypes.COIN_MARKETS_REQUEST:
      return {
        ...state,
        isLoadingCoinMarkets: true,
        coinMarketsError: null,
      };
    case actionTypes.COIN_MARKETS_SUCCESS:
      return {
        ...state,
        isLoadingCoinMarkets: false,
        coinMarkets: action.payload.coinMarkets,
        page: action.payload.page,
        coinMarketsError: null,
      };
    case actionTypes.COIN_MARKETS_ERROR:
      return {
        ...state,
        isLoadingCoinMarkets: false,
        coinMarkets: [],
        page: 1,
        coinMarketsError: action.payload.coinMarketsError,
      };
    default:
      return state;
  }
};

export default homeReducer;
