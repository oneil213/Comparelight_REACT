import React from 'react';
import './SignUp.css';
import TopMenu from '../../TopMenu/TopMenu';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: props.match.params.contact || "" ,
        }
    }

    setPhone = (event) => {
        this.setState({ phoneNumber: event.curr.value })
    }

    register = () => {
        alert("register succesfiully")
    }

    handlePhone = (event) => {
        this.setState({ phoneNumber: event.currentTarget.value })
    }

    render() {
        const { phoneNumber } = this.state;
        return (
            <div class="container">
                <div class="underlay">
                    <TopMenu />
                </div>
                <div class="header">
                    <h2>Registration</h2> <br /><h4>Please complete the form with your details</h4>
                    <hr />
                </div>
                <div class="reg_form">
                    {/* <input type="number" value={phoneNumber} onChange={this.handlePhone} placeholder="Enter your Phone Number" required /> */}
                    <input type="number" name="Phone Number" value={phoneNumber} onChange={this.handlePhone} maxlength="11" placeholder="Enter your Phone Number" autocomplete="on" required />
                    {/* <input type="number" name="Phone Number" value={this.state.phoneNumber} onChange={this.setPhone} maxlength="11" placeholder="Enter your Phone Number" autocomplete="on" autofocus required /> */}
                    <input type="text" name="FirstName" placeholder="Enter your First Name" required />
                    <input type="text" name="LastName" placeholder="Enter your Last Name" autocomplete="on" required />
                    <input type="email" name="EmailAddress" placeholder="Enter your Email Address." autocomplete="on" required />
                    <input type="text" name="Meter Number" max="9" placeholder="Enter your Meter Number" autocomplete="on" required />
                    <input type="password" name="Password" placeholder="Enter your Password" required />
                    <select id="disco" name="disco" required>
                        <option value="australia">Select disco</option>
                        <option value="canada">Eko Electric</option>
                        <option value="usa">ADEC</option>
                    </select>
                    <button onClick={this.register}>Continue</button>
                </div>
            </div>
        )
    }
}


export default SignUp;