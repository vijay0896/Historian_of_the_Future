import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import Missionimg from "../Images/mi.png";

function Mission() {
  const [open, setOpen] = useState(false);
  let Mi = "this is  mi ";

  return (
    <>
      <p className="rby">Reason behind why I do, what I do...</p>
      <p className="rbtxt">
        The mission here is to provide insight, and instigate adaptive processes
        which might better equip<br></br> our collective capacity for navigating
        through this evolutionary eventhorizon to a more functional
        <br></br>form and ways of being.
      </p>
      <Button
        className="vijay"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Read More
      </Button>
      <Collapse in={open}>
        <div className="readmtxt">
          What had once been considered as philosophical constructs for a future
          time are now rapidly becoming the<br></br> current reality. We are
          enmeshed into an emergent co-evolutionary human / synthetic
          symbiosis,not specifically<br></br> by design, but by evolutionary
          momentum. Separation between biological and non-biological forms of
          intelligence and life are becoming ever less distinguishable, or
          relevant. Synthetic sentience may not necessarily be recognized as it
          emerges. Life as it is currently known to be is no longer confined to
          biological processes or constructs, but is encompassing entities,
          systems and networks which behave biologically. Synthetic biology is
          rapidly becoming manifest in myriad applications ranging from genetic
          modification to rendering entire organisms and hybrid forms of life on
          demand. ​ There is a steep learning curve (and by implication,
          filtration process), that shapes a planetary scale civilization to
          exist for x amount of time, slowly at first, consuming the planetary
          resources as it becomes more socially organized and technically
          advanced . . . until it reaches a relatively sudden acceleration (as
          we are now), when it either graduates to that next level of existence
          where it can become truly extra-terrestrial, or expunges itself or the
          home planet before it graduates beyond that point. ​ This suggests a
          necessary type of evolutionary imperative . . . to have a quasi self
          regulating cosmic ecosystem in which the vast majority of planetary
          civilizations who do not make the grade are subject to a defacto form
          of planetary quarantine confinement. ​ Only those planetary scale
          civilizations who haven't expunged themselves (or their home planet)
          through bad mismanagement, avarice, self induced planetary disaster or
          some other form of catastrophic dysfunction can actually graduate into
          this cosmic ecosystem. ​ We are, at this moment, rapidly approaching
          this planetary scale evolutionary eventhorizon. ​ The mission here is
          to provide insight, and instigate adaptive processes which might
          better equip our collective capacity for navigating through this
          evolutionary eventhorizon to a more functional form and ways of being.
        </div>
      </Collapse>
      <img className="mi" src={Missionimg} alt={Mi} />
    </>
  );
}

export default Mission;
