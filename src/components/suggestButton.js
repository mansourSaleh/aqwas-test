import React from "react";
import { Button, Row, Col, Spinner } from "react-bootstrap";
import { Setting } from "../icons";




const SuggestButton = props => {
  
  return (
    <Row className="justify">
      {/* The Icon next the the Button */}
      <Col xs={2} lg={1} className="marginH">
        <Setting />
      </Col>

      <Col xs={6} lg={3}>
        <Button
          style={{ borderRadius: 10 }}
          block
          className="myButton"
          color={"danger"}
          onClick={props.handleGetRandom}
        >
          {/* If loading is true that mean we are waiting the data display Three spinners 
            otherwise display the text that came from the parent "اقتراح" or "اقتراح اخر"
          */}
          {props.loading ?  <>
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="dark" />
          </> : props.text}
        </Button>
      </Col>
    </Row>
  );
};

export default SuggestButton;
