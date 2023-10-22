import React from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <ul className='footer-left'>
                    <li className='footer-item'>
                        <a href='#'>Privacy Policy</a></li>
                    <li className='footer-item'>
                        <a href='#'>Terms & Conditions</a>
                    </li>
                    <li className='footer-item'>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>

                <div className='footer_right'>
                    <p className='copywrite'>Copywrite@Team_Visual_Master</p>
                </div>
           </div>
        </footer>
    );
}

export default Footer;