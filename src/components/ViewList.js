import React from "react";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";
import "reactjs-popup/dist/index.css";
import { Delete, TaskAlt, Clear } from "@mui/icons-material";
import { ListContext } from "../ListContext";
import MyButton from "./MyButton";
export default function ViewList(props) {
  const {
    list,
    currentListId,
    setList,
    updateView,
    setCurrentListId,
    deleteList,
  } = React.useContext(ListContext);

  function changeItemStatus(itemId) {
    const copyItem = list.map((obj) => {
      if (obj.id === currentListId) {
        const newItemAdd = obj.item.map((item) =>
          item.id === itemId
            ? { ...item, status: item.status === "done" ? "" : "done" }
            : item
        );
        return { ...obj, item: newItemAdd };
      } else return obj;
    });
    setList(copyItem);
  }
  function removeItem(itemId) {
    const copyItem = list.map((obj) => {
      if (obj.id === currentListId) {
        const newItemAdd = obj.item.filter((item) => item.id !== itemId);
        return { ...obj, item: newItemAdd };
      } else return obj;
    });
    setList(copyItem);
  }
  let title,
    listDisplay,
    itemCompeleted = 0,
    totalItem = 0;
  list.map((obj) => {
    if (obj.id === currentListId) {
      title = obj.title;
      totalItem = obj.item.length;
      listDisplay = obj.item.map(({ id, title, status }) => {
        if (status === "done" && title.trim().length) itemCompeleted++;
        return (
          <div
            className={`viewlist--item${
              status === "done" ? " viewlist--item--completed" : ""
            }`}
            key={id}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="checkbox"
                checked={status === "done" ? "checked" : ""}
                style={{ margin: "0px 6px 0px 0px" }}
                onChange={() => changeItemStatus(id)}
              />
              <span className={`${status === "done" ? "lineThrough" : ""}`}>
                <input
                  value={title}
                  placeholder="Type here ..."
                  onChange={(event) => updateItem(id, event.target.value)}
                />
              </span>
            </div>
            <div
              onClick={() => {
                removeItem(id);
              }}
            >
              <Clear />
            </div>
          </div>
        );
      });
    }
    return true;
  });

  function updateItem(id, title) {
    const copyItem = list.map((obj) => {
      if (obj.id === currentListId) {
        const newItemAdd = obj.item.map((item) =>
          item.id === id ? { ...item, title } : item
        );
        return { ...obj, item: newItemAdd };
      } else return obj;
    });
    setList(copyItem);
  }
  function addItem() {
    const newItem = {
      id: uuidv4(),
      title: "",
      status: "",
    };
    const copyList = list.map((obj) =>
      obj.id === currentListId ? { ...obj, item: [...obj.item, newItem] } : obj
    );
    setList(copyList);
  }
  function updateTitle(titleId, title) {
    const copyItem = list.map((obj) =>
      obj.id === titleId ? { ...obj, title: title } : obj
    );
    setList(copyItem);
  }
  return (
    <div>
      <div id="viewlist">
        <div id="viewlist--title">
          <input
            id="viewlist--title-input"
            value={title}
            onChange={(event) => updateTitle(currentListId, event.target.value)}
          />
          <div title={`Delete ${title}`} id="list--delete">
            <Popup trigger={<Delete />} modal>
              {(close) => (
                <div className="modal-box">
                  <p>
                    Delete <span>{title}</span>
                  </p>
                  <div className="modal-box-button">
                    <button className="modal-button" onClick={close}>
                      Cancel
                    </button>
                    <button
                      className="modal-button modal-confirmDelete"
                      onClick={() => deleteList()}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div id="viewlist--taskCount">
          {totalItem > 0 && totalItem === itemCompeleted ? <TaskAlt /> : null}
          {totalItem && (
            <span>{`${itemCompeleted} of ${totalItem} tasks`}</span>
          )}
        </div>
      </div>
      <div id="viewListItem-container">{listDisplay}</div>
      <MyButton
        bgColor={"#b4b9ff"}
        textColor={"#000"}
        parentStyle={{ position: "absolute", bottom: "75px", right: "10px" }}
        click={addItem}
      />
    </div>
  );
}
