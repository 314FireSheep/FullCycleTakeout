import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { ComponentIDs, PageIDs } from '../utilities/ids';

const SearchPage = () => {

  const { ready, AdminUser } = useTracker(() => {
    const sub1 = Meteor.subscribe(Orders.userPublicationName);
    const user = Roles.userIsInRole(Meteor.userId(), 'admin') ? Meteor.user().username : '';
    return {
      ready: sub1.ready(),
      AdminUser: user,
    };
  }, []);
  const [OrderId, setOrderid] = useState();
  const navigate = useNavigate();
  const OrderData = (Orders.collection.find());
  const handleSearch = () => {
    navigate(`/return/${OrderId}`);
  };
  return (
    <Container className="mt-5" id={PageIDs.searchPage}>

      <Row className="justify-content-center">
        <Col md={7}>
          <h1 className="text-center mb-4">Search Page</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-1">
        <Col className="col-10" xs={6} md={10}>
          <Card className=" h-100 p-5 text-center" style={{ backgroundColor: '#e1ecf7' }}>
            <Form onSubmit={handleSearch} id={ComponentIDs.searchForm}>

              <Form.Group controlId="formUsernameSignUp" className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Order ID"
                  onChange={(e) => setOrderid(e.target.value)}
                  required
                  className="p-3"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="my-3 px-5">Search</Button>
              {
                ready && AdminUser ? (
                  <ul>
                    {OrderData.map((data, index) => (
                      <li key={index}>
                        <div>
                          {Object.entries(data).map(([key, value]) => (
                            <div key={key}>
                              <strong>{key}:</strong> {value}
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : <LoadingSpinner />
              }
            </Form>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default SearchPage;
