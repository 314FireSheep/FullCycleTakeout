import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';

function getOrderData(ids) {
  return Orders.collection.find({ _id: { $in: ids } }).fetch();
}
const HistoryPage = () => {
  const { ready, currentUser } = useTracker(() => {
    const sub1 = Meteor.subscribe(Orders.userPublicationName);
    const user = Meteor.user() || {}; // Handle null case to avoid delays
    return {
      ready: sub1.ready(),
      currentUser: user,
    };
  }, []);
  const OrderData = getOrderData(currentUser.profile?.order || []);
  return ready && currentUser ? (
    <Container className="mt-5 vh-100">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>History Page</h2>
          </Col>
          <Row xs={1} md={2} className="g-4 justify-content-center m-3">
            <Card className="p-5 text-center" style={{ backgroundColor: '#e1ecf7' }}>
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
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default HistoryPage;
