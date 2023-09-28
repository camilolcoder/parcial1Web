import {  Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Book from "./Book";

const { useEffect, useState } = require("react");

function Books(props) {

 const [books, setBooks] = useState([]);

 useEffect(() => {
   const URL =
     "https://my.api.mockaroo.com/books.json?key=6a412540";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
        setBooks(data);
     });
 }, []);

 return (
     <Row xs="auto" className="g-2 justify-content-center" style={{margin: "auto"}}>
     <h2 className="mt-2">Listado de libros</h2>
     <hr></hr>
     <Row>
       {books.map((book) => (
         <Col >
           <Book book={book} />
         </Col>
       ))}
     </Row>
     </Row>

 );
}

export default Books;