import Proptypes from "prop-types";

const Tarjeta = (props) => {
  return (
    <div className="Tarjeta">
      <img className="FotoSaskia" src={props.Foto} alt={props.Alt} />
      <h2 className="Titulo">{props.Titulo}</h2>
      <p className="Descripcion">Descripsao: {props.Descripcion}</p>
    </div>
  );
};

Tarjeta.Proptypes = {
  Foto: Proptypes.string,
  Alt: Proptypes.string,
  Titulo: Proptypes.string,
  Descripcion: Proptypes.string,
};

export default Tarjeta;
