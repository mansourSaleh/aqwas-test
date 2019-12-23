import React from "react";
import error from '../images/error.jpg'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return ( <Container style={{height: "100vh",display: "flex", justifyContent: "center", alignItems: "center"}}>
    
      <img src={error} className="bg" alt="google map" />
      
          <Row >
              <Col style={{justifyContent: "center", alignItems: "center"}}>
                <h1 style={{fontSize: "10em", color: "#FFF", fontWeight: "900"}}>404</h1>
                <Button block size="lg" >
                    <Link to="/" style={{color: "#000", fontWeight: "900", fontSize: "2em"}}>الصفحة الرئيسية</Link>
                </Button>
              </Col>
          </Row>
      </Container>
      
   
  );
};

export default Error;
