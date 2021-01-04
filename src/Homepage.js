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
        <form className="example">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a product or brand ...  "
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <h1 className="centre">
          <div className="space" />
          How can we help you
        </h1>
        <div className="section">
          <div className="card">
            <h1 className="centre">
              <i className="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h">Every Week</p>
          </div>
          <div className="space" />
          <div className="card">
            <h1 className="centre">
              <i className="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h"> Once Or twice a month </p>
          </div>
          <div className="space" />
          <div className="card">
            <h1 className="centre">
              <i className="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h">Once in a while</p>
          </div>
        </div>
      </>
    );
  }
}
export default Homepage;
// fas fa-ambulance
