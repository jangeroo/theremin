import React, { Component } from "react";
import BaseLine from "./BaseLine";
import Sine from "./Sine";

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
  state = { freq: 0, amp: 0 };

  mouseMove = (event) => {
    this.setState({
      freq: event.nativeEvent.offsetX,
      amp: height - event.nativeEvent.offsetY,
    });
  };

  render() {
    const { freq, amp } = this.state;
    return (
      <div>
        <div className="theremin" style={style} onMouseMove={this.mouseMove}>
          {/* <Sine /> */}
          <BaseLine basePosition={height / 2} length={width} />
          <Sine
            basePosition={height / 2}
            length={width}
            freq={freq}
            amp={amp}
          />
        </div>
        <div>
          Freq: {freq} - Amp: {amp}
        </div>
      </div>
    );
  }
}
