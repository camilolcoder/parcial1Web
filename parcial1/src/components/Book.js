
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Book(props) {

  return (
    <Container className="fluid">
      <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.book.image}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/book/" + props.book.isbn}>
           {props.book.isbn}
         </Link>
       </Card.Title>
       <Card.Text>{props.book.summary}</Card.Text>
     </Card.Body>
   </Card>
    </Container>
  );
}

export default Book;