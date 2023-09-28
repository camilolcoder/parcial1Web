import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import Books from './components/Books';
import Book from './components/Book';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/books" element={<Books />} />
         <Route path="/books/:bookId" element={<BookDetail />} />

       </Routes>
     </BrowserRouter>
  );
}

export default App;
