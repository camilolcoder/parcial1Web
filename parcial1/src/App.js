import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import Parts from './components/Parts';
import PartsDetalle from './components/PartsDetalle';
import { IntlProvider } from 'react-intl';
import { messages } from './i18n/messages'
import { LOCALES } from './i18n/locales';
import { Button } from 'react-bootstrap';
const { useEffect, useState } = require("react");

function App() {

  const locales = LOCALES.ENGLISH;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentLocale, setCurrentLocale] = useState(locales);

  const changeLanguage = () => {
    if (currentLocale === LOCALES.ENGLISH){
      setCurrentLocale(LOCALES.SPANISH);
    }else{
      setCurrentLocale(LOCALES.ENGLISH)
    }
    
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}>

    <Button onClick={changeLanguage}>
      Idioma
    </Button>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login currentLocale = {currentLocale}/>} />
         <Route path="/parts" element={<Parts currentLocale = {currentLocale}/>} />
         <Route path="/parts/:partId" element={<PartsDetalle/>} />

       </Routes>
     </BrowserRouter>
     </IntlProvider>
  );
}

export default App;
