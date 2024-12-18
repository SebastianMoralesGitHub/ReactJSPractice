import { useState } from "react";

const Contador = () => {
  const [Conteo, setConteo] = useState(0);
  const AumentarConteo = () => {
    setConteo(Conteo + 1);
  };
  const DecrementarConteo = () => {
    setConteo(Conteo - 1);
  };
  const ReiniciarConteo = () => {
    setConteo(0);
  };
  const SumaVegeta = () => {
    setConteo(Conteo + 777);
  };
  return (
    <div className="Counter-Container">
      <h2 className="Count-Display">{Conteo}</h2>
      <button className="Counter-Button" onClick={AumentarConteo}>
        Incrementar
      </button>
      <button className="Counter-Button" onClick={DecrementarConteo}>
        Decrementar
      </button>
      <button className="Counter-Button" onClick={ReiniciarConteo}>
        Reiniciar
      </button>
      <button className="Counter-Button" onClick={SumaVegeta}>
        Sumarle 777 xd
      </button>
    </div>
  );
};

export default Contador;
