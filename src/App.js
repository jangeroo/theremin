import React, { Component } from "react";
import Theremin from "./Theremin";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Thereminstrel</h2>
        <p>Release your inner minstrel with a virtual theremin!</p>
        <p>Click and drag to play!</p>
        <Theremin />
      </div>
    );
  }
}
