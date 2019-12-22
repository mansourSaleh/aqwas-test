import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import { Setting } from "../icons";
const SuggestButton = props => {
  return (
    <Row className="justify">
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
          {props.loading ? "loading" : props.text}
        </Button>
      </Col>
    </Row>
  );
};

export default SuggestButton;
