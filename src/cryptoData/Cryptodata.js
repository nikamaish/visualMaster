// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './cryptoData.css';

// function CryptoWidget() {
//   const [cryptoData, setCryptoData] = useState({});
//   const symbols = ['bitcoin', 'ethereum', 'ripple', 'solana'];

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = {};
//       for (const symbol of symbols) {
//         try {
//           const response = await axios.get(`https://api.coinpaprika.com/v1/tickers`, {
//             params: {
//               ids: symbol,
//               quotations: 'USD',
//             },
//           });
//           data[symbol] = response.data[0]; // The data is returned as an array
//         } catch (error) {
//           console.error('Error fetching cryptocurrency data: ', error);
//         }
//       }
//       setCryptoData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="crypto-widget-container">
//       <h2>Cryptocurrency Data</h2>
//       <div className="column-header">
//         <div>Cryptocurrency</div>
//         <div>Current Price (USD)</div>
//         <div>1-Hour Change</div>
//         <div>24-Hour Change</div>
//         <div>7-Day Change</div>
//         <div>Market Cap</div>
//       </div>
//       <ul>
//         {Object.entries(cryptoData).map(([symbol, data]) => (
//           <li key={symbol}>
//             <div className="column-item">
//               <div>{symbol.toUpperCase()}</div>
//               <div>${data.quotes.USD.price.toFixed(2)}</div>
//               <div>{data.quotes.USD.percent_change_1h ? `${data.quotes.USD.percent_change_1h.toFixed(2)}%` : 'N/A'}</div>
//               <div>{data.quotes.USD.percent_change_24h ? `${data.quotes.USD.percent_change_24h.toFixed(2)}%` : 'N/A'}</div>
//               <div>{data.quotes.USD.percent_change_7d ? `${data.quotes.USD.percent_change_7d.toFixed(2)}%` : 'N/A'}</div>
//               <div>${data.quotes.USD.market_cap}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CryptoWidget;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './cryptoData.css'; // Import your CSS file

// const RealTimeData = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       try {
//         const response = await axios.get('https://api.coincap.io/v2/assets');
//         const data = response.data.data;

//         // Here, you can filter or select the cryptocurrencies you want to display
//         const selectedCryptos = data.filter(crypto => {
//           // Replace with your criteria for selecting cryptocurrencies
//           // For example, you can filter based on rank or other properties
//           return crypto.rank <= 20; // Display the top 10 cryptocurrencies
//         });

//         setCryptoData(selectedCryptos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Fetch data initially
//     fetchCryptoData();

//     // Set up a polling interval to fetch data periodically (e.g., every 10 seconds)
//     const interval = setInterval(fetchCryptoData, 10000);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Real-Time Crypto Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Symbol</th>
//             <th>Price (USD)</th>
//             <th>Market Cap (USD)</th>
//             <th>24Hr Change (%)</th>
//             <th>Supply</th>
//             <th>Max Supply</th>
//             <th>24Hr Volume (USD)</th>
//             <th>VWAP (USD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cryptoData.map((crypto, index) => (
//             <tr key={index}>
//               <td>{crypto.name}</td>
//               <td>{crypto.symbol}</td>
//               <td>${parseFloat(crypto.priceUsd).toFixed(2)}</td>
//               <td>${parseFloat(crypto.marketCapUsd).toFixed(2)}</td>
//               <td>{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</td>
//               <td>{parseFloat(crypto.supply).toFixed(2)}</td>
//               <td>{parseFloat(crypto.maxSupply).toFixed(2)}</td>
//               <td>${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</td>
//               <td>${parseFloat(crypto.vwap24Hr).toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RealTimeData;
