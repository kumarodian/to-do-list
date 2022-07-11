import React from "react";

export default function MyButton({
  bgColor,
  textColor,
  text,
  click,
  parentStyle,
}) {
  const styles = {
    fontSize: "23px",
    height: "40px",
    width: "40px",
    background: bgColor || "white",
    color: textColor || "#000",
    borderRadius: "3px",
    cursor: "pointer",
    border: `1px solid ${bgColor || "#a5a5a5"}`,
  };
  const textStyle = {
    color: "gray",
    fontSize: "14px",
  };
  return (
    <div style={text ? { textAlign: "center" } : { ...parentStyle }}>
      <button style={styles} onClick={click}>
        +
      </button>
      {text && <p style={textStyle}>{text}</p>}
    </div>
  );
}
