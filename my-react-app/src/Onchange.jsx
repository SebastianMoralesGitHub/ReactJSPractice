import { useState } from "react";

const ComponenteOnChange = () => {
  const [Nombre, setNombre] = useState("Carepopo");
  const [Cantidad, setCantidad] = useState(0);
  const [Comentario, setComentario] = useState("");
  const [Pago, setPago] = useState("");
  const [Envio, setEnvio] = useState("");
  const HandleCambioNombre = (e) => {
    setNombre(e.target.value);
  };
  const HandleCambioCantidad = (e) => {
    setCantidad(e.target.value);
  };
  const HandleCambioComentario = (e) => {
    setComentario(e.target.value);
  };
  const HandleCambioPago = (e) => {
    setPago(e.target.value);
  };
  const HandleEnvioCambio = (e) => {
    setEnvio(e.target.value);
  };
  return (
    <div className="CompraContainer">
      <input type="text" value={Nombre} onChange={HandleCambioNombre} />
      <p>Nombre: {Nombre}</p>
      <input value={Cantidad} type="number" onChange={HandleCambioCantidad} />
      <p>Cantidad: {Cantidad}</p>
      <textarea
        value={Comentario}
        onChange={HandleCambioComentario}
        placeholder="Describe la vaina porfa"
      ></textarea>
      <p>Comentario: {Comentario}</p>
      <select value={Pago} onChange={HandleCambioPago}>
        <option value="">Selecciona una opción</option>
        <option value="PSE">PSE</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Tarjeta de Regalo">Tarjeta de regalo</option>
      </select>
      <p>Metodo de pago: {Pago}</p>
      <label>
        <input
          type="radio"
          value="Recogida"
          checked={Envio === "Recogida"}
          onChange={HandleEnvioCambio}
        />
        Recogida
      </label>{" "}
      <br />
      <label>
        <input
          type="radio"
          value="Domicilio"
          checked={Envio === "Domicilio"}
          onChange={HandleEnvioCambio}
        />
        Domicilio
      </label>
      <p>Metodo de envio: {Envio}</p>
    </div>
  );
};

export default ComponenteOnChange;
