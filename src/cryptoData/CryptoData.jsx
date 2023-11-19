import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoData.css';

const formatNumber = (number) => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M';
  }
  return number.toFixed(2);
};

const cryptoIcons = {
  Bitcoin: 'bitcoin.png',
  Ethereum: 'ethereum.png',
  Tether: 'tether.png',
  BNB: 'bnb.png',
  USDC: 'dollar-symbol.png',
  XRP: 'xrp.png',
  Solana: 'solana.png',
  Cardano: 'cardano.png',
  Dogecoin: 'dogecoin.png',
  TRON: 'trx@2x.png',
  // Add more cryptocurrency icons as needed
};

const RealTimeData = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        const data = response.data.data;

        const selectedCryptos = data.filter(crypto => {
          return crypto.rank <= 10;
        });

        setCryptoData(selectedCryptos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();

    const interval = setInterval(fetchCryptoData, 8000);

    return () => clearInterval(interval);
  }, []);




  
  return (
    <div className="crypto-container">
      {/* <h1>Real-Time Crypto Data</h1> */}
      <table className='crypto-table'>
        <thead>
          <tr>
            <th className='rank-cell'>Rank</th>
            <th className='name-cell'>Name</th>
            {/* <th>Name</th> */}
            {/* <th>Symbol</th> */}
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24Hr Change (%)</th>
            <th>24Hr Volume (USD)</th>
            
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td className='rank-cell'>{crypto.rank}</td>
              <td className='name-cell'>
               <div className="crypto-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/${cryptoIcons[crypto.name]}`}
                    alt={crypto.name}
                    width="30"
                  />
                     <div className="crypto-details">
      <span className="crypto-name">{crypto.name}</span>
      <br />
      <span className="crypto-symbol">{crypto.symbol}</span>
    </div>
                    
                </div>
              
              </td>
              {/* <td>{crypto.name},{crypto.symbol}</td> */}
              {/* <td>{crypto.symbol}</td> */}
              <td>${formatNumber(parseFloat(crypto.priceUsd))}</td>
              <td>${formatNumber(parseFloat(crypto.marketCapUsd))}</td>
              <td className={`percent-change ${parseFloat(crypto.changePercent24Hr) >= 0 ? 'positive' : 'negative'}`}>
              {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
            </td>
              <td>${formatNumber(parseFloat(crypto.volumeUsd24Hr))}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeData;



  
  




  