import React from "react";

export default function Heading() {
  const bold = {
    fontWeight: "700",
    marginRight: "10px",
    color: "black",
  };
  const styles = {
    fontSize: "30px",
    textAlign: "center",
    color: "#919191",
    marginBottom:'30px'
  };
  return (
    <div style={styles}>
      <span style={bold}>Tasks</span>
      <span>Lists</span>
    </div>
  );
}
