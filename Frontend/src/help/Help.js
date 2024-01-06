import React from 'react';
import './help.css';    //import the css file

const Help=()=>{
    const imageStyle={
        width:'80px',
        height:'80px'
    };

    return (
        <section className='container'>
            <div className='help-heading'>
                <h1 className='heading-name'>How can we help you ?</h1>
            </div>

            <div className='help'>
                <div className='help-para'>
                    <img src='/icons/FAQs1.png' style={{ width: '90px', height: '90px' }}></img>
                    <h4 className='sub-heading'>FAQs</h4>
                    <p className='content'>Find answers to common questions about real-time data 
                       visualization and maximize the potential of your dashboard.
                    </p>
                    <a href='#' className='link'>View More</a>
                </div>
                <div className='help-para'>
                    <img src='/icons/feedback.png' style={imageStyle}></img>
                    <h4 className='sub-heading'>Help</h4>
                    <p className='content'>Feel free to reach out with your queries via email, and our 
                       team will respond promptly.
                    </p>
                    <a href='#' className='link'>Learn More</a>
                </div>
                <div className='help-para'>
                    <img src='/icons/help.png' style={imageStyle}></img>
                    <h4 className='sub-heading'>Expert Assistance</h4>
                    <p className='content'>Reach out to our support team for real-time data visualization 
                       guidance and troubleshooting.
                    </p>
                    <a href='#' className='link'>Get Help</a>
                </div>
            </div>
        </section>
    );
}

export default Help;