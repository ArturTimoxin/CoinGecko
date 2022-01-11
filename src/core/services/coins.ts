import API from '../api';
import { AxiosPromise } from 'axios';
import { CoinMarket, Coin } from '../models/coins';
import { DEFAULT_CURRENCY, COIN_MARKETS_DEFAULT_ORDER } from '../appConstants';

function fetchCoinMarkets({
  page,
  vsCurrency = DEFAULT_CURRENCY,
  order = COIN_MARKETS_DEFAULT_ORDER,
  perPage = 20,
}: {
  page: number;
  order?: string;
  vsCurrency?: string;
  perPage?: number;
}): AxiosPromise<CoinMarket[]> {
  return API({
    url: '/v3/coins/markets',
    params: {
      vs_currency: vsCurrency,
      page,
      order,
      per_page: perPage,
    },
  });
}

function fetchCoinData({ id }: { id: string }): AxiosPromise<Coin> {
  return API({
    url: `/v3/coins/${id}`,
    // TODO: can be changed in the next app versions
    params: {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });
}

export default {
  fetchCoinMarkets,
  fetchCoinData,
};
