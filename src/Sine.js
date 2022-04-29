import React, { Component } from "react";

export default class Sine extends Component {
  scale = 1;

  sineContainerStyle = {
    display: "flex",
    position: "absolute",
    top: this.props.basePosition,
  };

  segmentStyle = {
    height: this.scale * 2,
    width: this.scale,
    borderRadius: "100%",
    backgroundColor: "blue",
    position: "relative",
  };

  render() {
    const { freq, amp } = this.props;
    return (
      <div className="sineContainer" style={this.sineContainerStyle}>
        {Array(Math.ceil(this.props.length / this.scale))
          .fill()
          .map((_, i) => {
            return (
              <div
                className="segment"
                style={{
                  ...this.segmentStyle,
                  top: (amp / 3) * Math.sin((freq / 3000) * i) - this.scale / 2,
                }}
                key={i}
              />
            );
          })}
      </div>
    );
  }
}
