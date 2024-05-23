// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchTrips from './pages/SearchTrips';
import SearchPackages from './pages/SearchPackages';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/search-trips" component={SearchTrips} />
        <Route path="/search-packages" component={SearchPackages} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
