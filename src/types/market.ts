export interface SolanaPrice {
  price: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  totalSupply: number;
  lastUpdated: string;
}

export interface TokenMetrics {
  symbol: string;
  name: string;
  address: string;
  price: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCap?: number;
  volume24h: number;
  liquidity?: number;
  holders?: number;
  logo?: string;
  lastUpdated: string;
}

export interface DeFiProtocol {
  id: string;
  name: string;
  tvl: number;
  tvlChange24h: number;
  tvlChangePercentage24h: number;
  apy?: number;
  category: 'dex' | 'lending' | 'yield-farming' | 'staking' | 'other';
  tokens: string[];
  website?: string;
  logo?: string;
  lastUpdated: string;
}

export interface NetworkStats {
  tps: number;
  averageBlockTime: number;
  totalTransactions: number;
  totalAccounts: number;
  epochInfo: {
    epoch: number;
    slotIndex: number;
    slotsInEpoch: number;
    absoluteSlot: number;
  };
  validatorCount: number;
  stakeAmount: number;
  lastUpdated: string;
}

export interface MarketSentiment {
  fearGreedIndex?: number;
  socialMentions24h: number;
  socialSentiment: 'bullish' | 'bearish' | 'neutral';
  tradingVolume24h: number;
  activeAddresses24h: number;
  lastUpdated: string;
}