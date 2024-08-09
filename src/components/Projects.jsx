import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with React and Node.js for managing tasks and tracking progress.',
    link: ''
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform developed using Express.js with features like user authentication and payment integration.',
    link: ''
  },
  {
    title: 'Project Three',
    description: 'A mobile app developed with Flutter for tracking personal fitness and health metrics.',
    link: ''
  }
];

const Projects = () => (
  <Container className="my-5 p-4">
    <h2 className="text-center mb-4">Projects</h2>
    <Row className="justify-content-center">
      {projects.map((project, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card className="shadow-sm border-light text-center">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
