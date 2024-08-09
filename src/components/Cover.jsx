import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Cover = () => (
  <Container fluid className="cover bg-dark text-light text-center py-5">
    <Row>
      <Col>
        <img src='' alt="Cover" className="img-fluid rounded-circle" style={{ width: '150px', border: '2px solid #fff' }} />
        <h1 className="mt-3">Mohamed Effat Sayed</h1>
        <p>Welcome to my portfolio!</p>
      </Col>
    </Row>
  </Container>
);

export default Cover;
