import React from 'react';
import './PhoneNumber.css';
import { NavLink } from 'react-router-dom';

class PhoneNumber extends React.Component {
    state = {
        phoneNumber: null,
    }
    savePhone = (event) => {
        this.setState({ phoneNumber: event.target.value })
    }

    render() {
        const { phoneNumber } = this.state;
        return (
            <div className="phonebar">
                <input type="number" value={phoneNumber} onChange={this.savePhone} min="0" max="9" placeholder="Enter your phone number" />
                <NavLink to={`../SignUp/${phoneNumber}`}  ><button className="PhoneButton">Continue</button></NavLink>
            </div>
        )
    }
}

export default PhoneNumber;