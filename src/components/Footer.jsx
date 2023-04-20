import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center mx-7 py-4 bg-[#1D1D1B]">
      <div className="text-white">
        <img className="rounded-full h-32" src="../public/target.webp" alt="" />
      </div>
      <div className="text-white px-5 text-lg">
        Tienes una cuenta para todo porque te sirve para hacer más fáciles tus
        días, <span className="font-bold">¿sabes cómo?</span>
      </div>
      <div className="px-11 py-4 border-solid rounded-full bg-[#FDDA25] font-bold text-xl">
        {" "}
        <a href="">Descúbrela</a>
      </div>
    </div>
  );
};

export default Footer;
