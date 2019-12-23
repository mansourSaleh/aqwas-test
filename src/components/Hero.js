import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faExternalLinkAlt,
  faHeart,
  faImage,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  pTag: {
    marginLeft: "5px",
    fontWeight: "600",
    fontSize: "15px"
  },
  container: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    paddingBottom: "40px"
  },
  col: {
    justifyContent: "space-around",
    alignItems: "space-around",
    display: "flex"
  }
};


const Hero = props => {
  // Some time we get back Arabic name and some time just the english
  // If we have the Arabic name we divide the string in Arabic and in English
  const name = props.name;
  let englishName = "";
  let arabicName = "";
  // the API but the Arabic name between ()
  if (name.includes("(")) {
    englishName = name.split("(")[0];
    arabicName = name.split("(")[1].split(")")[0];
  }
  return (
    <Container
      fluid
      style={styles.container}
    >
      <Row style={{ paddingTop: "40px"}}>
        <Col  className="justify">
        {/* Name of the restaurant */}
          <h3 className="restaurantName">
            {englishName ? `${englishName} | ${arabicName}` : name}
          </h3>
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
          {/* Category and rating */}
          <p style={styles.pTag}>
            {" "}
            <span style={{ fontWeight: "900" }}>{props.rating}</span>/10{" "}
            <span>-</span>
          </p>

          <p style={styles.pTag}> {props.cat}</p>
        </Col>
      </Row>
      <Row>
        <Col
          style={styles.col}
        >
          {/* Icons */}
          <FontAwesomeIcon size="2x" color="#808080" icon={faMapMarkedAlt} />
          {" | "}
          <FontAwesomeIcon size="2x" color="#808080" icon={faExternalLinkAlt} />
          {" | "}
          <FontAwesomeIcon size="2x" color="#808080" icon={faImage} />
          {" | "}
          <FontAwesomeIcon size="2x" color="#808080" icon={faHeart} />
          {" | "}
          <FontAwesomeIcon size="2x" color="#808080" icon={faInfoCircle} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
