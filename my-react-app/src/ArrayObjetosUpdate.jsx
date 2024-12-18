import { useState } from "react";

const ArrayObjetos = () => {
  const [Carros, setCarros] = useState([]);
  const [CarYear, setCarYear] = useState(new Date().getFullYear());
  const [CarMake, setCarMake] = useState("");
  const [CarModel, setCarModel] = useState("");
  const HandleAddCarro = () => {
    const CarroNuevo = { year: CarYear, make: CarMake, model: CarModel };
    setCarros((C) => [...C, CarroNuevo]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };
  const HandleRemoveCarro = (index) => {
    setCarros((C) => C.filter((_, i) => i !== index));
  };
  const HandleYearCambio = (e) => {
    setCarYear(e.target.value);
  };
  const HandleMakeCambio = (e) => {
    setCarMake(e.target.value);
  };
  const HandleModelCambio = (e) => {
    setCarModel(e.target.value);
  };
  return (
    <div className="ObjetosCarroContainer">
      <h2>Lista de objetos carro</h2>
      <ul>
        {Carros.map((Carro, index) => (
          <li key={index} onClick={() => HandleRemoveCarro(index)}>
            {Carro.year} {Carro.make} {Carro.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={CarYear}
        onChange={HandleYearCambio}
        placeholder="Ingrese el ano: "
      />
      <input
        type="text"
        value={CarMake}
        onChange={HandleMakeCambio}
        placeholder="Ingrese el fabricante: "
      />
      <input
        type="text"
        value={CarModel}
        onChange={HandleModelCambio}
        placeholder="Ingrese el modelo: "
      />
      <button onClick={HandleAddCarro}>Agregar auto</button>
    </div>
  );
};

export default ArrayObjetos;
