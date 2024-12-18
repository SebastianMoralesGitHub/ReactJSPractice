import { useState } from "react";

const ArrayUpdate = () => {
  const [Comida, setComida] = useState(["Manzana", "Naranja", "Banano"]);
  const HandleAddComida = () => {
    const ComidaNueva = document.getElementById("InputComida").value;
    document.getElementById("InputComida").value = "";
    setComida((C) => [...C, ComidaNueva]);
  };
  const HandleRemoveComida = (index) => {
    setComida(Comida.filter((_, i) => i !== index));
  };
  return (
    <div className="ArrayComidaContainer">
      <h2>Lista de comida</h2>
      <ul>
        {Comida.map((ComidaElemento, index) => (
          <li key={index} onClick={() => HandleRemoveComida(index)}>
            {ComidaElemento}
          </li>
        ))}
      </ul>
      <input type="text" id="InputComida" placeholder="Ingresa una comida: " />
      <button onClick={HandleAddComida}>Añadir comida</button>
    </div>
  );
};

export default ArrayUpdate;
