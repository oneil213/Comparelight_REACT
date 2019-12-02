import React from 'react';
import {Redirect } from 'react-router-dom';
import './SignUp.css';
import TopMenu from '../../TopMenu/TopMenu';


class SignUp extends React.Component {
    state = {
        firstName: '',
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
        localStorage.setItem("firstName",this.state.firstName)
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
                    {/* <input type="number" value={phoneNumber} onChange={this.handlePhone} placeholder="Enter your Phone Number" required /> */}
                    <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Enter your Phone Number" autoComplete="off" required />
                    {/* <input type="number" name="Phone Number" value={this.state.phoneNumber} onChange={this.setPhone} maxlength="11" placeholder="Enter your Phone Number" autoComplete="on" autofocus required /> */}
                    <input type="text" name="firstName" value={this.state.firstName} onChange={ this.handleChange} placeholder="Enter your First Name" required />
                    <input type="text" name="LastName" placeholder="Enter your Last Name" autoComplete="on" required />
                    <input type="email" name="EmailAddress" placeholder="Enter your Email Address." autoComplete="on" required />
                    <input type="text" name="Meter Number" max="9" placeholder="Enter your Meter Number" autoComplete="on" required />
                    <input type="password" name="Password" placeholder="Enter your Password" required />
                    <select id="disco" name="disco" required>
                        <option value="australia">Select disco</option>
                        <option value="canada">Eko Electric</option>
                        <option value="usa">ADEC</option>
                    </select>
                    <button type="submit" onClick={this.setRedirect}>Continue</button>
                </form>
            </div>
        )
    }
}


export default SignUp;