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
  const { list, updateView, setCurrentListId } = React.useContext(ListContext);
  function viewList(listId) {
    updateView(list, "viewList");
    setCurrentListId(listId);
  }
  console.log("Mylist", list);
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
            onClick={() => viewList(obj.id)}
            className="list--item"
            style={{ background: obj.bgColor, color: obj.textColor }}
            key={index}
          >
            <div style={{ paddingRight: "10px" }}>{obj.title}</div>
            <hr style={{ background: obj.textColor }} />
            {obj.item.map((list, index) => {
              if (index < 4)
                return list.title.trim().length ? (
                  <ListItem
                    text={list.title}
                    status={list.status}
                    key={index}
                    textColor={obj.textColor}
                  />
                ) : null;
              return true;
            })}
          </div>
        );
      })}
    </div>
  );
}
