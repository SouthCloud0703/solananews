// ユーティリティ関数
function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toLocaleString();
}

function formatCurrency(num) {
    return '$' + formatNumber(num);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) {
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        return `${diffMinutes}分前`;
    } else if (diffHours < 24) {
        return `${diffHours}時間前`;
    } else {
        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays}日前`;
    }
}

// マーケットデータの更新
function updateMarketData() {
    const data = window.mockData;
    
    // SOL価格
    document.getElementById('sol-price').textContent = data.solanaPrice.price.toFixed(2);
    
    const changeElement = document.getElementById('sol-change');
    const change = data.solanaPrice.priceChangePercentage24h;
    changeElement.textContent = `${change > 0 ? '+' : ''}${change.toFixed(2)}% (24h)`;
    changeElement.className = `price-change ${change > 0 ? 'positive' : 'negative'}`;
    
    // その他の統計
    document.getElementById('market-cap').textContent = formatCurrency(data.solanaPrice.marketCap);
    document.getElementById('volume').textContent = formatCurrency(data.solanaPrice.volume24h);
    document.getElementById('tps').textContent = data.networkStats.tps.toLocaleString();
    
    // ネットワーク統計
    document.getElementById('validator-count').textContent = data.networkStats.validatorCount.toLocaleString();
    document.getElementById('total-accounts').textContent = formatNumber(data.networkStats.totalAccounts);
    document.getElementById('block-time').textContent = data.networkStats.averageBlockTime + 'ms';
    document.getElementById('stake-amount').textContent = formatNumber(data.networkStats.stakeAmount) + ' SOL';
}

// ニュース記事の表示
function displayNews() {
    const newsGrid = document.getElementById('news-grid');
    const articles = window.mockData.newsArticles;
    
    newsGrid.innerHTML = articles.map(article => `
        <article class="news-card">
            <div class="news-image">
                📰 ${article.category.nameJa}
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.titleJa}</h3>
                <p class="news-summary">${article.summary}</p>
                <div class="news-meta">
                    <span class="news-category">${article.category.nameJa}</span>
                    <span class="news-date">${formatDate(article.publishedAt)}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// DeFiプロトコルの表示
function displayDeFiProtocols() {
    const defiGrid = document.getElementById('defi-grid');
    const protocols = window.mockData.defiProtocols;
    
    const categoryLabels = {
        'dex': 'DEX',
        'lending': 'レンディング',
        'staking': 'ステーキング',
        'yield-farming': 'イールドファーミング'
    };
    
    defiGrid.innerHTML = protocols.map(protocol => `
        <div class="defi-card">
            <div class="defi-header">
                <div class="defi-logo">${protocol.name.charAt(0)}</div>
                <div>
                    <div class="defi-name">${protocol.name}</div>
                    <div class="news-category">${categoryLabels[protocol.category]}</div>
                </div>
            </div>
            <div class="defi-stats">
                <div class="defi-stat">
                    <h4>TVL</h4>
                    <div class="value">${formatCurrency(protocol.tvl)}</div>
                </div>
                <div class="defi-stat">
                    <h4>24h変動</h4>
                    <div class="value ${protocol.tvlChangePercentage24h > 0 ? 'positive' : 'negative'}">
                        ${protocol.tvlChangePercentage24h > 0 ? '+' : ''}${protocol.tvlChangePercentage24h.toFixed(2)}%
                    </div>
                </div>
                <div class="defi-stat">
                    <h4>APY</h4>
                    <div class="value">${protocol.apy?.toFixed(1) || '--'}%</div>
                </div>
                <div class="defi-stat">
                    <h4>カテゴリ</h4>
                    <div class="value">${categoryLabels[protocol.category]}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// スムーズスクロール
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// データの定期更新
function startDataRefresh() {
    // 実際のアプリケーションでは、ここでAPIからデータを取得
    setInterval(() => {
        // モックデータを少し変動させる
        const data = window.mockData;
        
        // 価格を±2%で変動
        const priceVariation = (Math.random() - 0.5) * 0.04;
        data.solanaPrice.price *= (1 + priceVariation);
        data.solanaPrice.priceChangePercentage24h += priceVariation * 100;
        
        // TPSを変動
        data.networkStats.tps = Math.floor(3000 + Math.random() * 2000);
        
        updateMarketData();
    }, 30000); // 30秒ごとに更新
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    // モックデータの読み込みを待つ
    if (typeof window.mockData !== 'undefined') {
        updateMarketData();
        displayNews();
        displayDeFiProtocols();
        setupSmoothScrolling();
        startDataRefresh();
    } else {
        // モックデータが読み込まれていない場合は少し待つ
        setTimeout(() => {
            updateMarketData();
            displayNews();
            displayDeFiProtocols();
            setupSmoothScrolling();
            startDataRefresh();
        }, 100);
    }
});

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('アプリケーションエラー:', e.error);
});

// パフォーマンス監視
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`ページ読み込み時間: ${loadTime.toFixed(2)}ms`);
});