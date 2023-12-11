import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();
  const items = [
    { name: 'Bowl',
      quantity: 0,
      size: '16oz',
      description: 'One compartment. Green plastic polypro.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/e5e950a0-a431-4503-9725-cda4b68c0934/Untitled+design+%2810%29.png?format=750w' },

    { name: 'Box',
      quantity: 0,
      size: '6” x 9” x 2.75”',
      description: 'One compartment. Clear plastic polypro.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/13aadb16-f679-4793-8378-3ed5cc7c72a3/Copy+of+6x9.png?format=1500w' },

    { name: 'Container_L',
      quantity: 0,
      size: '8” x 8” x 2.5”',
      description: 'Three compartments. Clear plastic polypro.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/71684dea-f0a7-441b-94bf-1b6d16415ab1/Copy+of+9x9.png?format=1500w' },

    { name: 'Container_M',
      quantity: 0,
      size: '8” x 8” x 2.5”',
      description: 'One compartment. Clear plastic polypro.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/71684dea-f0a7-441b-94bf-1b6d16415ab1/Copy+of+9x9.png?format=1500w' },

    { name: 'Container_S',
      quantity: 0,
      size: '5” x 5” x 3”',
      description: 'One compartment. Clear plastic polypro.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/4e63ed2b-810d-4e4d-ad35-358f6356c045/Copy+of+5x5.png?format=1500w' },

    { name: 'Forks',
      quantity: 0,
      size: '_',
      description: 'Utensil',
      image: 'https://cdn.discordapp.com/attachments/876762078948491337/1172720555363934239/fork.png?ex=65615820&is=654ee320&hm=9885706f59910212d16890ec75cce59cef7f165f8a1491b4bdbefd028cda4d96&' },

    { name: 'Knives',
      quantity: 0,
      size: '_',
      description: 'Utensil',
      image: 'https://cdn.discordapp.com/attachments/876762078948491337/1172720555116466256/Knife.png?ex=65615820&is=654ee320&hm=fa63db1a6f1cb3554c1f955cb10f8347e2df2ad9afbc2c211e5871a189569e30&' },

    { name: 'Plate_L',
      quantity: 0,
      size: '5” x 6.5” x 2.5”',
      description: 'One compartment. Stainless steel.',
      image: 'https://images.squarespace-cdn.com/content/v1/607912e0b05e0b4b67ab64d8/73c400a5-af6b-49fa-b5bd-21a05ffde207/Untitled+design+%2834%29.png?format=500w' },

    { name: 'Plate_M',
      quantity: 0,
      size: '10”',
      description: 'One compartment. White melamine.',
      image: 'https://cdn.discordapp.com/attachments/876762078948491337/1171229606045552811/33597_1-removebg-preview.png?ex=655beb92&is=65497692&hm=6db31ea46ccf93b50d226749e2c358e8252ef7995decf4736588291681f85736&' },

    { name: 'Plate_S',
      quantity: 0,
      size: '7”',
      description: 'One compartment. White melamine.',
      image: 'https://cdn.discordapp.com/attachments/876762078948491337/1171229606045552811/33597_1-removebg-preview.png?ex=655beb92&is=65497692&hm=6db31ea46ccf93b50d226749e2c358e8252ef7995decf4736588291681f85736&' },

    { name: 'Spoons',
      quantity: 0,
      size: '_',
      description: 'Utensil',
      image: 'https://cdn.discordapp.com/attachments/876762078948491337/1172720555590438993/spoon.png?ex=65615820&is=654ee320&hm=cbd163229b750add880947936579eae66d9a43cd90624f9828f7e8ad98c7e4c5&' },
  ];

  const [order, setOrder] = useState(items);

  const handleQuantityChange = (quantity, ItemName) => {
    const updatedItem = order.find((item) => item.name === ItemName);
    updatedItem.quantity = quantity;
    const updatedObject = order.map((item) => (item.name === ItemName ? updatedItem : item));
    setOrder(updatedObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemsObject = {
      status: 'rented',
    };
    order.forEach(item => {
      if (item.quantity > 0) {
        itemsObject[item.name] = item.quantity;
      }
    });
    navigate('/confirmation', { state: itemsObject });
  };

  return (
    <Container>
      <Row className="my-5 mx-1 text-center">
        <Container className="header text-white">
          <h1>Order Page</h1>
        </Container>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={8}>
            <Row>
              {items.map((item) => (
                <Col key={item.name} md={6}>
                  <Card className="mb-4 text-center ani" style={{ flex: 1 }}>
                    <Card.Header>
                      <Image src={item.image} width={200} height={200} />
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle>{item.size}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{item.description}</Card.Text>
                      <Form.Group controlId={`quantity-${item.name}`}>
                        <Form.Control
                          className="text-center"
                          type="number"
                          min="0"
                          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10), item.name)}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <Card className="mb-3 p-3 text-white " style={{ backgroundColor: '#373633' }}>
              <Card.Header className="text-center p-4"><h3>Selected Items</h3></Card.Header>
              <Card.Body>
                <ul>
                  { order.map((item) => item.quantity > 0 && <li key={item.name}>{item.name} {item.quantity}</li>)}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center py-3 ani" style={{ backgroundColor: '#84a98c' }}>
                <Container fluid>
                  <Button className="px-5 p-3" type="submit">Place Order</Button>
                </Container>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default OrderPage;
