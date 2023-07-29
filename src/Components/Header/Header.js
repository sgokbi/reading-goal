import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import user from "../../images/user.jpg";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <h1 className="logo">Reading Goal</h1>

        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Achievement</a>
          </li>
        </ul>
        <div className="profile">
          {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
          <div className="profile-img">
            <img src={user} alt="" />
          </div>
          <h3> Sisilia</h3>
        </div>
      </nav>
    </div>
  );
};

export default Header;
