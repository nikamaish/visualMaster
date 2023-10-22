import React from 'react';
import './Risk.css';

const RiskWarning=()=>{
    return (
        <div className='riskwarning'>
            <h3 className='risk-heading'>Risk-Warning</h3>
            <p className='risk-para'>Our Real-Time Data Visualization Dashboard is a powerful tool, but it's 
               essential to understand the associated risks. Market volatility is a constant factor, and while 
               our dashboard provides valuable data, it should be viewed as informative rather than as financial 
               advice. Data accuracy is our priority, but the speed of real-time data means occasional inaccuracies 
               can occur, so we encourage cross-referencing. Technical issues can arise unexpectedly, leading to 
               temporary disruptions in data access.
            </p>
            <p className='risk-para'>Users should remember to use this information at their own risk and consult 
               with a qualified financial advisor for critical decisions. Past performance doesn't guarantee future 
               results, so we recommend prudence when making financial choices. All investments carry inherent risks,
               and our dashboard is not a substitute for expert guidance. Users are responsible for complying with 
               legal and regulatory requirements when using our tool.
            </p>
            <p className='risk-para'>By utilizing our Real-Time Data Visualization Dashboard, you acknowledge these 
               risks and terms. For any questions or concerns about the tool's usage, consider consulting with legal 
               and financial professionals.
            </p>
        </div>
    );
}

export default RiskWarning;