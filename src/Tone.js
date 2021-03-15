import React, { Component } from "react";

const context = new AudioContext();
var oscillator = null;

export default class Tone extends Component {
  setPitch = () => {
    oscillator.frequency.value = this.props.freq;
  };

  componentDidMount() {
    oscillator = context.createOscillator();
    this.setPitch();
    oscillator.connect(context.destination);
    oscillator.start(context.currentTime);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.freq !== prevProps.freq) this.setPitch();
  }

  componentWillUnmount() {
    oscillator.stop(context.currentTime);
  }

  render() {
    return <div className="tone"></div>;
  }
}
