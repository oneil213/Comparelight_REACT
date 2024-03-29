import React from 'react';
import './Login.css';
import TopMenu from '../../TopMenu/TopMenu';





class Login extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="underlay">
                <TopMenu />
            </div>

        
        <div className="header">
                    <h2>Login</h2> <br/><h4>Please complete the form with your details</h4>
                    <hr/>
                </div>

                <div className="login_form">

                        <input type="number" name="Phone Number"  maxlength="11" placeholder="Enter your Phone Number" autocomplete="on" autofocus required />
            
                        <input type="password" name="Password"   placeholder="Enter your Password"  required />
                        <button>Continue</button>
    
                </div>

        

        </div>
    
        )
    }
}


export default Login;