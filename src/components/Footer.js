import React from "react";
import { CalendarMonthRounded, HomeRounded } from "@mui/icons-material";
import { ListContext } from "../ListContext";
import "./Footer.css";

export default function Footer() {
  const defaultColor = "#8a8a8a";
  const { currentView, updateView, list } = React.useContext(ListContext);
  return (
    <footer>
      <div className="footer--icon" onClick={() => updateView("home")}>
        <HomeRounded
          sx={{
            color: `${currentView === "home" ? "#0C064D" : defaultColor}`,
          }}
        />
      </div>
      <div className="footer--icon">
        <CalendarMonthRounded
          sx={{
            color: `${currentView === "calendar" ? "#0C064D" : defaultColor}`,
          }}
        />
      </div>
    </footer>
  );
}
