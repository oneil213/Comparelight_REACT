import React from 'react';
import './Recharge.css';
import TopMenu from '../../TopMenu/TopMenu';
import {Redirect } from 'react-router'


class Recharge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disco: '',
            amount: '',
            meterNumber: '',
            redirectToReferrer: false

        };

        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data')) || '';
        this.setState({ 
            firstName: data.firstName, 
            meterNumber: data.meterNumber,
            disco: data.disco
        });
        
    }

    
    handleChange = (event) => {
        
        const input = event.target;
        const value = input.value; 
        this.setState({ [input.name]: value });
    }

    handleFormSubmit(event){
        var data = {
            meterNumber: this.state.meterNumber,
            disco: this.state.disco,
            amount: this.state.amount
        };
        localStorage.setItem("data",JSON.stringify(data));
        this.setState({redirectToReferrer: true});
        event.preventDefault();
    };


      
    
    
    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/Pages/Data" />
        }


       

        
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
                <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}  placeholder="Enter Amount (₦)" autocomplete="on" autofocus="on"
                 required />
                        
                        <input type="text" name="meterNumber"  value={this.state.meterNumber} onChange={this.handleChange} placeholder="Enter your Meter Number"  autocomplete="on" required />
                      
                        
                        <select id="disco" name="disco" value={this.state.disco} onChange={ this.handleChange}  required>
                        <option value="null">Select disco</option>
                        <option value="EKO ELECTRIC">Eko Electric</option>
                        <option value="IKEJA ELECTRIC">Ikeja Electric</option>
                    </select>
                        <button onClick={this.handleFormSubmit}>Continue</button>

                    

                </div>

        

        </div>

            
    

            
        )
    }

}


export default Recharge;


