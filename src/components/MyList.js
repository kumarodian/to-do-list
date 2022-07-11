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
  const { list, updateList } = React.useContext(ListContext);
  return (
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
      {list.map((obj, index) => {
        return (
          <div
            className="list--item"
            style={{ background: obj.bgColor, color: obj.textColor }}
            key={index}
          >
            <div>{obj.title}</div>
            <hr style={{ background: obj.textColor }} />
            {obj.item.map((list, index) => {
              if (index < 4)
                return (
                  <ListItem
                    text={list.title}
                    status={list.status}
                    key={index}
                  />
                );
              return true;
            })}
          </div>
        );
      })}
    </div>
  );
}
