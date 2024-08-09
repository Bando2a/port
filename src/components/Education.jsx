import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Education = () => (
  <Container className="my-5 p-4 rounded bg-secondary text-light">
    <Row>
      <Col md={6}>
        <h2>Education</h2>
        <p>
          I graduated from the Arab Academy for Science, Technology, and Maritime Transport (AAST) with a degree in Computer Engineering. My academic journey was both challenging and rewarding, equipping me with a solid foundation in computer science principles and hands-on experience in various technologies.
        </p>
        <p>
          <strong>Degree:</strong> Bachelor of Science in Computer Engineering<br />
          <strong>GPA:</strong> 3.6<br />
          <strong>Honors:</strong> Graduated with Honors
        </p>
        <p>
          <strong>Relevant Coursework:</strong>
          <ul>
            <li>Advanced Algorithms</li>
            <li>Database Systems</li>
            <li>Software Engineering</li>
            <li>Machine Learning</li>
          </ul>
        </p>
      </Col>
      <Col md={6}>
        <h3>Certifications</h3>
        <ListGroup>
          <ListGroup.Item>Certified JS Developer - Udemy</ListGroup.Item>
          <ListGroup.Item>Full Stack Web Development Bootcamp - Udemy</ListGroup.Item>
        </ListGroup>
        <h3>Notable Projects</h3>
        <ListGroup>
          <ListGroup.Item>Capstone Project: Smart Venue Reservation System (Zabatly)</ListGroup.Item>
          <ListGroup.Item>Senior Design Project: Video game using java</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default Education;
