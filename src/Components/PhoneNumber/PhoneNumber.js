import React from 'react';
import './PhoneNumber.css';



class PhoneNumber extends React.Component {
    render() {
        return (
            
            <div className="phonebar">

            
                    <input type="text"  min="0" max="9" placeholder="Enter your phone number" />
                    <button className="PhoneButton" >Continue</button>
    
        </div>

        )
    }
}

export default PhoneNumber;