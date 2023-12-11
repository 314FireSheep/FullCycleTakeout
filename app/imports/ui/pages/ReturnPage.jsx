import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { returnOrder } from '../../startup/both/Methods';
import { PageIDs } from '../utilities/ids';

const ReturnPage = () => {
  const navigate = useNavigate();
  const { ready } = useTracker(() => {
    // Ensure that minimongo is populated with all collections prior to running render().
    const sub1 = Meteor.subscribe(Orders.userPublicationName);
    return {
      ready: sub1.ready(),
    };
  }, []);
  const { OrderId } = useParams();

  const order = Orders.collection.findOne({ _id: OrderId });

  const handleReturn = () => {
    Meteor.call(returnOrder, OrderId, 'returned', (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Project added successfully', 'success').then((value) => {
          if (value) {
            navigate('/search');
          }
        });
      }
    });
  };

  return ready ? (
    <Container className="mt-5" id={PageIDs.returnPage}>
      <Row className="justify-content-center mb-4 mx-1">
        <Col xs={11} md={8} className="header text-white text-center">
          <h1 className="text-center">Make Sure all the items are ready to return</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mx-1">
        <Col xs={11} md={8} className="header text-white text-center" style={{ backgroundColor: '#908D8B' }}>
          <h4>Order ID: {OrderId}</h4>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4 justify-content-center m-3">
        <Card className="p-5" style={{ backgroundColor: 'white' }}>
          <Card.Title>
            <h3 className="text-center">Order Details</h3>
            <br />

            <Col className="col-12">
              <Card className="p-3">
                <ul>
                  {Object.entries(order).map(([key, value]) => (
                    typeof value === 'number' && (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  ))}
                </ul>
              </Card>
            </Col>
            <Button onClick={handleReturn} variant="primary" type="submit" className="w-100 my-2 mt-3" id="returnOrder">Return</Button>
          </Card.Title>
        </Card>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ReturnPage;
