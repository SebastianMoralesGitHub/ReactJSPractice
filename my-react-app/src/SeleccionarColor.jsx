import { useState } from "react";

const SelectorColor = () => {
  const [Color, setColor] = useState("#ffffff");
  const HandleCambioColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="SelectorColorContainer">
      <h1>Seleccionador de color</h1>
      <div className="ColorDisplay" style={{ backgroundColor: Color }}>
        <p>Color Seleccionado: {Color}</p>
      </div>
      <label className="SelectorLabel">Selecciona un color:</label>
      <input type="color" value={Color} onChange={HandleCambioColor} />
    </div>
  );
};

export default SelectorColor;
