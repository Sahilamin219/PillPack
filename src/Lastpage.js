import React, { Component } from "react";
import "./Lastpage.css";
class Lastpage extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <footer>
        <div className="row-l">
          <div className="menu">
            <div className="column">
              <div className="logo-l">
                <div class="conatiner">
                  <i className="fas fa-ambulance">XpressDawa</i>
                </div>
              </div>
              <p className="blue">
                <b>Contact Us </b>
                999-010-8490
              </p>
              <space-l />
            </div>
          </div>
          <space-l />
          <div className="main">
            <img
              src="./assets/try.jpeg"
              alt="Man with Medicines"
              width="400"
              height="200"
              className="block-l"
            />
            <div className="conatiner">
              <div className="column">
                <ul>
                  <b>Our Service</b>
                </ul>
                <ul>Pharmacy Locations</ul>
                <ul>PharmacyOS</ul>
                <ul>Doctor Resources</ul>
                <ul>Help</ul>
              </div>
            </div>
            <div className="conatiner-l">
              <div className="column">
                <ul>
                  <b>Company</b>
                </ul>
                <ul>Careers</ul>
                <ul>Press</ul>
                <ul>Folks</ul>
                <ul>Service Guide</ul>
              </div>
            </div>
            <div className="conatiner-l">
              <div className="column">
                <ul>
                  <b>Legal</b>
                </ul>
                <ul>Terms of Use</ul>
                <ul>Privacy Notice</ul>
                <ul>Notice of Privacy Practices</ul>
                <ul>Other Legal Notices</ul>
                <ul>Nondiscrimination</ul>
              </div>
            </div>
            <div className="conatiner-l">
              <div className="column">
                <ul>
                  <b>For Doctors</b>
                </ul>
                <ul>PillPack by Amazon Pharmacy</ul>
                <ul>
                  250 Commercial Street, Suite 2012 Manchester, NH 03101
                  E-Scribe: NCPDP 3061582
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Lastpage;
// fas fa-ambulance
