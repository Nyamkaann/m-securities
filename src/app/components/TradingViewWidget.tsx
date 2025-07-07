import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Set up the required DOM structure
    container.current.innerHTML = `
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span class="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    `;

    // Now append the script to the correct child
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `{
      "dataSource": "S&P500",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "grouping": "sector",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "dark",
      "exchanges": [],
      "hasTopBar": false,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    }`;

    // Append the script to the widget container
    const widgetDiv = container.current.querySelector('.tradingview-widget-container__widget');
    if (widgetDiv) {
      widgetDiv.appendChild(script);
    }

    // Clean up on unmount
    return () => {
      if (container.current) container.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ width: '100%', height: '500px', marginTop: '2rem' }}
    />
  );
}

export default memo(TradingViewWidget); 