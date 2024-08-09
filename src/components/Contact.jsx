import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const ContactMe = () => (
  <Container className="my-5 p-4">
    <h2 className="text-center mb-4">Contact Me</h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="shadow-sm border-light">
          <Card.Body>
            <Card.Title>Get in Touch</Card.Title>
            <Card.Text>
              I’m always open to discussing new projects, ideas, or opportunities to be part of your vision. Feel free to contact me through the following methods:
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Email:</strong> <a href="">email@example.com</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Phone:</strong> <a href="">1234567890</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>LinkedIn:</strong> <a href="" target="_blank" rel="noopener noreferrer">linkedin.com/</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>GitHub:</strong> <a href="" target="_blank" rel="noopener noreferrer">github.com/</a>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ContactMe;
