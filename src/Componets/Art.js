import React, { Component } from "react";
//  project

import Art from "../Images/Art.png";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="fp-1">
          <p id="heretxt">
            Your are here <strong> >> Charles Ostman Art</strong>{" "}
          </p>
        </div>
        <div className="emrgent">
          <p id="ptxt-1"><strong>Art</strong></p>
          <p id="emtxt">
            In the mid 1980s, these images were produced on an Amiga 2000, using
            an experimental raytracing program, RayDance, developed by a friend
            (Charlie Comstock). At the time, this was still a very embryonic
            concept. These images were literally "grown" in a virtual ecosystem.
            The content was created entirely from procedural algorithms,
            including some primitive "evolutionary" code scripts. I didn't
            "draw" anything, but instead spent a lot of time creating self
            replicating structures, surface maps and so on. This was a bit
            difficult to explain at the time (now this is very commonly done for
            myriad types of content). Some of the more traditional artists of
            the time found this general concept quite controversial. Only a very
            few of these were ever produced, that computer has long since ceased
            to exist, the program was never distributed commercially, I was one
            of the very few beta testers who worked with this. Some of these
            examples were eventually displayed at SigGraph, and at a few
            installations. Since then they have never been reproduced, there is
            no way to recreate any of this with those original tools.
          </p>
          <img className="art" src={Art} />
        </div>
      </>
    );
  }
}

export default Projects;
