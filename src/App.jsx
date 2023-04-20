import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />

      <div className="m-auto my-10 container flex items-center justify-center">
        <div className="w-1/2" >
          <h1 className="text-7xl text-[#2C2A29] font-bold">
            Abre una Cuenta de Ahorros por Internet
          </h1>
          <p className="text-2xl">
            Ábrela por Internet sin desplazarte o en una oficina.
          </p>
          <p className="text-2xl my-5">
            La Tarjeta Débito
            <span className="font-bold">llega al lugar que elijas</span>, el
            domicilio es gratis.
          </p>
          <div className="flex justify-center">
            <a className="px-24 py-5 border-solid rounded-full bg-[#FDDA25] font-bold text-2xl" href="#">Abrir cuenta</a>
          </div>
        </div>
        <div className="w-1/2">
          <img src="./cuenta.jpg" alt="img persona" />
        </div>
      </div>
    </>
  );
};

export default App;
