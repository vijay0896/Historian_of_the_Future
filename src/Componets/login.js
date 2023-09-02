import React, { Component } from "react";
//  project
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function login() {
  return (
    <><pre id="l-1">Charles Ostman Mission  <br></br> Historian of the Future</pre>
   
    
      <Form className="loginform">
      <Form.Label id="fl-1">Login</Form.Label>
        <Form.Group className="mb-5">
       
          <Form.Control id="mb3-p" type="email" placeholder="Email Address*" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control id="mb3-p" type="password" placeholder="Password*" />
        </Form.Group>

       

        <Button id="loginbtn" type="submit">Login</Button>
        <p id="frgtp">Forget Password?</p>
      </Form>
    </>
  );
}

export default login;
