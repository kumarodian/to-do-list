import React from "react";
import Header from "./components/Header";
import Heading from "./components/Heading";
import MyButton from "./components/MyButton";
import MyList from "./components/MyList";
import Footer from "./components/Footer";
import { ListContext } from "./ListContext";
import AddList from "./components/AddList";
import ViewList from "./components/ViewList";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate, getRandomTheme } from "./utils";
import "./App.css";
let listID = null;
function getNewList() {
  let THEME = getRandomTheme();
  listID = uuidv4();
  const obj = {
    id: listID,
    title: "My task",
    date: getCurrentDate(),
    bgColor: THEME.background,
    textColor: THEME.text,
    item: [],
  };
  return obj;
}

export default function App(props) {
  const {
    currentView,
    updateView,
    list,
    setList,
    setCurrentListId,
    currentListId,
  } = React.useContext(ListContext);
  var view;

  function addList() {
    const tmp = [getNewList(), ...list];
    console.log("before", tmp);
    //console.log(getNewList());
    setList((prev) => {
      return [getNewList(), ...prev];
    });
    //console.log("after", list);
    setCurrentListId(listID);
    updateView(tmp, "viewList");
  }
  if (currentView === "home") {
    view = (
      <>
        <Heading />
        <MyButton text="Add List" click={addList} />
        <MyList />
      </>
    );
  } else if (currentView === "viewList") {
    view = <ViewList />;
  } else {
    view = <AddList id={listID} />;
  }
  React.useEffect(() => {
    console.log("App effect");
    if (currentListId != null) {
      const copyList = list.map((obj) => {
        if (obj.id === currentListId) {
          const newItemAdd = obj.item.filter(
            (item) => item.title.trim().length > 0
          );
          return { ...obj, item: newItemAdd };
        } else return obj;
      });
      console.log("copylist", copyList);
      setList(copyList);
    }
  }, [list.length]);
  return (
    <div className="container">
      <Header />
      {view}
      <Footer />
    </div>
  );
}
