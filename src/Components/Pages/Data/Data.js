import React from 'react';
import './Data.css';
import TopMenu from '../../TopMenu/TopMenu';

class Data extends React.Component {
    render() {
        return (

            <div className="container">
        <div className="underlay">
        <TopMenu />    
        </div>
        <div className="main">
            <div className="data_canvas">
                <div className="header">
                    <h2>Preview</h2> <br/>
                    <h5>Subscription details</h5>
                    <hr/>
                </div>
                <div className="data_content">
                    <h4>Distribution Company</h4>
                    <br/>
                    <h3>IKEJA ELECTRIC</h3>
                </div>
                <div className="data_content">
                        <h4>Meter Number</h4>
                        <br/>
                        <h3>54150686738</h3>
                    </div>
                <div className="data_content">
                            <h4>Account Number</h4>
                            <br/>
                            <h3>093457892</h3>
                    </div>
                <div className="data_content">
                            <h4>Type</h4>
                            <br/>
                            <h3>Prepaid</h3>
                    </div> 
                <div className="data_content">
                            <h4>Account Name</h4>
                            <br/>
                            <h3>Adeola Oni</h3>
                    </div> 
                <div className="data_content">
                            <h4>Registered Number</h4>
                            <br/>
                            <h3>09027663173</h3>
                    </div>
                <div className="data_content">
                            <h4>Meter Address</h4>
                            <br/>
                            <h3>19, Oremeta Street<br/>Oregun, Lagos.</h3>
                    </div>
                <div className="data_content">
                            <h4>Amount[₦]</h4>
                            <br/>
                            <h3>2000</h3>
                    </div>
                <div className="data_content">
                    <div className="tooltip">
                            <h6>+ Convenience charge: ₦100<br/>What is convenience charge? Click here <span className="tooltiptext">A CBN charge plus transaction cost for fund transfer within banks and this platform. Thank you for your understanding.</span></h6>

                    </div>
                            
                
                            
                    
                    </div>
                <div className="data_button">
                        <button>Back</button>
                    <button>Pay total ₦2100</button>
                    
                </div>
                      
            </div>
        </div>
    </div>

        )
    }
}

export default Data;