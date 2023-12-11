import React, { useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { addOrder } from '../../startup/both/Methods';
import { ProfilesProjects } from '../../api/profiles/ProfilesProjects';
import { Projects } from '../../api/projects/Projects';
import { ProjectsInterests } from '../../api/projects/ProjectsInterests';
import { Profiles } from '../../api/profiles/Profiles';
import { Interests } from '../../api/interests/Interests';
import { ProfilesInterests } from '../../api/profiles/ProfilesInterests';
import { Orders } from '../../api/order/Order';
import LoadingSpinner from '../components/LoadingSpinner';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
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

  const handleClick = (buttonName) => {
    Meteor.call(addOrder, location.state, (error, id) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Project added successfully', 'success');
      }
      setActiveButton(buttonName === activeButton ? null : buttonName);
      setLoading(true);
      if (buttonName === 'Button2' || buttonName === 'Button3') {
        setTimeout(() => {
          navigate(`/result/${id}`);
        }, 5000);
      }
    });
  };

  const handleEdit = () => {
    navigate('/', { state: location.state });
  };

  if (!location.state) {
    return <Navigate to="/" replace />;
  }
  return ready ? (
    <Container>
      <Row className="my-5 text-center header text-white">
        <h1>Confirmation Page</h1>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-10" xs={6} md={6}>
          <Card className="p-5" style={{ backgroundColor: 'white' }}>
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

          <Button onClick={handleEdit} disabled={loading} type="submit" className="w-100 my-2 ani">Restart Order</Button>

          <Button onClick={() => handleClick('Button1')} disabled={loading} type="submit" className="w-100 my-2 ani">Credit Card</Button>
          { activeButton === 'Button1' && <Col>Please tap your credit card</Col> }
          <Button onClick={() => handleClick('Button2')} disabled={loading} type="submit" className="w-100 my-2 ani">Student ID</Button>
          {
            activeButton === 'Button2' && <Col>Please provide you student ID to rent your container(s) <br /> direct to result page in 5 seconds....</Col>
          }

          <Button onClick={() => handleClick('Button3')} disabled={loading} type="submit" className="w-100 my-2 ani">Cash</Button>
          {
            activeButton === 'Button3' && <Col>Please pay 5$ to rent your container(s) <br /> direct to result page in 5 seconds....</Col>
          }
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};
export default ConfirmationPage;
