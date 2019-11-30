import React from 'react';
import './Home.css';
import Footer from '../../Footer/Footer';
import Scroller from '../../Scroller/Scroller';
import Information from '../../Information/Information';
import Solutions from '../../Solutions/Solutions';
import Register from '../../Register/Register';
import Benefits from '../../Benefits/Benefits'
import Welcome from '../../Welcome/Welcome';
import TopMenu from '../../TopMenu/TopMenu';



class Home extends React.Component
 {

  



  render() {
    return ( 
    
    <div>
        <div id="landing">
            <div className="landing_container">
              <TopMenu />
              <Welcome onAdd={this.passNumbers} />
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

export default Home;





