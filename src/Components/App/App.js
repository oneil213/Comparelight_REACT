import React from 'react';
import './App.css';
import logo from './images/logo header.png'
import PhoneNumber from '../PhoneNumber/PhoneNumber'

class App extends React.Component {
  render() {
    return (

      <div>

<div id="landing">

<div className="landing_container">

    <div className="top_menu">
            
        
            <div className="logo">
                <img src={logo} alt="Comparelight logo"/></div>
        
            <div className="menu">
                    <div className="login"><button>Log In</button></div>
                    <div className="signup"><button>Sign Up</button></div>
            </div>

    </div>

        <div className="welcome">

                <div className="headline">
                        <div><h2>Reduce electricity bill</h2></div>
                        <div><p>with Comparelight</p></div>
                        <div><h3>Online Energy Monitor.</h3></div>
                    </div>

                 <PhoneNumber /> 
            </div>


            <div className="label">
                <div><img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870061/Comparelight/App/IKEJA_Electric_hl14ep.png" alt="Ikeja electric"/></div>
                <div><p>Ikeja electric payment.</p></div>
            </div>
</div>


</div>

<div id="information" >

<div className="header2">
<h2>Comparelight allows you to recharge, monitor & control <br/>electricity.</h2>
</div>

<div className="icon">
<img id="meter_icon" src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Electric_meter_f2tgut.png" alt="electric meter icon" />
</div>

<div className="header3"><h3>Prepaid & Postpaid Meters.</h3></div>
<div className="header4"> <h4>Join thousands of electricity consumers <br/> presently using comparelight.</h4> </div>
<div className="learn_more"><button>Learn More</button></div>

</div>

<section id="solutions">
<div className="header2"><h2>Comparelight solutions for homes & businesses.</h2></div>

<div className="tag"> <h4>For homes</h4></div>

<div className="products">
<div className="item">
    <div className="card">
        <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Water_pump_remote_Control_yc74ea.png" alt="water pump remote control"/>
        <h5>Domestic water</h5>
        <button>Buy now</button>
    </div> 
    <br/><h4>Pump water remotely  & check water level.</h4>
</div>

<div className="item">
        <div className="card">
            <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870061/Comparelight/App/Meter_Alarm_aglotl.png" alt="Prepaid meter alarm system" />
            <h5>Power Alert</h5>
            <button>Buy now</button>
        </div> 
        <br/><h4>Power supply alert by text & in-app.</h4>
    </div>

    <div className="item">
            <div className="card">
                <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/Electricity_sharing_ekfwwx.png" alt="Electricity sharing"/>
                <h5>Share Electricity</h5>
                <button>Buy now</button>
            </div> 
            <br/><h4>Share electricity within a shared apartment.</h4>
        </div>

        <div className="item">
                <div className="card">
                    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870061/Comparelight/App/electricity_consumption_chart_yepwi8.png" alt="Electricity consumption chart" />
                    <h5>Energy Monitor & Control</h5>
                    <button>Buy now</button>
                </div> 
                <br/><h4>Monitor & control appliances remotely.</h4>
            </div>
</div>

<div className="learn_more"><button>Learn More</button></div>

</section>





<section id="benefits">


<div className="benefits_header"><h2>Why you should use comparelight.</h2></div>

<div className="points">
   
    <article >
            <header><h3>Safer and Protected</h3></header>
            <p>Shop with peace of mind. We don’t share your full <br/>
                financial information with sellers. And PayPal Buyer<br/>
                Protection covers your eligible purchases if they<br/>
                don’t show up or match their description. <br/><br/></p>
                <button href="">Read More</button>
                
            
                     
    </article>

    <article >
            <header><h3>Safer and Protected</h3></header>
            <p>Shop with peace of mind. We don’t share your full <br/>
                financial information with sellers. And PayPal Buyer<br/>
                Protection covers your eligible purchases if they<br/>
                don’t show up or match their description. <br/><br/></p>
                <button href="">Read More</button>
                     
    </article>

    <article >
            <header><h3>Safer and Protected</h3></header>
            <p>Shop with peace of mind. We don’t share your full <br/>
                financial information with sellers. And PayPal Buyer<br/>
                Protection covers your eligible purchases if they<br/>
                don’t show up or match their description. <br/><br/></p>
                <button href="">Read More</button>
                     
    </article>



    


</div>




</section>


<section id="Register">
<div><h2>Register and get started.</h2></div>
<div><button>Continue</button></div>
</section>





<section id="footer">
<div className="pages">
    <div className="page_name">
            <a href="https://com.com">About</a>
            <a href="https://com.com">Terms</a>
            <a href="https://com.com">Policy</a>
            <a href="https://com.com">Contact</a>
    </div>
    <div className="flag"><img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/nigeria_ixhbk0.png" alt="Nigerian flag"/></div>
    
</div>




<div><hr/></div>

<div className="information">
<div className="social">
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/instagram_qjkhyz.png" alt="Comparelight Instagram profile" />
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/twitter_tqxxx3.png" alt="Comparelight Twitter profile" />
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870059/Comparelight/App/facebook_e0jtej.png"  alt="Comparelight Facebook profile"/>
</div>
<div class="address">
    <h4>13/15, Manchester Road, GRA, Zaria,<br/>Kaduna State.</h4>
</div>
</div>

<div className="copyright">
<p>©2019-2020 Comparelight. Content is available in Policy.</p>
</div>
</section>

      </div>
      

    )
  }
}

export default App;
