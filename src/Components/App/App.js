import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import LogIn from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Recharge from '../Pages/Recharge/Recharge';
import Data from '../Pages/Data/Data';
import Successful from '../Pages/Successful/Successful';
import Failed from '../Pages/Failed/Failed'
import Transactions from '../Pages/Transactions/Transactions';
import Receipt from '../Pages/Receipt/Receipt';


class App extends React.Component {
  render() {
    return (
  
       
    
   
      <Router>
        <div>
         

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Pages/Login">
              <LogIn />
            </Route>
           
            <Route path="/Pages/SignUp">
              <SignUp />
            </Route>
            <Route path="/Pages/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Pages/Data">
              <Data />
            </Route>
            <Route path="/Pages/Recharge">
              <Recharge />
            </Route>

            <Route path="/Pages/Successful">
              <Successful />
            </Route>

            <Route path="/Pages/Failed">
              <Failed />
            </Route>
            <Route path="/Pages/Transactions">
              <Transactions/>
            </Route>
            <Route path="/Pages/Receipt">
              <Receipt/>
            </Route>
            <Route path="/">
              <Home />
          </Route>
          </Switch>
        </div>
      </Router>
  
    )
  }
}

export default App;

