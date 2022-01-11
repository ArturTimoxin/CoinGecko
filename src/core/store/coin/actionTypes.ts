import { Coin } from '../../models/coins';

export const COIN_REQUEST = 'COIN_REQUEST';
export const COIN_SUCCESS = 'COIN_SUCCESS';
export const COIN_ERROR = 'COIN_ERROR';

export type CoinRequest = {
  type: typeof COIN_REQUEST;
  payload: {
    id: string;
  };
};

export type CoinSuccess = {
  type: typeof COIN_SUCCESS;
  payload: Coin;
};

export type CoinError = {
  type: typeof COIN_ERROR;
  payload: {
    coinError: string;
  };
};

export type CoinActionTypes = CoinRequest | CoinSuccess | CoinError;
