import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function CryptoGraphs() {
  const [cryptoData, setCryptoData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Bitcoin Price (USD)',
        data: [],
        borderColor: 'blue',
        fill: false,
      },
    
      // Add more datasets for other data streams
    ],
  });

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const apiKey = '2bef53cce2bbcf3a5f288ac7215437101d6159c792f8743e1b2c2c568d6a608c'; // Replace with your API key
    const websocketURL = `wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`;
    const newSocket = new WebSocket(websocketURL);

    newSocket.onopen = (event) => {
      console.log('WebSocket opened:', event);
      setSocket(newSocket);

      // Create and send subscription messages to subscribe to different channels
      const subscriptions = [
        '5~CCCAGG~BTC~USD',
        // '0~Coinbase~ETH~USD',
        // Add more subscriptions for other data streams
      ];

      // Add more subscriptions for other data streams
      subscriptions.forEach((sub) => {
        newSocket.send(JSON.stringify({
          action: 'SubAdd',
          subs: [sub],
        }));
      });
    };

    newSocket.onmessage = (event) => {
      console.log('WebSocket message received:', event.data);

      const data = JSON.parse(event.data);
      const timestamp = new Date(data.TS * 1000).toLocaleTimeString();
      const price = data.PRICE;

      // Update the corresponding dataset based on the data stream
      if (data.FROMSYMBOL === 'BTC') {
        setCryptoData((prevData) => [
          ...prevData,
          { timestamp, price, symbol: 'Bitcoin' },
        ]);
      // } else if (data.FROMSYMBOL === 'ETH') {
      //   setCryptoData((prevData) => [
      //     ...prevData,
      //     { timestamp, price, symbol: 'Ethereum' },
      //   ]);
      }
      // Add more conditions for other data streams
    };

    newSocket.onerror = (event) => {
      console.error('WebSocket error:', event);
    };

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []); // Empty dependency array to open the WebSocket once

  useEffect(() => {
    if (cryptoData.length > 0) {
      const labels = cryptoData.map((data) => data.timestamp);
      const bitcoinPrices = cryptoData
        .filter((data) => data.symbol === 'Bitcoin')
        .map((data) => data.price);
      const ethereumPrices = cryptoData
        .filter((data) => data.symbol === 'Ethereum')
        .map((data) => data.price);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Bitcoin Price (USD)',
            data: bitcoinPrices,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Ethereum Price (USD)',
            data: ethereumPrices,
            borderColor: 'red',
            fill: false,
          },
          // Add more datasets for other data streams
        ],
      });
    }
  }, [cryptoData]);

  return (
    <div>
      <h1>Real-Time Crypto Price Chart</h1>
      {cryptoData.length > 0 ? (
        <Line data={chartData} options={{ responsive: true }} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default CryptoGraphs;
