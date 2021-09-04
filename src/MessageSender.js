import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import db from "./firebaseAuth";
import firebase from "firebase";
import { storage } from "./firebaseAuth";

import "./MessageSender.css";

//Icons
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [{ user }, dispatch] = useStateValue();


  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (imageUrl == null) return;

    //database stuff

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <button onClick={handleSubmit} type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo / Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling / Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
