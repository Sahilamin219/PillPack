import React, { Component, Fragment } from "react";
import "./styles.css";
// import { Nav } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./componets/Navbar/Navbar";
import Lastpage from "./Lastpage";
import Homepage from "./Homepage";

class App extends Component {
  authenticated = () => {};
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Lastpage />
      </div>
    );
  }
}
export default App;
