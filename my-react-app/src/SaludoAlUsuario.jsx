import PropTypes from "prop-types";

const Saludo = (props) => {
  const MensajeBienvenida = (
    <h2 className="MensajeBienvenida">Bienvenido {props.NombreUsuario}</h2>
  );
  const MensajeParaLogear = (
    <h2 className="MensajeParaLogear">Inicie para continuar</h2>
  );

  return props.EstaLogeado ? MensajeBienvenida : MensajeParaLogear;
};

Saludo.propTypes = {
  NombreUsuario: PropTypes.string,
  EstaLogeado: PropTypes.bool,
};

//Se supone que ya no va tener compatibilidad el siguiente defaultprops
// Saludo.defaultProps = {
//   NombreUsuario: "Invitado",
//   EstaLogeado: false,
// };

export default Saludo;
