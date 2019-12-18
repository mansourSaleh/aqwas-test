import React from "react";
import "./custom.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
// import "bootswatch/dist/minty/bootstrap.min.css";
import "./App.css";
import bg from "./images/map.png";
import { IconHome, Setting } from "./icons";

function App() {
  return (
    <div className="App">
      <img src={bg} className="bg" />
      <section className="page-wrap">
        <Container>
          <Row>
            <Col>
            <IconHome />
            </Col>

          </Row>
          
        {/* <section className="justify"> */}

          <Row className="justify">
            <Col xs={2} lg={1} className="marginH">
              <Setting />
            </Col>
           
            
           <Col xs={6} lg={3} >

              <Button style={{borderRadius: 10}} block  className="myButton" color="primary">
                اقتراح
              </Button>
           </Col>
           
            </Row>
        {/* </section> */}
        </Container>
      </section>
    </div>
  );
}

export default App;
