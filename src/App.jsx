import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Cover from './components/Cover';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import OfferedServices from './components/OfferedServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <section id="cover"><Cover /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="offered-services"><OfferedServices /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </Container>
    </div>
  );
}

export default App;
