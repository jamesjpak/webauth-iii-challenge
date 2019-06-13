import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserList from './components/Users/UserList';

function App() {

  return (
    <Router>
    <div className="App">

      <header>
        <nav>
          {/* <NavLink to="/"> Sign Up </NavLink> */}

          <NavLink to="/login"> Login </NavLink>

          <NavLink to="/users"> User List </NavLink>

          {/* <NavLink to="/users"> Users </NavLink> */}
        </nav>
      </header>

      <main>
      {/* <Route exact path="/" component={SignUp} /> */}

      <Route path="/login" component={Login} />

      <Route path="/users" component={UserList} />

    
      </main>

    </div>
    </Router>
  );
}

export default App;
