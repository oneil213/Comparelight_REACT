import React from 'react';
import './Welcome.css';
import PhoneNumber from '../PhoneNumber/PhoneNumber';



class Welcome extends React.Component {
    render() {
        return (
            
            <div className="welcome">
                                <div className="headline">
                                    <div><h2>Reduce electricity bill</h2></div>
                                    <div><p>with Comparelight</p></div>
                                    <div><h3>Online Energy Monitor.</h3></div>
                                    </div>
                                    <PhoneNumber /> 
                                    </div> 
        )
    }
}

export default Welcome;