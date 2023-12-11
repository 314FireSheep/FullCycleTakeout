import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {

  const [OrderId, setOrderid] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate(`/result/${OrderId}`);
  };
  return (
    <Container className="mt-5">

      <Row className="justify-content-center mb-5 mx-1">
        <Col xs={11} md={8} className="header text-white">
          <h1 className="text-center">Search Page</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-1 mb-5 ani">
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
              <Button variant="primary" style={{ backgroundColor: '#84a98c', borderColor: '#84a98c' }} type="submit" className="my-3 px-5 ani">Search</Button>
            </Form>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default SearchPage;
