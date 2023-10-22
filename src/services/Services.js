import React from 'react';
import './Services.css'

const Subscription = () => {
  return (
    <div className='subscription'>

      <div className="rectangular-container">

      <div className="top-heading">
      <div className='heading'>
        <h1>Our Services</h1>
      </div>
      </div>

    <div className="sectionss">
      <div className='leftt'>
        <img src="/icons/analysis.png" className='img-icons' alt="" />
        <h1>Visualization</h1>
        <p>Our visualization services provide stunning and informative data visualizations to help you gain insights into your data. We use cutting-edge tools and techniques to present data in a clear and engaging manner.' </p>
      </div>
      <div className='midd' >
      <img src="/icons/initiative.png"  className='img-icons'alt="" />
        <h1>Real-Time Insights</h1>
        <p>Our Real-Time Insights service offers you up-to-the-minute information and analysis, allowing you to make data-driven decisions as events unfold. With our tools and expertise, you can respond swiftly to changing circumstances and seize opportunities as they arise. </p>
      </div>

      <div className="rightt">
      <img src="/icons/improvement.png" className='img-icons' alt="" />
          <h1>Suggestions</h1>
          <p>With the power of artificial intelligence, we offer instantaneous recommendations and insights as data flows in, helping you make data-driven decisions with agility and precision.</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Subscription;
