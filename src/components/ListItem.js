import React from "react";
import "./ListItem.css";

export default function ListItem({ text, status, date }) {
  const doneStyle = {
    color: "#bfbfbf",
    display: "inherit",
  };
  const notDoneStyle = {
    display: "flex",
  };
  return (
    <>
      <div
        className={`items${status === "done" ? " done" : " notDone"}`}
        style={status === "done" ? { ...doneStyle } : { ...notDoneStyle }}
      >
        {status === "done" ? <hr /> : null}
        <input style={{ margin: "0 6px 0 0" }} type="checkbox" disabled />
        {text.length > 10 ? `${text.slice(0, 13)} ...` : text}
      </div>
    </>
  );
}
