import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
