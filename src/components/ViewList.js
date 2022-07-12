import React from "react";
import { ListContext } from "../ListContext";
export default function ViewList(props) {
  const { list, currentListId, setList } = React.useContext(ListContext);
  function changeItemStatus(itemId) {
    console.log(itemId);
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
  return (
    <div>
      <div id="viewlist">
        <div id="viewlist--title">{title}</div>
        <div id="viewlist--taskCount">
          {totalItem && `${itemCompeleted} of ${totalItem} tasks`}
        </div>
      </div>
      {listDisplay}
    </div>
  );
}
