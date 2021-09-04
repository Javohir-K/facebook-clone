import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import Logo from "./images/logo.png";
import { auth, provider } from "./firebaseAuth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src={Logo} alt="" />
        <h4>acebook</h4>
        {/* <img src={LogoIcon} alt="" /> */}
        
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
