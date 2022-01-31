import logo from './profile.png';
import dunes from './dunes.png';
import ccLogo from './cc-logo.png';
import pittLogo from './pitt-logo.png';


import './App.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {
  return (
    <Container fluid>
      <Row style={{ backgroundImage: `url(${dunes})` }}  >
        <Col xs="8" className="title-col profile-col">
          <Card id="title-card">
            <Card.Text>Hi, I'm</Card.Text>
            <Card.Title id="title-header">Andrew Stimmell</Card.Title>
          </Card>
        </Col>
        <Col xs="4" className="profile-col ">
          <Image className="profile-image border border-3" roundedCircle fluid src={logo} />
        </Col>
      </Row>
      <Row className="info-row">
        <h1>Experience</h1>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Crown Castle</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Software Engineer II</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">January 2020 - Present</Card.Subtitle>
                </Col>
                <Col className="experience-row">
                  <Image className="card-logo" src={ccLogo}/>
                </Col>
              </Row>
              <hr />
              <Card.Text>
                <ul>
                  <li>Led team to develop a React web app using Redux as the front end and C# back end</li>
                  <li>Maintained and developed web applications using Angular, AngularJS, and many Node.js packages</li>
                  <li>Responded to business needs and requests to add new features and restructure data to existing applications</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Crown Castle</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Developer/QAA Intern</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">June 2019 - December 2019</Card.Subtitle>
                </Col>
                <Col className="experience-row">
                  <Image className="card-logo" src={ccLogo}/>
                </Col>
              </Row>
              <hr />
              <Card.Text>
                <ul>
                  <li>Handled API calls and backend requests using Java and SQL</li>
                  <li>Assisted developers in creating features in web applications</li>
                  <li>Tested for quality by creating UI, API, and end-to-end test suites using frameworks such as Junit and Protractor</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="info-row">
        <h1>Education</h1>
        <Col>
        <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>University of Pittsburgh</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Bachelors of Computer Science</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">August 2017 - December 2019</Card.Subtitle>
                </Col>
                <Col className="experience-row">
                  <Image className="card-logo" src={pittLogo}/>
                </Col>
              </Row>
              <hr />
              <Card.Text>Transferred to the University of Pittsburgh for the Bachelors in Computer Science program</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
