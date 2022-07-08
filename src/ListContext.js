import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ListContext = createContext();
export default function CustomListContext(props) {
  const [currentView, setCurrentView] = useState("home");
  const [list, setList] = useState([
    {
      title: "My list",
      date: "23-Nov",
      bg: "#3A2B85",
      item: [
        {
          title: "Get Milk",
          status: "done",
        },
        {
          title: "Write Diary",
          status: "",
        },
        {
          title: "Call Mom at 5",
          status: "done",
        },
        {
          title: "Walk",
          status: "done",
        },
        {
          title: "Dinner and Party",
          status: "",
        }
      ],
    },{
        title: "My list",
        date: "23-Nov",
        bg: "#3A2B85",
        item: [
          {
            title: "Get Milk",
            status: "done",
          },
          {
            title: "Write Diary",
            status: "",
          },
          {
            title: "Call Mom at 5",
            status: "done",
          },
          {
            title: "Walk",
            status: "done",
          },
          {
            title: "Dinner and Party",
            status: "",
          }
        ],
      }
  ]);
  function updateList() {}
  function updateView(view) {
    setCurrentView(view);
  }

  return (
    <ListContext.Provider value={{ list, updateList, currentView, updateView }}>
      {props.children}
    </ListContext.Provider>
  );
}

export { CustomListContext, ListContext };
