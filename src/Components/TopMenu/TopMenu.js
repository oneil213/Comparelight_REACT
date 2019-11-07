import React from 'react';
import './TopMenu.css';
import logo from './Images/logo header.png';









class TopMenu extends React.Component {
    render() {
      return (

        <div className="top_menu">
                    <div className="logo">
                        <img src={logo} alt="Comparelight logo"/></div>
                        <div className="menu">
                            <div className="login"><button>Log In</button></div>
                            <div className="signup"><button>Sign Up</button></div>
                            </div>
                            </div>

      )
    }
  }






export default TopMenu;