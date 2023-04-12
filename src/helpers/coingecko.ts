import axios from "axios";

interface IRoi {
  times: number;
  currency: string;
  percentage: number;
}

export type PropsCurrency = {
  image: string;
  symbol: string;
  total_supply: number;
  total_volume: number;
  name: string;
  last_updated: string;
  id: string;
  atl_date: number;
  ath_date: number;
  ath: number;
  ath_change_percentage: number;
  atl: number;
  atl_change_percentage: number;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: IRoi | null;
};

interface IMarketPrices {
  prices: number[][];
}

export const getAllCurrencies = async (ids = "bitcoin,ethereum,binancecoin,binance-usd,tether") => {
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`;

  const res = await axios.get<PropsCurrency[]>(api);

  return res.data;
};

export const getMarketChartRange = async (id: string, fromUnix: number, toUnix: number) => {
  const api = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${fromUnix}&to=${toUnix}`;

  const res = await axios.get<IMarketPrices>(api);

  return res.data.prices;
};
