import React, { Component } from "react";
//  project
import EM1 from "../Images/Em1.png";
import EM2 from "../Images/Em2.png";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="fp-1">
          <p id="heretxt">
            Your are here <strong> >> Charles Ostman Projects</strong>{" "}
          </p>
        </div>
        <div className="emrgent">
          <p id="ptxt-1">Emergent Evolutionary Eventhorizon </p>
          <p id="emtxt">
            Knowledge complexity, scale, and velocity is exceeding human
            capacity for mission critical decision rendering compressed into
            ever shortening time scales, in a hyperconnected operational
            ecosystem.
          </p>
          <img className="em1" src={EM1} />
        </div>
        <hr></hr>
        <div>
          <p id="ptxt-1">Quantum Biology</p>
          <p id="emtxt">
            A brief primer on Quantum Physics .A slightly longer primer on
            quantum biology, current hard data and<br></br> experiments in quantum
            consciousness.
          </p>
          <img className="em1" src={EM2} />
        </div>
      </>
    );
  }
}

export default Projects;
