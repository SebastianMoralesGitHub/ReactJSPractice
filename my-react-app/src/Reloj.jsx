import { useState, useEffect } from "react";

const RelojDigital = () => {
  const [Tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    const Intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    return () => {
      clearInterval(Intervalo);
    };
  }, []);

  const FormateoTiempo = () => {
    let Horas = Tiempo.getHours();
    const Minutos = Tiempo.getMinutes();
    const Segundos = Tiempo.getSeconds();
    const Meridiano = Horas >= 12 ? "PM" : "AM";
    Horas = Horas % 12 || 12;

    return `${AgregaCeros(Horas)}:${AgregaCeros(Minutos)}:${AgregaCeros(
      Segundos
    )} ${Meridiano}`;
  };

  const AgregaCeros = (Numero) => {
    return (Numero < 10 ? "0" : "") + Numero;
  };

  return (
    <div className="Clockcontainer">
      <div className="Clock">
        <span>{FormateoTiempo()}</span>
      </div>
    </div>
  );
};

export default RelojDigital;
