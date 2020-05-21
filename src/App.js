import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RPDF1 from './pages/rpdf1/RPDF1';
import RPDF2 from './pages/rpdf2/RPDF2';
import Simple from './pages/simple/Simple';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <Nav
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/rpdf1">react-pdf-1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/rpdf2">react-pdf-2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/simple">simple</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rpdf1">
            <RPDF1/>
          </Route>
          <Route path="/rpdf2">
            <RPDF2/>
          </Route>
          <Route path="/simple">
            <Simple/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
