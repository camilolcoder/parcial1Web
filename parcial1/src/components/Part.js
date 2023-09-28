
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Part(props) {

  return (
    <Container className="fluid">
      <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.part.image}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/parts/" + props.part.carModel}>
           {props.part.partName}
         </Link>
       </Card.Title>
       <Card.Text>{props.part.carMaker}</Card.Text>
       <Row>
        <Card.Text>{props.part.price}</Card.Text>
        <Card.Text>{props.part.carYear}</Card.Text>
        </Row>
     </Card.Body>
   </Card>
    </Container>
  );
}

export default Part;