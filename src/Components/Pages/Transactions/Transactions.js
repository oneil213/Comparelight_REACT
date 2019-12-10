import React from 'react';
import './Transactions.css';
import TopMenu from '../../TopMenu/TopMenu';


class Transactions extends React.Component {

    render() {
        return(
            <div className="container">
            <div className="underlay">
            <TopMenu />    
            </div>
                
            <div className="header">
                <h2>Transactions</h2> <br/><h4>View previous transactions</h4>
               <hr/>
            </div>
            <div className="transaction_board">
                <div className="left_board">
                    <div className="recharged_meters">
                        <h3>Recharged Meters</h3>
                        <select id="select Meters" name="select Meters" required>
                            <option value="045348794232">045348794232</option>
                            <option value="569248794232">569248794232</option>
                        </select>
                    </div>
    
                    <div className="account_history">
                        <h3>Account History</h3>
                        <div className="history_specifics">
                            <hr/>
                            <div className="total_spent">
                                <div className="header"><h4>Total Spent &#9432;</h4></div>
                                <div className="figure"><h4>₦14,500,000.00</h4></div> 
                            </div>
                        </div>
    
                        <div className="history_specifics">
                                <hr/>
                                <div className="total_debit">
                                    <div className="header"><h4>Total Debit &#9432;</h4></div>
                                    <div className="figure"><h4>₦14,000.00</h4></div> 
                                </div>
                            </div>
                    </div>
                    
                
            
                </div>
    
                <div className="right_board">
                    <div className="transaction_filter">
                            <h3>Transaction Filter</h3>
                            <div className="filter_form">
                                <div className="top_search">
                                        <input className="transaction_id" type="text" name="transaction ID"   placeholder="Search by transaction ID"/>
      
                                        <input  className="date_type" type="date" name="start Date"   placeholder="Start date" />
                                        
                                        <input  className="date_type" type="date" name="end Date"   placeholder="End date" />
    
                                </div>
                                <button>Search</button>
                                    
    
                            </div>
                    </div>
    
                    <div className="transaction_history">
                        <h3>Transaction History</h3>
                        <div className="transaction_header">
                            <h4>Description</h4>
                            <h4>Amount</h4>
                        </div>
                        <div className="transactions_container">
                            <hr className="underline"/>
                                <div className="transaction_description">
                            
                            
                                        <div className="transaction_id">
                                
                                                <h4>TD0565432865432</h4>
                                                <h5>22/12/2019</h5>
                                            </div>
                                            <div className="figure"><h4>₦14,000.00</h4></div> 
                                        </div>
                                        
    
                        </div>
                        <div className="transactions_container">
                                <hr className="underline"/>
                                    <div className="transaction_description">
                                
                                
                                            <div className="transaction_id">
                                    
                                                    <h4>TD0565432865432</h4>
                                                    <h5>22/12/2019</h5>
                                                </div>
                                                <div className="figure"><h4>₦14,000.00</h4></div> 
                                            </div>
                                            
        
                            </div>
                            <div className="transactions_container">
                                    <hr className="underline"/>
                                        <div className="transaction_description">
                                    
                                    
                                                <div className="transaction_id">
                                        
                                                        <h4>TD0565432865432</h4>
                                                        <h5>22/12/2019</h5>
                                                    </div>
                                                    <div className="figure"><h4>₦14,000.00</h4></div> 
                                                </div>
                                                
            
                                </div>
                                
                            <h4>View more</h4>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        )
    }


   





   
}

export default Transactions;