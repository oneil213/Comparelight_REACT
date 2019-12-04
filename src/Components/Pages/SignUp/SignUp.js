import React from 'react';
import './SignUp.css';
import TopMenu from '../../TopMenu/TopMenu';
import { Redirect } from 'react-router'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            meterNumber: '',
            password: '',
            disco: '',
            redirectToReferrer: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleChange = (event) => {
        const input = event.target;
        this.setState({ [input.name]: event.target.value});
    }

    handleFormSubmit(event){
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress,
            meterNumber: this.state.meterNumber,
            password: this.state.password,
            disco: this.state.disco
        };
        localStorage.setItem("data",JSON.stringify(data));
        this.setState({redirectToReferrer: true});
        event.preventDefault();
    };
    componentDidMount() {
        const phoneNumber = localStorage.getItem('phoneNumber') || '';
        this.setState({ phoneNumber: phoneNumber});
    }

    

    render() {
        
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/Pages/Dashboard" />
        }
        return (
            <div className="container">
            
                <div className="underlay">
                    <TopMenu />
                </div>
                <div className="header">
                    <h2>Registration</h2> <br /><h4>Please complete the form with your details</h4>
                    <hr />
                </div>
                <form className="signUp_form">
                    <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Enter your Phone Number" autoComplete="off" required />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={ this.handleChange} placeholder="Enter your First Name" required />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={ this.handleChange} placeholder="Enter your Last Name" autoComplete="on" required />
                    <input type="email" name="emailAddress" value={this.state.emailAddress} onChange={ this.handleChange} placeholder="Enter your Email Address." autoComplete="on" required />
                    <input type="text" name="meterNumber" value={this.state.meterNumber} onChange={ this.handleChange} max="9" placeholder="Enter your Meter Number" autoComplete="on" required />
                    <input type="password" name="password" value={this.state.password} onChange={ this.handleChange} placeholder="Enter your Password" required />
                    <select id="disco" value={this.state.disco} onChange={ this.handleChange} name="disco" required>
                        <option value="0">Select disco</option>
                        <option value="EKO ELECTRIC">Eko Electric</option>
                        <option value="IKEJA ELECTRIC">Ikeja Electric</option>
                    </select>
                    <button type="submit" onClick={this.handleFormSubmit}>Continue</button>
                </form>
            </div>
        )
    }
}


export default SignUp;