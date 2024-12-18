import { useState } from "react";

const Componentehook = () => {
  const [Nombre, setNombre] = useState("Carepopo");
  const [Edad, setEdad] = useState(0);
  const [EsEmpleado, setEsEmpleado] = useState(false);
  const ActualizarNombre = () => setNombre("Poposito");
  const ActualizarEdad = () => setEdad(Edad + 1);
  const ActualizarEmpleado = () => setEsEmpleado(!EsEmpleado);
  return (
    <div className="UseStateContainer">
      <p>Nombre: {Nombre}</p>
      <button onClick={ActualizarNombre}> Establecer Nombre</button>
      <p>Nombre: {Edad}</p>
      <button onClick={ActualizarEdad}> Aumentar Edad</button>
      <p>Empleado actual: {EsEmpleado ? " Afirmativo" : " Negativo"}</p>
      <button onClick={ActualizarEmpleado}> Cambiar Valor</button>
    </div>
  );
};

export default Componentehook;
