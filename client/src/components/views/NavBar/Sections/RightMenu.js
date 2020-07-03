import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css'
import history from './../../../history';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  // console.log("userData", user.userData);

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className="right-menu">
        <div className="signin-button">
          <a className="right-menu-style" href="/login">Sign In</a>
        </div>
        <div className="signup-button">
          <a className="right-menu-style" href="/register">Sign Up</a>
        </div>

      </div>
    )
  } else {
    return (
      <div>
        <div className="logout-button">
            <span style={{color: "rgb(255, 255, 255)", fontSize: "12px", cursor: "pointer"}} className="right-menu-style" onClick={logoutHandler}>Log Out</span>
        </div>
      </div>
    )
  }
}

export default withRouter(RightMenu);

