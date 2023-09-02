import React, { Component } from "react";
//  project
import Iframe from "react-iframe";
class content extends Component {
  render() {
    return (
      <>
        <pre className="inter">Charles Ostman Interviews</pre>
        <div className="v1">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/YxWGd8TiEPU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>
        </div>
        <div className="v2">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/ylqAqyrD_hE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>{" "}
        </div>
        <div className="v3">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/ymyR5oN73l0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>{" "}
        </div>
        <div className="v4">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/rGeGhVUz3Q8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>{" "}
        </div>
        <div className="v5">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/YxWGd8TiEPU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>{" "}
        </div>
        <div className="v6">
          <Iframe
            width="432"
            height="234"
            src="https://www.youtube.com/embed/YxWGd8TiEPU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>{" "}
        </div>
      </>
    );
  }
}

export default content;
