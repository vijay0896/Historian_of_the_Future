import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../Images/1s.jpg";
import s3 from "../Images/2s.png";
import s2 from "../Images/3s.jpg";
import img1 from "../Images/1.webp";
import img2 from "../Images/3.jpg";
import img3 from "../Images/2.webp";

//  project
class Home extends Component {
  render() {
    let t1 = "this is  t1 ";
    let t2 = "this is  t2 ";
    let t3 = "this is  t3 ";

    return (
      <>
        <Carousel className="c1">
          <Carousel.Item interval={3}>
            <img className="s1" src={s1} />
          </Carousel.Item>

          <Carousel.Item interval={3}>
            <img className="s2" src={s2} />
          </Carousel.Item>
          <Carousel.Item interval={3}>
            <img className="s3" src={s3} />
          </Carousel.Item>
        </Carousel>
        <div>
          <img className="img1" src={img1} alt={t1} />
          <pre className="img1h">The Intelligent Panspermia Protocol</pre>
          <pre className="img1txt">
            The purpose of the intelligent panspermia (Greek term for<br></br>
            “the spreading of seeds) agenda would be to enable a form<br></br>of
            pre-emptive “version control” of emergent civilizations in<br></br>
            relative proximitysolar systems.
          </pre>
        </div>

        <div className="bg2">
          <pre className="img2h">Entering the Quantum Age</pre>
          <img className="img2" src={img2} alt={t2} />
          <pre className="img2txt">
            An argument can be made that we are entering what could be <br></br>
            termed as"the quantum age", a era in which the seemingly<br></br>
            impossible not only becomes possible, but mandatory in this<br></br>
            next increment of accelerating evolutionary morphology.
          </pre>
         
        </div>

        <div>
          <img className="img3" src={img3} alt={t3} />
          <pre className="img3h">Evolving Existence Matrices</pre>
          <pre className="img3txt">
            {" "}
            A state of personal existence, in which biological DNA has<br></br>{" "}
            been the data set that codifies our existence template in the<br></br>{" "}
            real world, projected to physical proximity in localized time,
            <br></br> has become less relevant than the “virtual DNA” of our
            virtual<br></br> existence template, which is not limited to physical
            proximity<br></br> and localized time, but instead is projected to the
            entire<br></br> planet,in real time, all the time.
          </pre>
        </div>

        
      </>
    );
  }
}

export default Home;
