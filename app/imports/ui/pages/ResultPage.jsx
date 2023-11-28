import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ProfilesProjects } from '../../api/profiles/ProfilesProjects';
import { Projects } from '../../api/projects/Projects';
import { ProjectsInterests } from '../../api/projects/ProjectsInterests';
import { Profiles } from '../../api/profiles/Profiles';
import { Interests } from '../../api/interests/Interests';
import { ProfilesInterests } from '../../api/profiles/ProfilesInterests';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageIDs } from '../utilities/ids';

let qrurl = '';

const QRCode = require('qrcode');

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
    const sub1 = Meteor.subscribe(ProfilesProjects.userPublicationName);
    const sub2 = Meteor.subscribe(Projects.userPublicationName);
    const sub3 = Meteor.subscribe(ProjectsInterests.userPublicationName);
    const sub4 = Meteor.subscribe(Profiles.userPublicationName);
    const sub5 = Meteor.subscribe(Interests.userPublicationName);
    const sub6 = Meteor.subscribe(ProfilesInterests.userPublicationName);
    const sub7 = Meteor.subscribe(Orders.userPublicationName);
    return {
      ready: sub1.ready() && sub2.ready() && sub3.ready() && sub4.ready() && sub5.ready() && sub6.ready() && sub7.ready(),
    };
  }, []);
  const { OrderId } = useParams();
  QRCode.toDataURL(window.location.href, opts, function (err, url) {
    if (err) throw err;
    qrurl = url;
  });
  const order = Orders.collection.findOne({ _id: OrderId });
  console.log(order);
  return ready ? (
    <Container className="mt-5" id={PageIDs.resultPage}>
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
                  {
                    Object.entries(order).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))
                  }
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
