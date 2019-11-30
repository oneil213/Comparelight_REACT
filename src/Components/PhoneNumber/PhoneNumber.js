import React from 'react';
import './PhoneNumber.css';
import { NavLink } from 'react-router-dom';


class PhoneNumber extends React.Component {
    state = {
        phoneNumber: null,
    }

    handleChange = (event) => {
        
        const input = event.target;
        const value = input.value;
     
        this.setState({ [input.name]: value });
    }

    handleFormSubmit = () => {
        const {phoneNumber} = this.state;
        localStorage.setItem("phoneNumber", phoneNumber);
    };

    
    

    render() {
    
        return (
          <form  onSubmit={this.handleFormSubmit}>
              <div className="phonebar">
                <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Enter your phone number"  required/>
                <NavLink to={`../Pages/SignUp/`}  > <button className="PhoneButton" type="submit">Continue</button></NavLink>
            </div>

          </form>  
            
        )
    }
}

export default PhoneNumber;