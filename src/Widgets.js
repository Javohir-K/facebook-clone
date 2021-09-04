import React from "react";
import "./Widgets.css";
import Settings from "./Settings";

function Widgets() {
  return (
    <div className="widgets">
      <Settings/>
      <h2>Notifications</h2>
      <div className="widgets_notf">
        <p>Empty</p>
      </div>
    </div>
  );
}

export default Widgets;
