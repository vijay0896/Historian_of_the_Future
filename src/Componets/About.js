import React, { Component } from "react";
import Cimg from "../Images/charles_img.png";
//  project
class About extends Component {
  render() {
    let CI = "This is Charles Ostman Photo  ";
    return (
      <>
        <div className="aboutbg">
          <pre className="ab1">About Charles Ostman</pre>
          <img className="Cimg" src={Cimg} alt={CI} />
          <p id="introA">
            I am a lecturer, author and a speaker with 34+ years of experience
            in the fields of electronics, physics, materials science, computing,
            and various forms of applied AI and "Artificial Life". My primary
            focus was on specialized materials, including DSME (shape memory
            effect) metallic alloys, and various material systems with unique
            electronic and photonic properties. At Los Alamos, this experience
            was applied to work on the Antares Laser project, the world's
            largest / most powerful defense laser system successfully
            demonstrated at the time (during the SDI / "Star Wars" development
            program).
          </p>
        </div>
      </>
    );
  }
}

export default About;
