import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeneratorForm from './components/gen-form/generator';
import Header from './components/header/header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Container>
         <Row>
          <Col>
          <Header />
          </Col>
         </Row>
         <Row>
          <Col>
          <GeneratorForm />
          </Col>
         </Row>
       </Container>
    </div>
  );
}

export default App;
