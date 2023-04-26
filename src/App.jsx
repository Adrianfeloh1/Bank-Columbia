import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Account from "./components/Account";
import { useState } from "react";
import Registro from "./components/Registro";

const App = () => {
  /* 3.1 el state de arreglo de registro */
  const [registro, guardarRegistro] = useState([]);

  // 3.2 Función que toma registro actual y tome el nuevo
  const crearRegistro = (formulario) => {
    //console.log(formulario); //verificar en components-Account en props que esté la función
    // 3.2.1 usamos la funcion del state para guardar el registro
    guardarRegistro([formulario]); // verificamos en components-App que se vea el state[]
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route
          exact
          path="/account"
          element={
            <Account crearRegistro={crearRegistro} registro={registro} />
          } //3.2 verificar en components-Account en props que esté la función
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
