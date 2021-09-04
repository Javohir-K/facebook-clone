import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FeedbackIcon from "@material-ui/icons/Feedback";
import './Settings.css'

function Settings() {
  return (
    <div className="settings_container">
      <div className="settings_item">
        <SettingsIcon />
        <p>Settings</p>
      </div>
      <div className="settings_item">
        <FeedbackIcon />
        <p>Feedback & Support</p>
      </div>
      <a href="/" className="settings_item">
        <ExitToAppIcon />
        <p>Log Out</p>
      </a>
    </div>
  );
}

export default Settings;
