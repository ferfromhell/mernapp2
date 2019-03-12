import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import { Provider } from 'react-redux';
// import { createStore,applyMiddleware } from 'redux';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import PrivateRoute from './components/utils/PrivateRoute';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateProfile from './components/profile/Create';
import ManageProfile from './components/profile/Manage';
import Profiles from './components/profile/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import SinglePost from './components/posts/SinglePost';

import store from './store';
import { clearCurrentProfile } from './actions/profileActions';


if(localStorage.tokenbbs){
  setAuthToken(localStorage.tokenbbs);
  const decoded = jwt_decode(localStorage.tokenbbs);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decodeURI.exp < currentTime){
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    //Clear profile
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/createProfile" component={CreateProfile} />
                <PrivateRoute exact path="/manageProfile" component={ManageProfile} />
                <Route exact path="/profiles" component={Profiles} />
                <PrivateRoute exact path="/profile/:handle" component={Profile} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/post/:id" component={SinglePost} />
              </Switch>
            {/* <Footer/> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
