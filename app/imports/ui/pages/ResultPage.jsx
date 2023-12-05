import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';

const QRCode = require('qrcode');

let qrurl = '';

const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark: '#010599FF',
    light: '#FFBF60FF',
  },
};

const ResultPage = () => {
  const { ready } = useTracker(() => {
    // Ensure that minimongo is populated with all collections prior to running render().
    const sub1 = Meteor.subscribe(Orders.userPublicationName);
    return {
      ready: sub1.ready(),
    };
  }, []);
  const { OrderId } = useParams();
  QRCode.toDataURL(window.location.href, opts, function (err, url) {
    if (err) throw err;
    qrurl = url;
  });
  const order = Orders.collection.findOne({ _id: OrderId });
  return ready ? (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <h1>Thank you for ordering</h1>
        <br />
        <h3>Your Order ID: {OrderId}</h3>
      </Row>

      <Row xs={1} md={2} className="g-4 justify-content-center m-3">
        <Card className="p-5" style={{ backgroundColor: '#e1ecf7' }}>
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

          </Card.Title>
          <Card.Header className="text-center pb-5 mt-4" style={{ backgroundColor: '#FFFFFF' }}>
            <h5 className="py-4">Please save this QRcode or Order ID to access this page again.</h5>
            <Image src={qrurl} />
          </Card.Header>
        </Card>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ResultPage;
