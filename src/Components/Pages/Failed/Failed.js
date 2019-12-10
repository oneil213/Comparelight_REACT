import React from 'react';
import './Failed.css';
import TopMenu from '../../TopMenu/TopMenu';

class Failed extends React.Component {
    render() {
        return (

            <div className="container">
            <div className="underlay">
            <TopMenu /> 
            </div>
            <div className="main">
                <div className="data_canvas">
                    <div className="header">
                        <h2>Failed!</h2> 
                         <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1575539994/4903-failed_g7gtei.gif" alt="Failed Mark" />
                    </div>
                    <div className="data_content">
                        <h4>What Next?</h4>
                        <br/>
                        <h3>Chat here to retrive token</h3>
                    </div>
                
                    <div className="data_content">
                        <div className="Close_popUp"> 
                                <h6>Close pop up to go back to dashboard</h6>
    
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

export default Failed;