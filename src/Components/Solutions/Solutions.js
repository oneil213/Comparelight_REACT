import React from 'react';
import './Solutions.css';



class Solutions extends React.Component {
    render() {
        return (
            
            <section id="solutions">
            <div className="header2"><h2>Comparelight solutions for homes & businesses.</h2></div>
            
            <div className="tag"> <h4>For homes</h4></div>
            
            <div className="products">
            <div className="item">
                <div className="card">
                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Water_pump_remote_Control_yc74ea.png" alt="water pump remote control"/>
                    <h5>Domestic water</h5>
                    <button>Buy now</button>
                </div> 
                <br/><h4>Pump water remotely  & check water level.</h4>
            </div>
            
            <div className="item">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870061/Comparelight/App/Meter_Alarm_aglotl.png" alt="Prepaid meter alarm system" />
                        <h5>Power Alert</h5>
                        <button>Buy now</button>
                    </div> 
                    <br/><h4>Power supply alert by text & in-app.</h4>
                </div>
            
                <div className="item">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Electricity_sharing_ekfwwx.png" alt="Electricity sharing"/>
                            <h5>Share Electricity</h5>
                            <button>Buy now</button>
                        </div> 
                        <br/><h4>Share electricity within a shared apartment.</h4>
                    </div>
            
                    <div className="item">
                            <div className="card">
                                <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870061/Comparelight/App/electricity_consumption_chart_yepwi8.png" alt="Electricity consumption chart" />
                                <h5>Energy Monitor & Control</h5>
                                <button>Buy now</button>
                            </div> 
                            <br/><h4>Monitor & control appliances remotely.</h4>
                        </div>
            </div>
            
            <div className="learn_more"><button>Learn More</button></div>
            
            </section>

        )
    }
}

export default Solutions;