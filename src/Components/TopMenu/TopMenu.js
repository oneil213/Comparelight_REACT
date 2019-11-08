import React from 'react';
import './TopMenu.css';
import logo from './Images/logo header.png';
import { NavLink,} from 'react-router-dom';






class TopMenu extends React.Component {
    render() {
      return (

        <div className="top_menu">
                    <div className="logo">
                       <NavLink to='../App/App'><img src={logo} alt="Comparelight logo"/></NavLink>
                    </div>
                    <div className="menu">
                      <div className="login">
                        <NavLink to='../Login/Login'><button>Log In</button></NavLink>
                      </div>
                      <div className="signup">
                        <NavLink to='../SignUp/SignUp'><button>Sign Up</button></NavLink>
                      </div>
                    </div>
        </div>



      )
    }
  }

  

  





export default TopMenu;