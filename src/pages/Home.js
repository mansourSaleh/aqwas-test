import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


import bg from "../images/map.png";
import { IconHome } from "../icons";
import SuggestButton from "../components/suggestButton";


const Home = props => {
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
          {/* the suggest button */}
          <SuggestButton
            text="اقتراح"
            colors="danger"
            handleGetRandom={props.handleGetRandom}
            loading={props.loading}
          />
        </Container>
      </section>
      {/* if we get the data from the API redirect to the data page */}
      {props.showResult && <Redirect to="/suggest" />}
    </div>
  );
};

export default Home;
