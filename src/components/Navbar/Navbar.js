import React, { Component } from "react";
// import { Nav } from "react-bootstrap";
import { MenuItems } from "./Menuitems";
import { Button } from "../Button";
import "./Navbar.css";
import {
  Route,
  withRouter,
  Redirect,
  useHistory,
  Link
} from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // constructor(props, context) {
  //   super(props, context);
  //   }
  handleSubmit = (event) => {
    event.preventDefault();
    // <Redirect push to="/login" />
    // <UserForm/>
    // const history = useHistory();
    this.props.history.push("/login");
    // <Route componets={Login} />;
    console.log("1");
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className={this.state.clicked ? "none" : "navbar-logo"}>
          <i className={this.state.clicked ? "none" : "fas fa-ambulance"}></i>
          XpressDawa
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a className="items.cName" href={items.url}>
                  {items.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <form onClick={this.handleSubmit}>
          <Button className="nav-links-mobile">Sign Up</Button>
        </form> */}
        <Link to="/login" className="nav-links-mobile">
          Sign Up
        </Link>
      </nav>
    );
  }
}
export default Navbar;
// fas fa-ambulance
