import {  Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Part from "./Part";
import { FormattedMessage } from "react-intl";
const { useEffect, useState } = require("react");

function Parts(props) {

 const [parts, setParts] = useState([]);

 useEffect(() => {
   const URL =
     "https://raw.githubusercontent.com/camilolcoder/parcial1Web/master/datos.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
      setParts(data);
     });
 }, []);

 return (
     <Row xs="auto" className="g-2 justify-content-center" style={{margin: "auto"}}>
     <h2 className="mt-2"> <FormattedMessage id="list_parts"/> </h2>
     <hr></hr>
     <Row>
       {parts.map((part) => (
         <Col >
           <Part part={part} parts={parts} />
         </Col>
       ))}
     </Row>
     </Row>

 );
}

export default Parts;