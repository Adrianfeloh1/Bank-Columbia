import React, { useState } from "react";
import shortid from "shortid";
import Registro from "./Registro";

const Account = ({ crearRegistro, registro }) => {
  //3.2 se llama el prop con destructuring
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
    formulario.id = shortid.generate(); // instalamos shorId y lo importamos
    //console.log(formulario);

    //2.4 Creamos el registro de formulario diligenciado
    //3.3 pasamos la función y llamamos el formulario que ya tiene el id
    crearRegistro(formulario); //abrimos consola y verificamos que se comunique desde el app el form diligenciado

    //2.5 reiniciar el formulario
    actualizarFormulario({
      nombre: "",
      cedula: "",
      email: "",
      celular: "",
    }); //3.4 una vez se agrega el registro, esto reinicia el formulario
  };

  return (
    <>
      <h2 className="text-center text-3xl font-bold my-16">
        Para comenzar compártenos la siguiente información
      </h2>
      {/* //2.2.3 lo llevamos a la pantalla */}
      {error ? (
        <h2 className="text-2xl text-center font-bold font-sans text-[#E53140]">
          Debes diligenciar todos los campos
        </h2>
      ) : null}

      <div className="container w-1/2 m-auto my-5 flex items-center justify-center mb-24 shadow-xl p-8 shadow-[#F7F7F7]-500/50">
        <div className="flex flex-col">
          <form
            onSubmit={enviandoFormulario} //2.
          >
            <div className="flex items-center">
              <img src="../public/nombre.png" alt="nombre" />
              <label className="pl-1">Nombres y Apellidos</label>
            </div>

            <input
              className="py-1 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="text"
              name="nombre"
              onChange={actualizarCampo} //1.2
              value={nombre} //1.4 Para mas adelante resetear
            />
            <div className="flex items-center">
              <img src="../public/cedula.png" alt="nombre" />
              <label className="pl-1">Número de Cédula</label>
            </div>            
            <input
              className="py-1 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="number"
              name="cedula"
              onChange={actualizarCampo} //1.2
              value={cedula} //1.4 Para mas adelante resetear
            />
            <div className="flex items-center">
              <img src="../public/email.png" alt="nombre" />
              <label className="pl-1">E-mail</label>
            </div>  
            <input
              className="py-1 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="e-mail"
              name="email"
              onChange={actualizarCampo} //1.2
              value={email} //1.4 Para mas adelante resetear
            />
             <div className="flex items-center">
              <img src="../public/celular.png" alt="nombre" />
              <label className="pl-1">Celular</label>
            </div> 
            <input
              className="py-1 mb-5 w-full border-b-2 border-[#3b3b3d6b] outline-none"
              type="number"
              name="celular"
              onChange={actualizarCampo} //1.2
              value={celular} //1.4 Para mas adelante resetear
            />
            {/* 3.2.2 se pasa el componente iterando lo escrito en el formulario */}
            <div className="text-2xl font-bold font-sans text-[#074b94f1]">
              {registro.map((formulario) => (
                <Registro key={formulario.id} formulario={formulario} /> // COMPONENTE
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-24 my-5 py-3 rounded-full bg-[#FDDA25] font-bold text-2xl "
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
