import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites using modern technologies like React, Angular, and Vue.',
    details: 'I build full-stack web applications, from the front-end to the back-end, ensuring a seamless user experience.'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Designing and developing custom software solutions tailored to meet specific business needs.',
    details: 'Whether it’s a desktop application or a specialized tool, I can create custom software solutions that integrate seamlessly with your existing systems.'
  },
  {
    title: 'Consulting and Support',
    description: 'Providing expert advice and support for your technology-related challenges and projects.',
    details: 'Offering consulting services to help you make informed technology decisions and providing ongoing support to ensure your systems run smoothly.'
  }
];

const OfferedServices = () => (
  <Container className="my-5 p-4">
    <h2 className="text-center mb-4">Offered Services</h2>
    <Row className="justify-content-center">
      {services.map((service, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card className="shadow-sm border-light text-center">
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {service.description}
              </Card.Text>
              <Card.Text>
                <strong>Details:</strong> {service.details}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default OfferedServices;
