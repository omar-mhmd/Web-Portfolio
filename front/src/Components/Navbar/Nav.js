import React, { Component } from "react";
import "./Nav.css";
import {Link} from "react-router-dom"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <label
            className="navbar-toggle"
            id="js-navbar-toggle"
            htmlFor="chkToggle"
          >
            <i className="fa fa-bars" />
          </label>
         <img className="logo" src={require("../../Assets/logo-2.png")}/>
          <input type="checkbox" id="chkToggle" />
          <ul className="main-nav" id="js-menu">
            <li>
            <Link to="/" className="nav-links">
             
                Home
                </Link>
              
             
            </li>
            <li>
            <Link to="/Gallery" className="nav-links">
             
             Gallery
             </Link>
            </li>
            <li>
            <Link to="/Events" className="nav-links">
             
             Events
             </Link>
            </li>
            <li>
            <Link to="/Contact" className="nav-links">
             
             Contact
             </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
