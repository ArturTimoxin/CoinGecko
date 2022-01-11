import { Coin } from '../../models/coins';
import * as actionTypes from './actionTypes';

export type CoinState = {
  isLoadingCoinData: boolean;
  coinData: Coin | null;
  coinError: null | string;
};

const initialState: CoinState = {
  isLoadingCoinData: false,
  coinData: null,
  coinError: null,
};

const coinReducer = (state = initialState, action: actionTypes.CoinActionTypes): CoinState => {
  switch (action.type) {
    case actionTypes.COIN_REQUEST:
      return {
        ...state,
        isLoadingCoinData: true,
        coinError: null,
      };
    case actionTypes.COIN_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        isLoadingCoinData: false,
        coinError: null,
      };
    case actionTypes.COIN_ERROR:
      return {
        ...state,
        isLoadingCoinData: false,
        coinData: null,
        coinError: action.payload.coinError,
      };
    default:
      return state;
  }
};

export default coinReducer;
