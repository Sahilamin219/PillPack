import React, { Component } from "react";
import { Nav } from "react-bootstrap";
// import './helloworld.jpeg'
import "./Homepage.css";
class Homepage extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <h1 className="centre">
          <div className="space" />
          How can we help you
        </h1>
        <div className="section">
          <div class="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container">Every Week</p>
          </div>
          <div className="space" />
          <div class="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container"> Once Or twice a month </p>
          </div>
          <div className="space" />
          <div className="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container">Once in a while</p>
          </div>
        </div>
      </>
    );
  }
}
export default Homepage;
// fas fa-ambulance
