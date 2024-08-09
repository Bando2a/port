import React from 'react';
import { Container, Row, Col, ListGroup, ProgressBar } from 'react-bootstrap';

const Skills = () => (
  <Container className="my-5 bg-info text-light p-4 rounded">
    <Row>
      <Col>
        <h2>Skills</h2>
        <p>I have developed a diverse set of skills through various projects and experiences. Here’s a breakdown of my expertise:</p>

        <h3>Programming Languages</h3>
        <ListGroup>
          <ListGroup.Item>JavaScript - Proficient</ListGroup.Item>
          <ListGroup.Item>C++ - Intermediate</ListGroup.Item>
          <ListGroup.Item>Python - Beginner</ListGroup.Item>
        </ListGroup>

        <h3>Web Development</h3>
        <ListGroup>
          <ListGroup.Item>HTML & CSS - Advanced</ListGroup.Item>
          <ListGroup.Item>React.js - Advanced</ListGroup.Item>
          <ListGroup.Item>Node.js - Intermediate</ListGroup.Item>
          <ListGroup.Item>Bootstrap - Intermediate</ListGroup.Item>
        </ListGroup>

        <h3>Tools & Technologies</h3>
        <ListGroup>
          <ListGroup.Item>Git & GitHub - Proficient</ListGroup.Item>
          <ListGroup.Item>Docker - Intermediate</ListGroup.Item>
          <ListGroup.Item>REST APIs - Intermediate</ListGroup.Item>
        </ListGroup>

        <h3>Proficiency Levels</h3>
        <Row>
          <Col>
            <strong>JavaScript</strong>
            <ProgressBar now={90} label="90%" />
          </Col>
          <Col>
            <strong>React.js</strong>
            <ProgressBar now={85} label="85%" />
          </Col>
          <Col>
            <strong>Python</strong>
            <ProgressBar now={55} label="55%" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Skills;
