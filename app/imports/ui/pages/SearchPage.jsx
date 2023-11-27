import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ComponentIDs, PageIDs } from '../utilities/ids';

const SearchPage = () => {

  const [OrderId, setOrderid] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate(`/result/${OrderId}`);
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
              <Button variant="primary" type="submit" className="my-3 px-5" id={ComponentIDs.searchFormSubmit}>Search</Button>
            </Form>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default SearchPage;
