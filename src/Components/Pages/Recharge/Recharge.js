import React from 'react';
import './Recharge.css';
import TopMenu from '../../TopMenu/TopMenu';


class Recharge extends React.Component {
    render() {
        return (

            <div className="container">
            <div className="underlay">
                <TopMenu />
            </div>

        
        <div className="header">
                    <h2>Recharge</h2> <br/><h4>Prepaid and Postpaid Transactions</h4>
                    <hr/>
                </div>

                <div className="reg_form">
                <input type="number" name="Amount"   placeholder="Enter Amount (₦)" autocomplete="on" autofocus required />
                        
                        <input type="text" name="Meter Number"  max="9" placeholder="Enter your Meter Number"  autocomplete="on" required />
                      
                        
                        <select id="disco" name="disco" required>
                            <option value="australia">Select disco</option>
                            <option value="canada">Eko Electric</option>
                            <option value="usa">ADEC</option>
                        </select>
                        <button>Continue</button>

                    

                </div>

        

        </div>

            
    

            
        )
    }

}


export default Recharge;


