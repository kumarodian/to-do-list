import React from "react";
import "./ListItem.css";

export default function ListItem({ text, status, date, textColor }) {
  const doneStyle = {
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
        {status === "done" ? <hr style={{ background: textColor }} /> : null}
        <input style={{ margin: "0 6px 0 0" }} type="checkbox" disabled />
        {text.trim().length > 13 ? `${text.slice(0, 13)} ...` : text}
      </div>
    </>
  );
}
