import React from 'react';
import './PhoneNumber.css';
import { Redirect } from 'react-router'


class PhoneNumber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {phoneNumber: '', redirectToReferrer: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    handleFormSubmit(event) {
        localStorage.setItem("phoneNumber", this.state.phoneNumber);
        this.setState({redirectToReferrer: true});
        event.preventDefault();
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/Pages/SignUp" />
        }
        return (
          <form>
              <div className="phonebar">
                <input type="number" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber" placeholder="Enter your phone number" required/>
                <button className="PhoneButton" onClick={this.handleFormSubmit} type="submit">Continue</button>
            </div>

          </form>  
            
        )
    }
}

export default PhoneNumber;