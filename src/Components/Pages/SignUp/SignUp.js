import React from 'react';
import {Redirect } from 'react-router-dom';
import './SignUp.css';
import TopMenu from '../../TopMenu/TopMenu';


class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        meterNumber: '',
        passWord: '',
        disco: '',
        redirect: false
    }

    handleChange = (event) => {
        
        const input = event.target;
        const value = input.value; 
        this.setState({ [input.name]: value });
    }

    componentDidMount() {
        const phoneNumber = localStorage.getItem('phoneNumber') || '';
        this.setState({ phoneNumber});
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
        localStorage.setItem("firstName",this.state.firstName);
        localStorage.setItem("lastName",this.state.lastName);
        localStorage.setItem("emailAddress",this.state.emailAddress);
        localStorage.setItem("meterNumber",this.state.meterNumber);
        localStorage.setItem("passWord",this.state.passWord);
        localStorage.setItem("disco",this.state.disco);

        
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to= "/Pages/Dashboard" />
        }
        
      }


    



    render() {
        
        return (
            <div className="container">
                {this.renderRedirect()}
            
                <div className="underlay">
                    <TopMenu />
                </div>
                <div className="header">
                    <h2>Registration</h2> <br /><h4>Please complete the form with your details</h4>
                    <hr />
                </div>
                <form className="reg_form" onSubmit={this.handleFormSubmit}>
                   
                    <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Enter your phone number" autoComplete="off" required />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={ this.handleChange} placeholder="Enter your first name" required />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={ this.handleChange} placeholder="Enter your last name" autoComplete="on" required />
                    <input type="email" name="emailAddress"  value={this.state.emailAddress} onChange={ this.handleChange} placeholder="Enter your E-mail address." autoComplete="on" required />
                    <input type="text" name="meterNumber"  value={this.state.meterNumber} onChange={ this.handleChange} max="9" placeholder="Enter your meter number" autoComplete="on" required />
                    <input type="password" name="passWord" value={this.state.passWord} onChange={ this.handleChange} placeholder="Set a password here" required />
                    <select id="disco" name="disco" value={this.state.disco} onChange={ this.handleChange}  required>
                        <option value="null">Select disco</option>
                        <option value="Eko Electric">Eko Electric</option>
                        <option value="IE">Ikeja Electric</option>
                    </select>
                    <button type="submit" onClick={this.setRedirect}>Continue</button>
                </form>
            </div>
        )
    }
}


export default SignUp;