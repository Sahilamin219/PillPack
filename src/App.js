import React, { Component, Fragment } from "react";
import "./styles.css";
// import { Nav } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./componets/Navbar/Navbar";

class App extends Component {
  authenticated = () => {};
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
export default App;
