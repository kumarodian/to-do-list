import React, { useState, createContext } from "react";

const ListContext = createContext();
export default function CustomListContext(props) {
  const [currentView, setCurrentView] = useState("home");
  const [currentListId, setCurrentListId] = useState(null);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  React.useEffect(
    () => localStorage.setItem("list", JSON.stringify(list)),
    [list]
  );
  function updateView(view) {
    setCurrentView(view);
  }
  function deleteList() {
    const copyList = list.filter((obj) => obj.id !== currentListId);
    setList(copyList);
    setCurrentListId(null);
    setCurrentView("home");
  }
  return (
    <ListContext.Provider
      value={{
        list,
        currentView,
        updateView,
        setList,
        currentListId,
        setCurrentListId,
        deleteList,
        setCurrentView,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
}

export { CustomListContext, ListContext };
