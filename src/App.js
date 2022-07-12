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
let listID = null;
export default function App(props) {
  const { currentView, updateView, list, setList } =
    React.useContext(ListContext);
  var view;
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

  function addList() {
    setList([getNewList(), ...list]);
    updateView("addList");
  }
  return (
    <div className="container">
      <Header />
      {view}
      <Footer />
    </div>
  );
}
