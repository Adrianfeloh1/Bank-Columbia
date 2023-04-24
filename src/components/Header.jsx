import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-around py-4 w-full">
      <figure className="flex items-center">
        <img className="w-20 rounded-full " src="../logo.jpg" alt="logo" />
        <h2 className="text-3xl font-bold font-sans text-[#254080]">
          <Link to={"/"}>Bank Columbia</Link> 
        </h2>
      </figure>
      <nav>
        <ul className="flex items-center">
          <li className="px-5"><a href="#">Inicio</a></li>
          <li className="px-5"><a href="#">Deposita con nosotros</a></li>
          <li className="px-5"><a href="#">Consultas y retiros</a></li>
        </ul>
      </nav>
      <div className="px-10 py-3 shadow-lg shadow-[#F7F7F7]-500/50 flex items-center">
        <a className="px-5" href="#">Sucursal Virtual Personas</a>
        <a className="px-5 py-2 border-solid rounded-full bg-[#FDDA25] font-bold" href="#">Entrar</a>
      </div>
    </div>
  );
};

export default Header;
