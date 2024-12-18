import { useContext } from "react";
import React from "react";
import { ContextoUsuario } from "./ComponenteA";

function ComponenteD() {
  const Usuario = useContext(ContextoUsuario);
  return (
    <div className="Box">
      <h1>Componente D </h1>
      <h2>{`Adieu ${Usuario}`}</h2>
    </div>
  );
}

export default ComponenteD;
