import React from "react";
/* 3. creamos el componente registro */
const Registro = ({ formulario, eliminarRegistro }) => {
  return (
    <div className="shadow-xl rounded-2xl p-8 shadow-[#F7F7F7]-500/50">
      <h2 className="-mt-[2rem] text-center mb-5 text-[#2C2A29]">
        Verifica tu información
      </h2>
      <div className="flex items-center">
        <img className="w-8" src="../public/nombre.png" alt="email" />
        <span className="ml-1 text-xl">{formulario.nombre} </span>
      </div>
      <div className="flex items-center">
        <img className="w-8" src="../public/cedula.png" alt="email" />
        <span className="ml-1 text-xl">{formulario.cedula}</span>
      </div>
      <div className="flex items-center">
        <img className="w-8" src="../public/email.png" alt="email" />
        <span className="ml-1 text-xl">{formulario.email}</span>
      </div>
      <div className="flex items-center">
        <img className="w-8" src="../public/celular.png" alt="email" />
        <span className="ml-1 text-xl">{formulario.celular}</span>
      </div>
      <div className="text-center">
        <button
          className="rounded-lg mt-4 w-3/2 p-2 bg-[#E53140] text-2xl text-center font-sans text-white"
          onClick={() => eliminarRegistro(formulario.id)}
        >
          {/* 4. com arrow para que espere a que suceda el onclick */}
          Eliminar &times;
        </button>
      </div>
    </div>
  );
};

export default Registro;
