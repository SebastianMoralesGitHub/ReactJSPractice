import { useState, createContext } from "react";
import ComponenteB from "./ComponenteB";

export const ContextoUsuario = createContext();

function ComponenteA() {
  const [Usuario, setUsuario] = useState("Messinaldo");
  return (
    <div className="Box">
      <h1>Componente A</h1>
      <h2>{`Hola ${Usuario}`}</h2>
      <ContextoUsuario.Provider value={Usuario}>
        <ComponenteB user={Usuario} />
      </ContextoUsuario.Provider>
    </div>
  );
}

export default ComponenteA;
