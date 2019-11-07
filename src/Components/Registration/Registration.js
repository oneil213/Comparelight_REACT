

import React from 'react';
import './Registration.css';



class Registration extends React.Component {
    render() {
        return (
            iv class="container">
        <div class="underlay">
                <div class="top_menu">
                        <div class="logo"><img src="./src/logo header.png"></div>
                        <div class="menu">
                            <div><a>Registration</a></div>
                            <div><a>Link</a></div>
                            <div><a>Link</a></div>
                            <div><button>Sign Out</button></div>
                        </div>
                    </div>

        </div>

            
            
                <div class="header">
                    <h2>Registration</h2> <br><h4>Please complete the form with your details</h4>
                    <hr/>
                </div>

                <div class="reg_form">

                        <input type="number" name="Phone Number"  maxlength="11" placeholder="Enter your Phone Number" autocomplete="on" autofocus required>
                        <input type="text" name="FirstName" placeholder="Enter your First Name" autocomplete="on" required>
                       
                        <input type="text" name="LastName"  placeholder="Enter your Last Name" autocomplete="on" required>
                        
                        <input type="email" name="EmailAddress" placeholder="Enter your Email Address." autocomplete="on" required>
                      
                        <input type="text" name="Meter Number"  max="9" placeholder="Enter your Meter Number"  autocomplete="on" required>
                        
                        <select id="disco" name="disco" required>
                            <option value="australia">Select disco</option>
                            <option value="canada">Eko Electric</option>
                            <option value="usa">ADEC</option>
                        </select>
                        <button>Continue</button>


                </div>

                <section id="footer">
                        <div class="pages">
                            <div class="page_name">
                                    <a href="#">About</a>
                                    <a href="#">Terms</a>
                                    <a href="#">Policy</a>
                                    <a href="#">Contact</a>
                            </div>
                            <div class="flag"><img src="./src/nigeria.png" alt="Nigerian flag"/></div>
                            
                        </div>
                        
                    
                
            
                    <div><hr></div>
            
                    <div class="information">
                        <div class="social">
                            <img src="./src/instagram.png" alt="Comparelight Instagram profile" />
                            <img src="./src/twitter.png" alt="Comparelight Twitter profile" />
                            <img src="./src/facebook.png"  alt="Comparelight Facebook profile"/>
                        </div>
                        <div class="address">
                            <h4>13/15, Manchester Road, GRA, Zaria,<br>Kaduna State.</h4>
                        </div>
                    </div>
            
                    <div class="copyright">
                        <p>©2019-2020 Comparelight. Content is available in Policy.<p>
                    </div>
                </section>
            
            
    </div>

           
        )
    }
}

export default Registration;