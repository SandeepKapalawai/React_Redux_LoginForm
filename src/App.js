import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import LayoutPage from "./components/pages/LayoutPage";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user" component={LayoutPage} />
      </div>
    );
  }
}

export default App;
