import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Compunents/PrivateRoute/PrivateRoute';
import Profile from './Compunents/Profile/Profile';
import Register from './Compunents/Register/Register';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home' >
              <Home></Home>
            </Route>
            <Route path='/login' >
              <Login></Login>
            </Route>
            <PrivateRoute path='/register/:id' >
              <Register></Register>
            </PrivateRoute>
            <Route path='/event' >
              <AddEvent></AddEvent>
            </Route>
            <Route path='/addEvent' >
              <AddEvent></AddEvent>
            </Route>
            <Route path='/profile' >
              <Profile></Profile>
            </Route>
            <Route path='/' >
              <Home></Home>
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
