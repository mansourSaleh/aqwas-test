import React from "react";
// import "./custom.scss";
import { Button, Container, Row, Col } from "react-bootstrap";
// import "./App.css";
import bg from "../images/map.png";
import { IconHome, Setting } from "../icons";
// import { Link } from 'react-router-dom'
const Home = props => {
  // console.log(props.handleGetRandom)
  if (props.showResult) {
    props.history.push("/suggest");
  }
  return (
    <div className="App">
      <img src={bg} className="bg" alt="google map" />
      <section className="page-wrap">
        <Container>
          <Row>
            <Col>
              <IconHome />
            </Col>
          </Row>

          <Row className="justify">
            <Col xs={2} lg={1} className="marginH">
              <Setting />
            </Col>

            <Col xs={6} lg={3}>
              <Button
                style={{ borderRadius: 10 }}
                block
                className="myButton"
                color="primary"
                onClick={props.handleGetRandom}
              >
                {/* {props.loading ? "loading" : "اقتراح"} */}
                test
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
