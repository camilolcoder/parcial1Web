import { useParams } from "react-router-dom";
import React from 'react';
import { Container , Col, Image, Row} from "react-bootstrap";
import { FormattedMessage } from "react-intl";
const { useEffect, useState } = require("react");


function PartsDetalle(props) {
 const params = useParams()
 console.log(params.partId)
 const [parts, setParts] = useState([])

 const userData = localStorage.getItem("userLogged")
 const userComplete = JSON.parse(userData)
 console.log(userComplete.role)

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

function handle_check_available() {
  if (content.available){
    return "Yes"
  }
  return "No"
}

//console.log(handle_check_available())

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
      {userComplete.role ? (
      <div>
      <Row>
        <Col>
          <h4> <FormattedMessage id="car_maker"/> </h4>
        </Col>
        <Col>
          <input value={content.carMaker}></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> <FormattedMessage id="car_model"/></h4>
        </Col>
        <Col>
          <input value={content.carModel}></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> <FormattedMessage id="car_year"/></h4>
        </Col>
        <Col>
          <input value={content.carYear}></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> <FormattedMessage id="car_available"/></h4>
        </Col>
        <Col>
          <input value={handle_check_available()}></input>
        </Col>
      </Row>
      <Row>
        <h4> <FormattedMessage id="description"/></h4>
      </Row>
      <Row>
        <input value={content.description}></input>
      </Row>
      </div> ):
      (<div>
        <Row>
          <Col>
            <h4> <FormattedMessage id="car_maker"/></h4>
          </Col>
          <Col>
            <h4>{content.carMaker}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4> <FormattedMessage id="car_model"/></h4>
          </Col>
          <Col>
            <h4>{content.carModel}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4> <FormattedMessage id="car_year"/></h4>
          </Col>
          <Col>
            <h4>{content.carYear}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4> <FormattedMessage id="car_available"/></h4>
          </Col>
          <Col>
            <h4>{handle_check_available()}</h4>
          </Col>
        </Row>
        <Row>
          <h4> <FormattedMessage id="description"/></h4>
        </Row>
        <Row>
          <p>{content.description}</p>
        </Row>
        </div> )}
    </Col>
    </Row>
  </Container>
 );
}
export default PartsDetalle