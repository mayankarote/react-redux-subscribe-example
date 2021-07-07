import "./App.css";
import NewComp from "./NewComp";
import React, { Component } from "react";

export default class App extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    );
  }
}
