import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageIDs } from '../utilities/ids';

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
    <Container className="mt-5 vh-100" id={PageIDs.historyPage}>
      <Row className="justify-content-center mb-5 mx-1">
        <Col xs={11} md={8} className="header text-white">
          <h1 className="text-center">History Page</h1>
        </Col>
      </Row>
      <Row xs={11} md={8} className="g-4 justify-content-center m-3">
        <Card className="p-5 text-center" style={{ backgroundColor: 'white' }}>
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
        </Card>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default HistoryPage;
