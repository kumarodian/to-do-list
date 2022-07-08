import React from "react";
import { CloseRounded, RocketLaunch } from "@mui/icons-material";
import { ListContext } from "../ListContext";
const navStyle = {
  marginBottom: "35px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const iconStyle = {
  fontSize: "40px",
};
export default function Header() {
  return (
    <ListContext.Consumer>
      {({currentView,updateView}) => (
        <nav style={navStyle}>
          <div><RocketLaunch style={iconStyle} /></div>
          {currentView==='addList' &&<div onClick={()=>updateView('home')} > <CloseRounded style={{ cursor: "pointer" }} /></div>}
        </nav>
      )}
    </ListContext.Consumer>
  );
}
