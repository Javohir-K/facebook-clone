import React from "react";
import logo from "./images/logo.png";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";


import { useStateValue } from "./StateProvider";

//Styles
import "./Header.css";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="logo" />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" name="" id="" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option-active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
       
      </div>
    </div>
  );
}
export default Header;
