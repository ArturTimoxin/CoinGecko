import { CoinMarket } from '../../models/coins';

export const COIN_MARKETS_REQUEST = 'COIN_MARKETS_REQUEST';
export const COIN_MARKETS_SUCCESS = 'COIN_MARKETS_SUCCESS';
export const COIN_MARKETS_ERROR = 'COIN_MARKETS_ERROR';

export type CoinMarketsRequest = {
  type: typeof COIN_MARKETS_REQUEST;
  payload: {
    page: number;
    vsCurrency: string;
    order: string;
  };
};

export type CoinMarketsSuccess = {
  type: typeof COIN_MARKETS_SUCCESS;
  payload: {
    coinMarkets: CoinMarket[];
    page: number;
  };
};

export type CoinMarketsError = {
  type: typeof COIN_MARKETS_ERROR;
  payload: {
    coinMarketsError: string;
  };
};

export type HomeActionTypes = CoinMarketsRequest | CoinMarketsSuccess | CoinMarketsError;
