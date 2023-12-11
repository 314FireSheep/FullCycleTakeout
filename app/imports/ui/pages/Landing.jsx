import React from 'react';
import { Button, Container, Image, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PageIDs } from '../utilities/ids';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container>
    <div id={PageIDs.landingPage}>
      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ paddingTop: '20px', color: 'white', fontSize: '36pt' }}>
            Welcome to FIRESHEEP!
          </h2>
          <h3 style={{ paddingBottom: '20px', color: 'white' }}>
            An application to order with Full Cycle Takeout
          </h3>
        </Container>
      </Row>
      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>Optional: Sign in or sign up by clicking on the login button on the top right...</h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Login.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>...then go to Order to order your containers and/or utensils.</h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Order.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            After, it will take you to the Confirmation page. Select your choice of payment.
          </h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Confirmation.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>Finally, it will take you to your order details.</h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Result.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            For Admin: If you want to see your history, you can view it in the History page.
          </h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/History.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            For Admin: Go to the Search page to search up a specific order.
          </h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Search.png" width={500} />
          </Row>
        </Container>
      </Row>

      <Row className="my-5 mx-1 text-center">
        <Container className="header2 text-white ani">
          <h2 style={{ color: '#E8E8E3' }}>
            For Admin: Once you have searched up an ID, you can view the order.
          </h2>
          <h2 style={{ color: '#E8E8E3' }}>If the items have been returned, you can update the status</h2>
          <Row md={1} lg={2} className="justify-content-center pt-3">
            <Image src="/images/Return.png" width={500} />
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
