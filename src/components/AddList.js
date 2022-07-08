import React from "react";
import { Edit } from "@mui/icons-material";
import MyButton from './MyButton';
import "./AddList.css";

export default function AddList(props) {
  const [title, setTitle] = React.useState("My Task");
  return (
    <div id="addList">
      <div id="title--edit">
        <input
          placeholder="My Task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Edit />
      </div>
      <MyButton bgColor={"#b4b9ff"} textColor={"#000"} parentStyle={{position:'absolute',bottom:'10px',right:'-15px'}}/>
    </div>
  );
}
