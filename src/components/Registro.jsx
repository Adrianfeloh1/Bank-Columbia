import React from "react";
/* 3. creamos el componente registro */
const Registro = ({formulario}) => {
  return (
    <div className="">  
    <h2 className="text-center mb-5">Verifica tu información</h2>    
      <p>Nombre: <span>{formulario.nombre} </span></p>
      <p>Cédula: <span>{formulario.cedula}</span></p>
      <p>E-mail: <span>{formulario.email}</span></p>
      <p>Celular: <span>{formulario.celular}</span></p>  
          
    </div>

  );
};

export default Registro;
