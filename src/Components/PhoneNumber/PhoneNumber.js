import React from 'react';
import './PhoneNumber.css';
import {Redirect } from 'react-router-dom';


class PhoneNumber extends React.Component {

     

    state = {
        phoneNumber: null,
        redirect: false
      
    }



    handleChange = (event) => {
        
        const input = event.target;
        const value = input.value;
     
        this.setState({ [input.name]: value });
    }


    setRedirect = () => {
        this.setState({
          redirect: true
        })
        const {phoneNumber} = this.state;
        localStorage.setItem("phoneNumber", phoneNumber);
      }

  
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to= "/Pages/SignUp" />
        }
        
      }
      


    

    
    
    

    render() {
    
        return (
            <div>
                 {this.renderRedirect()}
            
          <form  >
              <div className="phonebar">
                <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Enter your phone number"  required/>
            <button className="PhoneButton" type="submit" onClick={this.setRedirect}>Continue</button>
            
            </div>

          </form>  
          </div>
            
        )
    }
}

export default PhoneNumber;