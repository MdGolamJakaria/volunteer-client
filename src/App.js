import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './Compunents/AddEvent/AddEvent';
import Header from './Compunents/Header/Header';
import Home from './Compunents/Home/Home';
import Login from './Compunents/Login/Login';
import Register from './Compunents/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <Route path='/login' >
            <Login></Login>
          </Route>
          <Route path='/register' >
            <Register></Register>
          </Route>
          <Route path='/event' >
            <AddEvent></AddEvent>
          </Route>
          <Route path='/addEvent' >
            <AddEvent></AddEvent>
          </Route>
          <Route path='/' >
            <Home></Home>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
