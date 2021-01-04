import React, { Component, Fragment } from "react";
import "./styles.css";
// import { Nav } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./componets/Navbar/Navbar";
import Lastpage from "./Lastpage";
import Homepage from "./Homepage";
import { Route, withRouter } from "react-router-dom";
import Login from "./Login";

class App extends Component {
  authenticated = () => {};
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Lastpage />
        <Route path="/login" componets={Login} />
      </div>
    );
  }
}
export default App;
// if(this.state.email && this.state.password){}
