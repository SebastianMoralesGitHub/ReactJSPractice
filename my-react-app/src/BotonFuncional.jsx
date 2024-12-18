const BotonFuncional = () => {
  const HandleClicEventos = (e) => {
    e.target.textContent = "sadonawoiudnawod";
  };

  let CounterStrike = 0;
  const HandleClic = (nombre) => {
    if (CounterStrike !== 10) {
      CounterStrike++;
      console.log(`${nombre} puedes clicar ${10 - CounterStrike} veces más`);
    } else {
      console.log("Terminaste los clics");
    }
  };

  return (
    <div className="BotonesFuncionalesContenedor">
      <button
        className="BotonesFuncionales"
        onClick={() => HandleClic("Caremondongo")}
      >
        Clic aqueu
      </button>
      <button
        className="BotonesFuncionales"
        onDoubleClick={(e) => HandleClicEventos(e)}
      >
        Clic aqueu para eventos
      </button>
    </div>
  );
};

export default BotonFuncional;
