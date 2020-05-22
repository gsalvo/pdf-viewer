import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PictureAsPdf } from '@material-ui/icons';
import Home from './pages/home/Home';
import Test1 from './pages/test1/Test1';
import Test2 from './pages/test2/Test2';
import Test3 from './pages/test3/Test3';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [
        'https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf',
        'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf'
      ],
      actual: 'https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf',
    };
  }

  componentDidMount() {

  }

  getTestMenu() {
    return (
      <Nav
        variant="tabs"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/test1">test-1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/test2">test-2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/test3">test-3</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  getPage() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test1">
            <Test1 />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/test3">
            <Test3 file={this.state.actual} />
          </Route>
        </Switch>
      </Router>
    );
  }

  async changeDocument(e) {
    await this.setState({
      actual: e,
    })
    console.log(this.state.actual, e);
  }


  render() {
    const buttons = [];
    for (let key in this.state.files) {
      buttons.push(
        <Col md={12} key={`button-doc-${key}`}>
          <Button 
            size="lg"
            
            variant="outline-primary" 
            className="document-buttons" 
            onClick={()=> this.changeDocument(this.state.files[key]) }>
              <PictureAsPdf/> Documento - {Number(key) + 1}
            </Button>
        </Col>
      );
    }

    return (
      <div className="App">
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col md={12}>
            </Col>
          </Row>
          <Row noGutters={true}>
            {buttons}
          </Row>
          <Row>
            <Col md={12}>
              {this.getPage()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
