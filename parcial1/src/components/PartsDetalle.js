import { useParams } from "react-router-dom";
import React from 'react';
import { Container , Col, Image, Row} from "react-bootstrap";
const { useEffect, useState } = require("react");


function PartsDetalle(props) {
 const params = useParams()
 console.log(params.partId)
 const [parts, setParts] = useState([])

useEffect(() => {
  const URL =
    "https://raw.githubusercontent.com/camilolcoder/parcial1Web/master/datos.json";
  fetch(URL)
    .then((data) => data.json())
    .then((data) => {
     setParts(data);
    });
}, []);

const content = parts.find((part) => part.carModel === (params.partId)) || {};
console.log(content)

 return (
  <Container className="p-2">
    <Row className="w-75">
    <Col className="w-50">
    <Image className="img-fluid w-100"
       src={content.image}
     />
    </Col>
    <Col className="w-50">
      <h1>{content.partName}</h1>
      <hr></hr>
      <Row>
        <Col>
          <h4>Car maker</h4>
        </Col>
        <Col>
          <h4>{content.carMaker}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Car model</h4>
        </Col>
        <Col>
          <h4>{content.carModel}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Car Year</h4>
        </Col>
        <Col>
          <h4>{content.carYear}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Availabe online</h4>
        </Col>
        <Col>
          <h4>{content.available}</h4>
        </Col>
      </Row>
      <Row>
        <h4>Description</h4>
      </Row>
      <Row>
        <p>{content.description}</p>
      </Row>
    </Col>
    </Row>
  </Container>
 );
}
export default PartsDetalle