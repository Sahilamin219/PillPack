import React, { Component, Fragment } from "react";
import "./styles.css";
// import { Nav } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./components/Navbar/Navbar";
import Lastpage from "./Lastpage";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import Switch from "react-bootstrap/esm/Switch";

class App extends Component {
  state = {
    user: null
  };
  authenticated = () => {};
  render() {
    return (
      <div id="container" className="inner-container">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Navbar />

        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/home" component={Lastpage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
// if(this.state.email && this.state.password){}
