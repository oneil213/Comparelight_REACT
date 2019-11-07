import React from 'react';
import './Information.css';



class Information extends React.Component {
    render() {
        return (
            
            <div id="information" >

            <div className="header2">
            <h2>Comparelight allows you to recharge, monitor & control <br/>electricity.</h2>
            </div>
            
            <div className="icon">
            <img id="meter_icon" src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Electric_meter_f2tgut.png" alt="electric meter icon" />
            </div>
            
            <div className="header3"><h3>Prepaid & Postpaid Meters.</h3></div>
            <div className="header4"> <h4>Join thousands of electricity consumers <br/> presently using comparelight.</h4> </div>
            <div className="learn_more"><button>Learn More</button></div>
            
            </div>

        )
    }
}

export default Information;