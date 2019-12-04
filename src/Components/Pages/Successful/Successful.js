import React from 'react';
import './Successful.css';
import TopMenu from '../../TopMenu/TopMenu';

class Successful extends React.Component {
    render() {
        return (

            <div className="container">
            <div className="underlay">
            <TopMenu /> 
            </div>
            <div className="main">
                <div className="data_canvas">
                    <div className="header">
                        <h2>Successful!</h2> 
                         <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1575477859/782-check-mark-success_t6mdyw.gif" alt="Success Mark" />
                    </div>
                    <div className="data_content">
                        <h4>Token Details</h4>
                        <br/>
                        <h3>63489115385135179423</h3>
                    </div>
                
                    <div className="data_content">
                        <div className="Close_popUp"> 
                                <h6>Close pop up to view<br/>
                                    transaction details</h6>
    
                        </div>
                                
                    
                                
                        
                        </div>
                    <div className="data_button">
                            <button>X</button> 
                        
                    </div>
                          
                </div>
            </div>
        </div>

        )
    }
}

export default Successful;