import React, {Component} from 'react';
import HomePage from './pages/index';
import Category from "./pages/category";
import About from "./pages/about";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
  render() {
      return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
            <Switch>
                <Route exact path="/category/:id" component={Category}/>
            </Switch>
            <Switch>
                <Route exact path="/about" component={About}/>
            </Switch>
        </Router>
      );
  }
}

export default App;
