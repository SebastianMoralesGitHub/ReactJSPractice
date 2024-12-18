import { useState } from "react";

const ContadorUpdater = () => {
  const [Conteo, setConteo] = useState(0);
  const AumentarConteo = () => {
    setConteo((c) => c + 1);
  };
  const DecrementarConteo = () => {
    setConteo((c) => c - 1);
  };
  const ReiniciarConteo = () => {
    setConteo(0);
  };
  const SumaVegeta = () => {
    setConteo((c) => c + 777);
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

export default ContadorUpdater;
