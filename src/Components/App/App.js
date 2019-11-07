import React from 'react';
import './App.css';
import logo from './images/logo header.png';
import Footer from '../Footer/Footer';
import Scroller from '../Scroller/Scroller';
import Information from '../Information/Information';
import Solutions from '../Solutions/Solutions';
import Benefits from '../Benefits/Benefits';
import Register from '../Register/Register';
import Welcome from '../Welcome/Welcome';

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
                           <Welcome />
                            <Scroller />
                                    </div>
                                    </div>


                                    <Information />
                                    <Solutions />
                                    <Benefits />
                                    <Register />
                                    <Footer />
                                    </div>
      

    )
  }
}

export default App;
