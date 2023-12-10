import React, { useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { addOrder } from '../../startup/both/Methods';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageIDs } from '../utilities/ids';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const { ready } = useTracker(() => {
    // Ensure that minimongo is populated with all collections prior to running render().
    const sub1 = Meteor.subscribe(Orders.userPublicationName);
    return {
      ready: sub1.ready(),
    };
  }, []);
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const handleClick = (buttonName) => {
    Meteor.call(addOrder, location.state, currentUser, (error, id) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Project added successfully', 'success').then((value) => {
          if (value) {
            setLoading(true);
            navigate(`/result/${id}`);
          }
        });
      }
      setActiveButton(buttonName === activeButton ? null : buttonName);
    });
  };

  const handleEdit = () => {
    navigate('/', { state: location.state });
  };

  if (!location.state) {
    return <Navigate to="/" replace />;
  }
  return ready ? (
    <Container id={PageIDs.confirmationPage}>
      <Row className="my-5 text-center">
        <h1>Confirmation Page</h1>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-10" xs={6} md={6}>
          <Card className="p-5" style={{ backgroundColor: '#e1ecf7' }}>
            <ul>
              {
                Object.entries(location.state).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))
              }
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="py-4 justify-content-center text-center">
        <Col className="col-10" xs={6} md={6}>
          <Button onClick={handleEdit} variant="primary" disabled={loading} type="submit" className="w-100 my-2">restart Order</Button>
          <Button onClick={() => handleClick('Button1')} disabled={loading} variant="primary" type="submit" className="w-100">Credit Card</Button>
          <Button onClick={() => handleClick('Button2')} disabled={loading} variant="primary" type="submit" className="w-100 my-2">Student ID</Button>
          <Button onClick={() => handleClick('Button3')} disabled={loading} variant="primary" type="submit" className="w-100 my-2" id="cashBut">Cash</Button>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};
export default ConfirmationPage;
