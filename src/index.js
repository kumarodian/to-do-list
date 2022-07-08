import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {CustomListContext} from './ListContext';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CustomListContext><App/></CustomListContext>);

