// import React from 'react';
// import './headsection.css';

// const Headsection = () => {
//   return (
//     <div>
//       <nav className="navbar">
//        <ul className='navbar-ul'>
//       <li><a href="/">Home</a></li>
//       <li><a href="/">Dashboard</a></li>
//       <li><a href="/">Settings</a></li>
//        </ul>
//       </nav>

//       <div className="Hero_Section">
//         {/* Left Section */}
//         <div className="Left_Section">
//           <h2>Home</h2>
//           <p>Unleash Real-Time Insights for Informed Decision-Making</p>

//           <h2 className="Second_h2">Transforming Data into Dynamic Insights with Real-Time Precision...</h2>
//            <div className='icons'>

//             <img className = "logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
//             <img className = "logos"  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png" alt="" />
//            </div>
//         </div>

//         <div className="Right_Section">
//           <img style={{height: "300px", marginRight:"100px"}} src="https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=170667a&w=0&k=20&c=e_N_FMlvHrBfnVXtdVi5mIBcK6UkZybHfDV7ff5_oS4=" alt="" />
//         </div>
//       </div>

//       <div className="Lower_Section">
//         <ul>Dynamic Data</ul>

//         <ul style={{borderRight :"3px solid white", borderLeft:"3px solid white" , padding:"0px 90px", height:"40px"}}>Easy Understandings</ul>

//         <ul>Insights of Data</ul>
//       </div>
//     </div>
//   );
// };

// export default Headsection;



import React, { useState } from 'react';
import './headsection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeadSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
    
      {/* <section id="home">
    <div className="intro">
        <div className="left">
            <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut voluptatum at nobis architecto quibusdam vel molestiae ab rerum aspernatur delectus ex fuga nam voluptate soluta natus recusandae vitae, labore doloremque voluptatem. Iste vitae sit, nostrum quo tempore aut voluptate, modi nisi iusto nemo ducimus soluta quos? Accusamus, perferendis. Soluta.</p>
         <button class="custom-button"> <a href="./form.html"><b>Prediction</b></a></button>     
        <img className = "logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
       <img className = "logos"  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png" alt="" />
    </div>

        <div className="right">
            <img src="" height="400px" alt="img" class="churn-img"/>
        </div>

    </div>
  </section> */}


<div className="Hero_Section">
      {/* Left Section */}
         <div className="Left_Section">
         <h2>Home</h2>
           <p>Unleash Real-Time Insights for Informed Decision-Making</p>

          <h2 className="Second_h2">Transforming Data into Dynamic Insights with Real-Time Precision...</h2>
          <div className='icons'>
            <img className = "logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
             <img className = "logos"  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png" alt="" />

              {/* <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" className='logos' /></a> 
              <a href="https://linkedin.com/"><FontAwesomeIcon icon={faLinkedin} size="2x"className='logos' /></a>
              <a href="https://mail.google.com/"><FontAwesomeIcon icon={faEnvelope} size="2x" className='logos'/></a> */}

           </div>
         </div>

        <div className="Right_Section">
        <img src="/icons/simplebar.png" alt="" />

     </div>
    </div>

{/* <br /> */}
   <div className="Lower_Section">
         <ul>Dynamic Data</ul>

       <ul className='vertical-line'>Easy Understandings</ul>

      <ul>Insights of Data</ul>
       </div>
    </div>


    

    
  );
};

export default HeadSection;

