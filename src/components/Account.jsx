import React from "react";

const Account = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-12">
        Para comenzar compártenos la siguiente información
      </h2>

      <div className="container w-1/2 mx-auto shadow-xl mb-12 p-8 shadow-[#F7F7F7]-500/50">
        <div className="flex flex-col">
          <form className="">
            <label>Nombres y Apellidos</label>
            <input
              type="text"
              name="nombre"
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
            />
            <label>Número de Cédula</label>
            <input
              type="number"
              name="cedula"
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
            />
            <label>E-mail</label>
            <input
              type="e-mail"
              name="e-mail"
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
            />
            <label>Celular</label>
            <input
              type="tel"
              name="celuar"
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
            />
          </form>

          <button
            type="submit"
            className="mx-12 mt-5 py-4 border-solid rounded-full bg-[#FDDA25] font-bold text-center text-2xl"
          >
            Siguiente
          </button>

          <div className="">
            <p className="text-center">Deposita</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
