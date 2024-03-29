import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="footer mt-auto">
    <Container fluid expand="xl" className="bg-dark py-4">
      <Row className="justify-content-center">
        <Col className="justify-content-center ps-5">
          <h5 className="text-white">About Us</h5>
          <Nav.Link href="https://www.zerowasteoahu.org/" target="_blank">Zero Waste Oahu</Nav.Link>
          <Nav className="text-white">Page Was Produced By FireSheep</Nav>
        </Col>
        <Col>
          <h5 className="text-white">Resources</h5>
          <Nav.Link href="https://www.zerowasteoahu.org/what-we-do" target="_blank">About Zero Waste Oahu</Nav.Link>
          <Nav.Link href="https://www.zerowasteoahu.org/contact" target="_blank">Contact Zero Waste Oahu</Nav.Link>
          <Nav.Link href="https://www.zerowasteoahu.org/overview" target="_blank">Zero Waste Oahu Resources</Nav.Link>
        </Col>
        <Col className="justify-content-center">
          <h5 className="text-white">Contacts</h5>
          <Nav.Link className="white" href="https://www.instagram.com/zerowaste_oahu/?igshid=MTJxY3NydTdxN3M0MA%3D%3D" target="_blank">Zero Waste Oahu <Instagram /></Nav.Link>
          <Nav className="text-white text-center">OAHU.ZEROWASTE@GMAIL.COM</Nav>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
