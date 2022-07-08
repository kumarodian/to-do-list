import React from "react";
import Header from "./components/Header";
import Heading from "./components/Heading";
import MyButton from "./components/MyButton";
import MyList from "./components/MyList";
import Footer from "./components/Footer";
import { ListContext } from "./ListContext";
import AddList from "./components/AddList";
import "./App.css";

export default function App(props) {
  return (
    <ListContext.Consumer>
      {({ currentView,updateView }) => (
        <div class="container">
          <Header />
          {currentView === "home" ? (
            <>
              <Heading />
              <MyButton text="Add List" click={()=>updateView('addList')}/>
              <MyList />

            </>
          ) : <AddList/>}
          <Footer />
        </div>
      )}
    </ListContext.Consumer>
  );
}
