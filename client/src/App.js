import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import { Provider } from 'react-redux';
// import { createStore,applyMiddleware } from 'redux';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

import store from './store';

if(localStorage.tokenbbs){
  setAuthToken(localStorage.tokenbbs);
  const decoded = jwt_decode(localStorage.tokenbbs);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decodeURI.exp < currentTime){
    store.dispatch(logoutUser());
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
              </Switch>
            {/* <Footer/> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
