import React, { Component } from "react";
import BaseLine from "./BaseLine";
import Sine from "./Sine";
import Tone from "./Tone";

const height = "500";
const width = "500";

const style = {
  position: "relative",
  height: height + "px",
  width: width + "px",
  backgroundColor: "white",
  cursor: "crosshair",
};

export default class Theremin extends Component {
  state = { freq: 0, amp: 0, isPlaying: false };

  mouseMove = (event) => {
    this.setState({
      freq: 2 * event.nativeEvent.offsetX,
      amp: height - event.nativeEvent.offsetY,
    });
  };

  handleMouseDown = () => this.setState({ isPlaying: true });

  handleMouseUp = () => this.setState({ isPlaying: false });

  render() {
    const { freq, amp } = this.state;
    return (
      <div>
        <div
          className="theremin"
          style={style}
          onMouseMove={this.mouseMove}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        >
          <BaseLine basePosition={height / 2} length={width} />
          {this.state.isPlaying && (
            <Sine
              basePosition={height / 2}
              length={width}
              freq={freq}
              amp={amp}
            />
          )}
          {this.state.isPlaying && <Tone freq={freq} />}
        </div>
        <div>
          Freq: {freq} - Amp: {amp}
        </div>
      </div>
    );
  }
}
