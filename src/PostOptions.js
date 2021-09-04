import React from "react";
import "./Post.css";

//Icons
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post() {
  return (
      <div className="post_options">
        <div className="post_option">
            <ThumbUpIcon />
            <p>Like</p>
        </div>
        <div className="post_option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
        </div>
        <div className="post_option">
            <NearMeIcon />
            <p>Share</p>
        </div>
        <div className="post_option">
            <AccountCircleIcon />
            <ExpandMoreOutlined/>
        </div>
      </div>
  );
}

export default Post;
