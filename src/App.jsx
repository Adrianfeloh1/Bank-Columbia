import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Account from "./components/Account";
import { useState } from "react";
import Registro from "./components/Registro";
import SavingsAccount from "./components/SavingsAccount";

const App = () => {
  //5.1 Registro en el Storage
  let registroInicial = JSON.parse(localStorage.getItem("Registro"));
  if (!registroInicial) {
    registroInicial = [];
  }

  /* 3.1 el state de arreglo de registro */
  const [registro, guardarRegistro] = useState(registroInicial);

  //5. Use Effect para guardar los registros en el Storage
  useEffect(() => {
    //console.log("cambiando estado");
    //5.2 Agregamos los registros en el Storage
    localStorage.setItem("Registro", JSON.stringify(registro));
  }, [registro]);

  // 3.2 Función que toma registro actual y tome el nuevo
  const crearRegistro = (formulario) => {
    //console.log(formulario); //verificar en components-Account en props que esté la función
    // 3.2.1 usamos la funcion del state para guardar el registro
    guardarRegistro([formulario]); // verificamos en components-App que se vea el state[]
  };

  //4. Funcion que elimina el registro diligenciado
  const eliminarRegistro = (id) => {
    //console.log(id); //verificar en consola que traiga el id
    guardarRegistro(registro.filter((registro) => registro.id !== id));
  };


  //5. 



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />        
        <Route
          exact
          path="/account"
          element={
            <Account
              crearRegistro={crearRegistro}
              registro={registro}
              eliminarRegistro={eliminarRegistro}
            />
          } //3.2 verificar en components-Account en props que esté la función
        />
        <Route exact path="/savingsAccount" element={<SavingsAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
