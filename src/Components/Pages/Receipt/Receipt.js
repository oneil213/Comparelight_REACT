import React from 'react';
import './Receipt.css';




class Receipt extends React.Component {

    render() {
        return (

            <div className="receipt_container">
                <div className="header_Receipts">
                <div className="logo" >
                        <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572364686/logo_header_z68otf.png" alt="Ikeja Electric logo" />
                    </div>
                    <h2>Payment Receipt</h2>
                    <h4>Utility Bill</h4>

        </div>
        <div className="transaction">
        <div className="transaction_header">
                <h1>Transaction Details</h1>
            </div>
            <hr className="new1" />
            <div className="transaction_titles">
            <div className="left_components">
                    <div className="item_titles">
                        <h4>Receipt Number</h4>
                        <h3>T23489742345678</h3>
                    </div>
                    <div className="item_titles">
                            <h4>Recharge Amount (₦)</h4>
                            <h3>200</h3>
                        </div>
                        <div className="item_titles">
                                <h4>Rate (₦)</h4>
                                <h3>20.30</h3>
                            </div>
                </div>


                <div className="right_components">
                        <div className="item_titles2">
                            <h4>Transaction Date</h4>
                            <h3>20/10/2011</h3>
                        </div>
                        <div className="item_titles2">
                                <h4>Token Details (Prepaid)</h4>
                                <h3>23962749640217364075</h3>
                            </div>
                            <div className="item_titles2">
                                    <h4>Units (Kwh)</h4>
                                    <h3>240</h3>
                                </div>
                    </div>
            </div>
            <hr className="new2" />
        </div>

        <div className="meter_details">
        <div className="meter_header">
                        <h1>Meter Details</h1>
                    </div>
                    <hr className="new1" />
                    <div className="meter_titles">
                    <div className="left_components">
                                    <div className="item_titles">
                                        <h4>Disco</h4>
                                        <h3>Ikeja Electric</h3>
                                    </div>
                                    <div className="item_titles">
                                            <h4>Meter Type</h4>
                                            <h3>Prepaid</h3>
                                        </div>
                                        <div className="item_titles">
                                                <h4>Address</h4>
                                                <h3>PLOT 3480, BKL 2 ENG<br/>
                                                LANRE DIVINE,<br/>
                                            ESTATE, AMUWO</h3>
                                            </div>
                                </div>
                                <div className="right_components">
                                        <div className="item_titles2">
                                            <h4>Meter Number</h4>
                                            <h3>54023563460</h3>
                                        </div>
                                        <div className="item_titles2">
                                                <h4>Account Number</h4>
                                                <h3>0134672356</h3>
                                            </div>
                                            <div className="item_titles2">
                                                    <h4>Registered Number</h4>
                                                    <h3>09027663173</h3>
                                                </div>
                                    </div>
                    </div>
                    <hr className="new2" />
                    <div className="receipt_footer">
                            <h4>www.comparelight.com</h4>
                            <h4>info@comparelight.com</h4>
                            <h4>+2348174735017</h4>
                        </div>
        </div>
        

            </div>

        )
    }


   





   
}

export default Receipt;