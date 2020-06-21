import React, {Component} from 'react';
import HomePage from './pages/index';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Category from "./pages/category";
import About from "./pages/about";
import Contact from "./pages/contact";

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
            <Switch>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>
      );
  }
}

export default App;
