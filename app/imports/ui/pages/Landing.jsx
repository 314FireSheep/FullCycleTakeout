import React from 'react';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PageIDs } from '../utilities/ids';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container>
    <div id={PageIDs.landingPage}>
      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h1 style={{ paddingTop: '20px', color: 'white', fontSize: '36pt' }}>
            Welcome to FIRESHEEP!
          </h1>
          <h3 style={{ paddingBottom: '20px', color: 'white' }}>
            An application to order with Full Cycle Takeout
          </h3>
        </Container>
      </Row>
      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>Optional: Sign in or sign up by clicking on the login button on the top right....</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/home-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/profiles-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>...then go to Order to order your containers and/or utensils</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/add-project-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/projects-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            After, it will take you to the Confirmation page. Select your choice of payment
          </h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/interests-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/filter-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>Finally, it will take you to your order details</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/add-project-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/projects-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            If you want to search your order, you can go to the Search page and search your order
          </h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/interests-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/filter-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            Start Your Order Here!
          </h2>

          <Nav className="justify-content-center">
            <NavLink as={NavLink} to="/order" key="order">
              <Button to="/order" className="my-3 px-5 ani">Go to Order</Button>
            </NavLink>
          </Nav>
        </Container>
      </Row>
    </div>
  </Container>
);

export default Landing;
