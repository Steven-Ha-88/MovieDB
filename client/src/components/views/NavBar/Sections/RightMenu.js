import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css'

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className="right-menu">
        <div className="signin-button">
          <a className="right-menu-style" href="/login">Sign In</a>
        </div>
        <div className="signup-button">
          <a style={{textAlign: "center", fontSize: "12px"}}className="right-menu-style" href="/register">Sign Up</a>
        </div>
      </div>
    )
  } else {
    return (
      <div className="logout-button">
          <a style={{color: "rgb(255, 255, 255)", fontSize: "12px"}} className="right-menu-style" onClick={logoutHandler}>Log Out</a>
      </div>
    )
  }
}

export default withRouter(RightMenu);

