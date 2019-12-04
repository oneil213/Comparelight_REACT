import React from 'react';
import './Dashboard.css';
import TopMenu from '../../TopMenu/TopMenu';
import { Redirect } from 'react-router'

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            meterNumber: '',
            redirectToReferrer: false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      
    }


    handleFormSubmit(event){
        var data = {
            meterNumber: this.state.meterNumber,
            disco: this.state.disco
        };
        localStorage.setItem("data",JSON.stringify(data));
        this.setState({redirectToReferrer: true});
        event.preventDefault();
    };

     
    handleChange = (event) => {
        
        const input = event.target;
        const value = input.value; 
        this.setState({ [input.name]: value });
    }


    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data')) || '';
        this.setState({ 
            firstName: data.firstName, 
            meterNumber: data.meterNumber,
            disco: data.disco
        });
        
    }
    
    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/Pages/Recharge" />
        }
        
        return (
            <div className="container">
                <div className="underlay">
                  <TopMenu />
                </div>
        <div className="dashboard">
            <div className="left_dash">
                  <div className="greetings">
                    <div className="row1_greetings">
                            <div><h3>Good Morning,</h3></div>
                            <div ><h2>{this.state.firstName}</h2></div>

                            </div>
                        <div class="row2_greetings">
                        <p>Manage  and control your power purchases and equipments here.</p>
                            
                          </div>
                        </div>
                        <div className="dash_components">
                         <div className="row1_components">
                        <div className="top_componentsR1">
                            <div className="meter_detail">
                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/meter_n0eh6y.png" alt="Prepaid meter"/>
                                    <div >
                                        <h4>Meter/Acc Number</h4>
                                        <h5>{this.state.meterNumber}</h5>
                                        <h6>{this.state.disco}</h6>
                                    </div>

                            </div>
                            <div className="lastp_units">
                                    <h5> Last units purchased</h5>
                                    <h4>467</h4>
                                </div>
                                <div className="lastp_amount">
                                    <div><h5>Amount</h5></div>
                                    <div className="amount">
                                        <h3>₦</h3>
                                        <h4>4,567.30</h4>
                                    </div>

                                </div>
                                <div className="recharge_checkmeter">
                                    <button className="recharge" onClick={this.handleFormSubmit}>Recharge</button>
                                    <button>Check Meter</button>
                                </div>

                                </div>
                                <div className="top_componentsR1">
                                <div className="panel_name">
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/Plug_vl6ac6.png" alt="Prepaid meter"/>
                                    <div><h4>Unit Usage</h4></div>
                                </div>
                                <div className="sub_panel1">
                                    <h5>Units used today</h5>
                                    <h4>300</h4>
                                    <h6>Clear Data</h6>
                                </div>

                                <div className="sub_panel2">
                                    <h5>Unit balance today</h5>
                                    <h4>167</h4>
                                    <h6>Clear Data</h6>
                                </div>
                                
                        </div>

                        <div className="top_componentsR2">
                                    <div className="panel_name">
                                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/Plug_vl6ac6.png" alt="Prepaid meter"/>
                                            <div><h4>Energy Usage</h4></div>
                                        </div>
                                        <div className="sub_panel1">
                                            <h5>Energy used this month</h5>
                                            <h4>300 KWh</h4>
                                            <h6>Clear Data</h6>
                                        </div>
        
                                        <div className="sub_panel2">
                                            <h5>Energy savings last month</h5>
                                            <h4>-10 Kwh</h4>
                                            <h6>Clear Data</h6>
                                        </div>
                            </div>
                            <div class="top_componentsL"></div>

                            </div>

                            {/* Second row content */}
                            <div className="row2_components">
                            <div className="lower_components1">
                                <div className="panel_name">
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/invoice_ek3sub.png" alt="Receipts" />
                                    <h4>Energy Transaction</h4>
                                </div>
                                <div className="transaction_header">
                                    <h5>Date</h5>
                                    <h5>Amount</h5>
                                    <h5>ID</h5>

                                </div>
                                <div className="transactions">
                                    <p>10:10:2019</p>
                                    <p>₦ 4,576.30</p>
                                    <p>T23987452949623</p>
                                 
                                </div>
                               
                                <div><button>View More</button></div>

                            </div>
                            <div className="lower_components2">
                                <div className="panel_name">
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/opened-door-aperture_nlgzti.png" alt="Rooms" />
                                    <h4>Rooms</h4>
                                    <img  src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/add_mekg9t.png" alt="add button"/>

                                </div>
                                <div className="rooms_header">
                                    <h5>All created rooms</h5>
                                </div>
                                <div className="rooms">
                                    <h3>Living room</h3>
                                    <h3>Bed room</h3>
                        
                                </div>
                                <div className="rooms">
                                        <h3>Dinning room</h3>
                                        <h3> Outdoor</h3>
                            
                                    </div>
                            </div>
                            <div className="lower_components3">
                                <div class="shop">
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/shopping-cart_adhdbc.png" alt="Shop" />
                                    <h4>Shop</h4>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>

                    {/* right panel*/}

                    <div className="right_dash">
                    <div className="running_appliances">
                        <div className="panel_name2">
                            <h4>Running Appliances</h4>
                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/appliances_yauqha.png" alt="Appliances" />

                        </div>
                        <div className="appliance">
                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/plug-6_fevkrh.png" alt="Plug" />
                            <h5>Television</h5>
                            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697672/power_w48wh5.png" alt="Power" />
                        </div>
                        <div className="appliance">
                                <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697672/switch_t5nmqw.png" alt="switch" />
                                <h5>Switch</h5>
                                <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697672/power_w48wh5.png" alt="Power" />
                            </div>
                            <div className="appliance">
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697673/lightbulb_rqjleg.png" alt="Bulb" />
                                    <h5>Bulb</h5>
                                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1574697672/power_w48wh5.png" alt="Power" />
                                </div>
                    </div>
                </div>
                </div>
            
               

            </div>
        )
    }

}

export default Dashboard;