import React, { useState } from "react";
import shortid from "shortid";


const Account = () => {
  //1. Creamos el state del formulario para crear la cuenta
  const [formulario, actualizarFormulario] = useState({
    nombre: "",
    cedula: "",
    email: "",
    celular: "",
  });   

  //2.2.1 creamos el estate para el error si se deja vacío
  const [error, actualizarError] = useState(false);

    //1.2 Creamos la función para actualizar el campo con lo que escribe el usuario.
  const actualizarCampo = (e) => {
    // verificamos que escuche con console.log()
    //1.3 usamos la funcion del state actualizarFormulario que es un objeto
    actualizarFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
      //con esto guardamos lo escrito en el input en formulario en components-Account
    });
  };
  //1.4 Extraemos los valores para optimizar el código
  const { nombre, cedula, email, celular } = formulario;

  // 2. Cuando el usuario presiona siguiente (envia el formulario)
  const enviandoFormulario = (e) => {
    // verificamos que funciones con un alert("")
    //2.1 debemos prevenir que se envie el form al metodo get con prevent default
    e.preventDefault();
    //2.2 lo primero es validar
    if (
      nombre.trim() === "" ||
      cedula.trim() === "" ||
      email.trim() === "" ||
      celular.trim() === ""
    ) {
      actualizarError(true); //2.2.2 verificamos en components-Account que pase a true si lo enviamos vacío
      return;
    }
    //2.2.4 Eliminamos el mensaje cuando se diligencia el form
    actualizarError(false);    

    //2.3 despues asignar un ID
    formulario.id = shortid.generate()// instalamos shorId y lo importamos
    //console.log(formulario);

    //2.4 Creamos el formulario diligenciado

    //2.5 reiniciar el formulario
  };

  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-16">
        Para comenzar compártenos la siguiente información
      </h2>
      {/* //2.2.3 lo llevamos a la pantalla */}
      {error ? (
        <h2 className="text-2xl text-center font-bold font-sans text-[#E53140]">
          Todos los campos son Obligatorios
        </h2>
      ) : null}

      <div className="container w-1/2 mx-auto shadow-xl mb-12 p-8 shadow-[#F7F7F7]-500/50">
        <div className="flex flex-col">
          <form
            onSubmit={enviandoFormulario} //2.
          >
            <label>Nombres y Apellidos</label>
            <input
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="text"
              name="nombre"
              onChange={actualizarCampo} //1.2
              value={nombre} //1.4 Para mas adelante resetear
            />
            <label>Número de Cédula</label>
            <input
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="number"
              name="cedula"
              onChange={actualizarCampo} //1.2
              value={cedula} //1.4 Para mas adelante resetear
            />
            <label>E-mail</label>
            <input
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="e-mail"
              name="email"
              onChange={actualizarCampo} //1.2
              value={email} //1.4 Para mas adelante resetear
            />
            <label>Celular</label>
            <input
              className="py-2 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="number"
              name="celular"
              onChange={actualizarCampo} //1.2
              value={celular} //1.4 Para mas adelante resetear
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-24 my-5 py-3 rounded-full bg-[#FDDA25] font-bold text-2xl "
              >
                Siguiente
              </button>
            </div>
          </form>

          <div className="">
            <p className="text-center">Deposita</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
