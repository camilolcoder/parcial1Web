import { useParams } from "react-router-dom";
import React from 'react';
import Book from "./Book";
const { useEffect, useState } = require("react");


function BookDetail() {
 const params = useParams()
 console.log(params.bookId)
 return (
   <div>
     <h1>{params.bookId}</h1>
   </div>
 );
}
export default BookDetail