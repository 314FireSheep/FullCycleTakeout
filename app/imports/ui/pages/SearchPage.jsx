import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageIDs } from '../utilities/ids';

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

      <Row className="justify-content-center mb-5 mx-1">
        <Col xs={11} md={8} className="header text-white">
          <h1 className="text-center">Search Page</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-1 mb-5">
        <Col xs={11} md={8}>
          <Card className=" h-100 p-5 text-center" style={{ backgroundColor: 'white' }}>
            <Form onSubmit={handleSearch}>
              <Form.Group controlId="formUsernameSignUp" className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Order ID"
                  onChange={(e) => setOrderid(e.target.value)}
                  required
                  className="p-3"
                />
              </Form.Group>
              <Button variant="primary" style={{ backgroundColor: '#84a98c', borderColor: '#84a98c' }} type="submit" className="my-3 px-5 ani mb-5">Search</Button>
              {
                ready && AdminUser ? (
                  <table>
                    <thead>
                      <tr style={{ backgroundColor: '#536B60' }} className="text-white">
                        <th>ID</th>
                        <th>Status</th>
                        <th>Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OrderData.map((data, index) => (
                        <tr key={index}>
                          <td className="px-4">{Object.values(data)[0]}</td>
                          <td>{Object.values(data)[1]}</td>
                          <td>
                            {Object.entries(data)
                              .slice(2)
                              .map(([key, value]) => (
                                <div key={key}>
                                  <strong>{key}:</strong> {value}
                                </div>
                              ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
