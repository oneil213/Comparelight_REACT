import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import LogIn from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Pages/Login">LogIn</Link>
              </li>
              <li>
                <Link to="/Pages/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Pages/Login">
              <LogIn />
            </Route>
            <Route path="/SignUp/:contact" component={SignUp} />
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/Pages/Dashboard">
              <Dashboard />
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

