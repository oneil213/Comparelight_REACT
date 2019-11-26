import React from 'react';
import './PhoneNumber.css';
import { NavLink,} from 'react-router-dom';

class PhoneNumber extends React.Component {
    state = {
        PhoneNumber: null,
    }
    savePhone(event) {
        this.setState({ PhoneNumber: event.target.value })
    }
    
    render() {
        const {PhoneNumber} = this.state;
        return (

            <div className="phonebar">


                <input type="number" value={this.state.PhoneNumber} onChange={this.savePhone.bind(this)} min="0" max="9" placeholder="Enter your phone number" />
                
                <NavLink to={`../SignUp/${PhoneNumber}`}  ><button className="PhoneButton">Continue</button></NavLink>

            </div>

        )
    }
}

export default PhoneNumber;