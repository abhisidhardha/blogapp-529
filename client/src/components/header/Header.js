import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/slice/userAuthorslice";
import "./Header.css";
function Header() {
  let { loginUserStatus, currentUser } = useSelector(
    (state) => state.userAuthorLoginReducer
  );
  let dispatch = useDispatch();

  function signout() {
    dispatch(resetState());
  }

  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm fs-5">
        <div className="container-fluid">
          <div className="rounded-2">
                <a href="#" className="navbar-brand bg-light mx-auto">
                    <img className="" src={logo} alt="" width={"60px"} />
                </a>
                <p className="d-inline px-2 fs-2" style={{fontFamily:"Edu TAS Beginner, cursive"}}>Wisdom Whisper</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex navbar-nav ms-auto mb-2">
              {loginUserStatus === false ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to=""
                      style={{ color: "white", fontSize: "22px" }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="signup"
                      style={{ color: "white", fontSize: "22px" }}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="signin"
                      style={{ color: "white", fontSize: "22px" }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                    <p className="fs-3 text-white d-inline" style={{fontFamily:'"Racing Sans One", sans-serif'}}>{currentUser.username}  <span className="text-light"> [{currentUser.userType}]</span></p>
                  <NavLink className="nav-link d-inline" to="signin" onClick={signout}>
                    Signout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
