import React from "react";
import ListItem from "./ListItem";
import { ListContext } from "../ListContext";
import "./MyList.css";

document.onwheel = customScrollFunction;

function customScrollFunction(event) {
  let deltaY = event.deltaY;
  let deltaYSign = Math.sign(deltaY);

  if (deltaYSign === -1) {
    document.getElementById("list").scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  } else {
    document.getElementById("list").scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  }
}

export default function MyList() {
  return (
    <ListContext.Consumer>
      {({ list, updateList }) => (
        <div
          id="list"
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            justifyContent: list.length === 1 ? "center" : "flex-start",
            marginTop: "30px",
          }}
        >
          {list.map((obj) => {
            return (
              <div
                class="list--item"
                style={{ background: obj.bg || "#F4F4F6" }}
              >
                <div>{obj.title}</div>
                <hr />
                {obj.item.map((list, index) => {
                  if (index < 4)
                    return <ListItem text={list.title} status={list.status} />;
                  return true;
                })}
              </div>
            );
          })}
        </div>
      )}
    </ListContext.Consumer>
  );
}
