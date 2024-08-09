import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <Container className="my-5 bg-light p-4 rounded">
    <Row>
      <Col md={6}>
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a deep interest in creating innovative solutions through technology. My journey in programming began early, and over the years, I have honed my skills in various domains.
        </p>
        <p>
          <strong>Professional Goals:</strong> My aim is to work on challenging projects that push the boundaries of technology and make a tangible impact on users' lives. I am constantly learning and adapting to new technologies to stay at the forefront of the industry.
        </p>
        <p>
          <strong>Interests:</strong> Outside of coding, I enjoy exploring new tech trends, contributing to open-source projects, and participating in hackathons. I am also an avid reader and enjoy traveling to experience different cultures.
        </p>
      </Col>
      <Col md={6}>
        <Card className="bg-primary text-light">
          <Card.Body>
            <Card.Title>Fun Fact</Card.Title>
            <Card.Text>
              Did you know? I built my first website when I was just 12 years old. It was a simple HTML page about my favorite video games, and it sparked my lifelong passion for technology!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;
