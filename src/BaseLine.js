const BaseLine = (props) => {
  const thickness = 2;
  const baseLineStyle = {
    position: "relative",
    height: thickness,
    width: props.length + "px",
    backgroundColor: "grey",
    top: props.basePosition - thickness / 2,
  };
  return <div className="baseLine" style={baseLineStyle}></div>;
};

export default BaseLine;
