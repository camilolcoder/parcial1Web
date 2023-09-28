import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import Parts from './components/Parts';
import PartsDetalle from './components/PartsDetalle';
const { useEffect, useState } = require("react");

function App() {

  const [parts, setParts] = useState([]);
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/parts" element={<Parts parts={parts} setParts={setParts}/>} />
         <Route path="/parts/:partId" element={<PartsDetalle parts={parts} setParts={setParts}/>} />

       </Routes>
     </BrowserRouter>
  );
}

export default App;
