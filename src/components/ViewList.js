import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Delete, TaskAlt } from "@mui/icons-material";
import { ListContext } from "../ListContext";
export default function ViewList(props) {
  const { list, currentListId, setList, updateView } =
    React.useContext(ListContext);
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
  let title,
    listDisplay,
    itemCompeleted = 0,
    totalItem = 0;
  list.map((obj) => {
    if (obj.id === currentListId) {
      title = obj.title;
      totalItem = obj.item.length;
      listDisplay = obj.item.map(({ id, title, status }) => {
        if (status === "done") itemCompeleted++;
        return (
          <div
            className={`viewlist--item${
              status === "done" ? " viewlist--item--completed" : ""
            }`}
            key={id}
            onClick={() => changeItemStatus(id)}
          >
            {status === "done" && <hr />}
            {title}
          </div>
        );
      });
    }
    return true;
  });
  function deleteList() {
    const copyItem = list.filter((obj) => obj.id !== currentListId);
    setList(copyItem);
    updateView("home");
  }
  return (
    <div>
      <div id="viewlist">
        <div id="viewlist--title">
          <span>{title}</span>
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
                      onClick={deleteList}
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
          {totalItem && `${itemCompeleted} of ${totalItem} tasks`}
        </div>
      </div>
      {listDisplay}
    </div>
  );
}
