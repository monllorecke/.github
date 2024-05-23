import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchPackages from './pages/SearchPackages';
import SearchTrips from './pages/SearchTrips';
import Profile from './pages/Profile';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search-packages" component={SearchPackages} />
        <Route path="/search-trips" component={SearchTrips} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
