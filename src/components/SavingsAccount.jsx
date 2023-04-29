import React from "react";

const SavingsAccount = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-16">
        Ingresa el valor con el que deseas iniciar tu cuenta
      </h2>

      <div className="container w-1/2 m-auto my-5 mb-12 rounded-2xl">
        <div className="flex justify-center ">
          <form className="flex flex-col w-[28rem]">

            <div className="flex items-center w-full">
              <img className="mb-3" src="../public/pesos.png" alt="email" />
              <input
                className="text-2xl font-bold text-[#074b94f1] pt-1 mb-4 w-full border-b-2 border-[#3b3b3d6b] outline-none"
                type="number"
                placeholder="Ingresa un valor"
              />
            </div>

            <div className="flex justify-center">
              <select className="text-xl w-1/2" id="banco" name="banco">
                <option selected> Selecciona tu banco</option>
                <option value="Bancolombia">Bancolombia</option>
                <option value="Davivienda">Davivienda</option>
                <option value="BBVA">BBVA</option>
                <option value="Banco Agrario">Banco Agrario</option>
                <option value="AV Villas">AV Villas</option>
                <option value="Caja Social">Caja Social</option>
                <option value="Banco de Occidente">Banco de Occidente</option>
                <option value="Banco de Bogota">Banco de Bogotá</option>
              </select>
            </div>

            <div className="flex justify-center">
            <button
              type="submit"
              className="px-24 my-5 py-3 rounded-full bg-[#FDDA25] font-bold text-2xl "
            >
              Continuar
            </button>

            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SavingsAccount;
