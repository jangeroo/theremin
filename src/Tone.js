import React, { Component } from "react";

const context = new AudioContext();
var oscillator = null;
var gainNode = null;

export default class Tone extends Component {
  calculateGain = (amp) => {
    const gain = amp / 500;
    console.log("gain:", gain);
    return gain;
  };

  updateTone = () => {
    oscillator.frequency.setTargetAtTime(
      this.props.freq,
      context.currentTime,
      0.01
    );
    gainNode.gain.setTargetAtTime(
      this.calculateGain(this.props.amp),
      context.currentTime,
      0.01
    );
  };

  componentDidMount() {
    oscillator = context.createOscillator();
    gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    this.updateTone();
    oscillator.start(context.currentTime);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.freq !== prevProps.freq) this.updateTone();
  }

  componentWillUnmount() {
    oscillator.stop(context.currentTime);
  }

  render() {
    return <div className="tone"></div>;
  }
}
