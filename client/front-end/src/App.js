import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';

function App() {

  return (
    <Router>
    <div className="App">

      <Route exact path="/" component={SignUp} />

    </div>
    </Router>
  );
}

export default App;
