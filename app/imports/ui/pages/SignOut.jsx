import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Row className="justify-content-center my-5 mx-1">
      <Col xs={11} md={8} className="header text-white">
        <Col id={PageIDs.signOutPage} className="text-center"><h1>You are signed out.</h1></Col>
      </Col>
    </Row>

  );
};

export default SignOut;
