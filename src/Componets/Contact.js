import React, { Component } from "react";
//  project
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <><p id="contme"> CONTACT ME</p>
    <p id="cs-txt">To Share, To connect, To Inspire</p>
    
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control id="mb3" type="text" placeholder="Name*" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control id="mb3" type="email" placeholder="Email Address*" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control id="mb3" type="text" placeholder="Subject*" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control id="mb4" type="text" placeholder="Message*" />
        </Form.Group>

        <Button id="sendbtn" type="submit">Send</Button>
      </Form>
      
        
    </>
  );
}

export default Contact;
