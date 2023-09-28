import { useParams } from "react-router-dom";
import React from 'react';
import { Container , Col, Image} from "react-bootstrap";
const { useEffect, useState } = require("react");


function PartsDetalle(props) {
 const params = useParams()
 console.log(params.partId)
 const [parts, setParts] = useState([])
 
  console.log(props)

 const content = parts.find((part) => part.carModel === (params.carModel)) || {};

 return (
  <Container>
 <h1>params.carModel</h1>
    <Col>
    <Image
       style={{ height: "14rem" }}
       variant="top"
       //src={content.image}
     />
    </Col>
    <Col>
      <h1>{content.partName}</h1>
    </Col>
  </Container>
 );
}
export default PartsDetalle