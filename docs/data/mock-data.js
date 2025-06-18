// モックデータ
const mockData = {
    solanaPrice: {
        price: 158.42,
        priceChange24h: 8.73,
        priceChangePercentage24h: 5.83,
        marketCap: 75840000000,
        volume24h: 2890000000,
        lastUpdated: new Date().toISOString()
    },

    networkStats: {
        tps: 3847,
        averageBlockTime: 400,
        totalTransactions: 285000000000,
        totalAccounts: 185000000,
        validatorCount: 1956,
        stakeAmount: 389500000,
        lastUpdated: new Date().toISOString()
    },

    newsArticles: [
        {
            id: '1',
            title: 'Solana Labs、新しいWeb3モバイル戦略を発表',
            titleJa: 'Solana Labs、新しいWeb3モバイル戦略を発表',
            summary: 'Solana Labsは、モバイルファーストのWeb3体験を提供する新戦略を発表しました。新しいSaga Phone 2の詳細も明らかに。',
            author: 'Solana Japan編集部',
            source: 'Solana Labs',
            publishedAt: '2024-06-18T10:00:00Z',
            category: { name: 'テクノロジー', nameJa: 'テクノロジー' },
            importance: 'high',
            sentiment: 'positive'
        },
        {
            id: '2',
            title: 'Jupiter DEXが過去最高の取引量を記録',
            titleJa: 'Jupiter DEXが過去最高の取引量を記録',
            summary: 'SolanaベースのDEXアグリゲーターJupiterが、24時間取引量で新記録を達成。DeFiエコシステムの成長を示す指標となっています。',
            author: 'DeFiアナリスト',
            source: 'Jupiter Exchange',
            publishedAt: '2024-06-18T08:30:00Z',
            category: { name: 'DeFi', nameJa: 'DeFi' },
            importance: 'medium',
            sentiment: 'positive'
        },
        {
            id: '3',
            title: 'Solana財団、日本でのエコシステム拡大を支援',
            titleJa: 'Solana財団、日本でのエコシステム拡大を支援',
            summary: 'Solana財団が日本市場での開発者支援プログラムを拡充。新たな助成金制度とハッカソンイベントを予定。',
            author: '暗号資産ニュース',
            source: 'Solana Foundation',
            publishedAt: '2024-06-18T06:15:00Z',
            category: { name: 'エコシステム', nameJa: 'エコシステム' },
            importance: 'high',
            sentiment: 'positive'
        }
    ],

    defiProtocols: [
        {
            id: 'jupiter',
            name: 'Jupiter',
            tvl: 1850000000,
            tvlChange24h: 125000000,
            tvlChangePercentage24h: 7.24,
            category: 'dex',
            apy: 12.5,
            lastUpdated: new Date().toISOString()
        },
        {
            id: 'marinade',
            name: 'Marinade Finance',
            tvl: 980000000,
            tvlChange24h: -15000000,
            tvlChangePercentage24h: -1.51,
            category: 'staking',
            apy: 8.9,
            lastUpdated: new Date().toISOString()
        },
        {
            id: 'orca',
            name: 'Orca',
            tvl: 675000000,
            tvlChange24h: 42000000,
            tvlChangePercentage24h: 6.63,
            category: 'dex',
            apy: 15.8,
            lastUpdated: new Date().toISOString()
        },
        {
            id: 'solend',
            name: 'Solend',
            tvl: 425000000,
            tvlChange24h: 8500000,
            tvlChangePercentage24h: 2.04,
            category: 'lending',
            apy: 4.2,
            lastUpdated: new Date().toISOString()
        }
    ]
};

// データを外部からアクセス可能にする
window.mockData = mockData;