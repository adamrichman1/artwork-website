import React, {Component} from 'react';
import HomePage from './pages/index';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Category from "./pages/category";

class Routes extends Component {
  render() {
      return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
            <Switch>
                <Route exact path="/category/:title" component={Category}/>
            </Switch>
        </Router>
      );
  }
}

export default Routes;
