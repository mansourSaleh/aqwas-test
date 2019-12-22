import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export class Hero extends Component {
  render() {
    return (
      <Container
        fluid
        style={{
          position: "absolute",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: "100%",
          paddingBottom: "40px"
        }}
      >
        <Row style={{ paddingTop: "40px" }}>
          <Col>
            <h1 className="restaurantName">{this.props.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <p style={{ marginLeft: "5px", fontWeight: "500" }}>
              {" "}
              <span style={{ fontWeight: "900" }}>{this.props.rating}</span>/10
            </p>

            <p style={{ marginLeft: "10px", fontWeight: "500" }}>
              {" "}
              - {this.props.cat}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hero;
