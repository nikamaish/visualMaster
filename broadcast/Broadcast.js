// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './broadcast.css'; // Import your CSS file

// const Broadcast = () => {
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
//     const interval = setInterval(fetchCryptoData, 100);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

// return (
//   <div>
//     <h1>Real-Time Crypto Data</h1>
    
//     <div className="crypto-list-container">
      
//       <div className="crypto-list">
//         {cryptoData.map((crypto, index) => (
//           <div key={index} className="crypto-item">
//             <div className="crypto-right">
//               <div className="crypto-name">{crypto.name}</div>
//               <div className="crypto-symbol">{crypto.symbol}</div>
//             </div>
//             <div className="crypto-left">
//               <div className="crypto-price">${parseFloat(crypto.priceUsd).toFixed(2)}</div>
//               <div
//                 className={`crypto-24hr-change ${parseFloat(crypto.changePercent24Hr) < 0 ? 'negative' : 'positive'}`}
//               >
//                 {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// };

// export default Broadcast;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './broadcast.css'; // Import your CSS file


const Broadcast = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        const data = response.data.data;

        // Here, you can filter or select the cryptocurrencies you want to display
        const selectedCryptos = data.filter(crypto => {
          // Replace with your criteria for selecting cryptocurrencies
          // For example, you can filter based on rank or other properties
          return crypto.rank <= 20; // Display the top 10 cryptocurrencies
        });

        setCryptoData(selectedCryptos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchCryptoData();

    // Set up a polling interval to fetch data periodically (e.g., every 10 seconds)
    const interval = setInterval(fetchCryptoData, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-Time Crypto Data</h1>
      <div className="crypto-list-container">
        <div className="crypto-list">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="crypto-item">
              <div className="crypto-right">
              <div className="crypto-name">{crypto.name}</div>
              <div className="crypto-symbol">{crypto.symbol}</div>
            </div>
            <div className="crypto-left">
              <div className="crypto-price">${parseFloat(crypto.priceUsd).toFixed(2)}</div>
              <div
                className={`crypto-24hr-change ${parseFloat(crypto.changePercent24Hr) < 0 ? 'negative' : 'positive'}`}
              >
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </div>
            </div>
              {/* <div className="crypto-24hr-volume">${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</div> */}
            </div>
          ))}
        </div>
        <div className="crypto-list">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="crypto-item">
              <div className="crypto-right">
              <div className="crypto-name">{crypto.name}</div>
              <div className="crypto-symbol">{crypto.symbol}</div>
            </div>
            <div className="crypto-left">
              <div className="crypto-price">${parseFloat(crypto.priceUsd).toFixed(2)}</div>
              <div
                className={`crypto-24hr-change ${parseFloat(crypto.changePercent24Hr) < 0 ? 'negative' : 'positive'}`}
              >
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Broadcast;