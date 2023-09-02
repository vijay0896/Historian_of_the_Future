import React from "react";
import { NavLink } from "react-router-dom";
import { CDropdownItem } from '@coreui/react';
import { CDropdownToggle } from '@coreui/react';
import { CDropdownMenu } from '@coreui/react';



// Project
import { CDropdown } from '@coreui/react';
function Navbar() {
  return (<>
  <nav>
      <NavLink id="Logo" to="/">
        Charles Ostman
      </NavLink>
      <NavLink id="sLogo" to="/">
        <small> Historian of the future </small>
      </NavLink>

      <NavLink id="home" to="/">
        Home
      </NavLink>

      <NavLink id="Content" to="/Content">
        Content
      </NavLink>

      <NavLink id="Mission" to="/Mission">
        Mission
      </NavLink>

      <NavLink id="about" to="/about">
        About
      </NavLink>

      <NavLink id="contact" to="/contact">
        Contact
      </NavLink>


      <NavLink to="/login">
        <button id="login">Login</button>
      </NavLink>
      
    </nav>
    
        
        <CDropdown >
          <CDropdownToggle color="white" onBlurCapture={1} id="more" > More</CDropdownToggle>
          
          <CDropdownMenu  id="m1"  >
             
              < NavLink className="Projects" to="/Projects" >Project</NavLink> 
            
            
            <hr></hr>
            < NavLink className="Atrs" to="/Art" >Art</NavLink>
           
          </CDropdownMenu>
          
        </CDropdown>
       
   
  </>
    
  );
}

export default Navbar;
