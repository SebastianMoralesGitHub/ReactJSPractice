import Proptypes from "prop-types";

function Estudiante(props) {
  return (
    <div className="InformacionEstudiante">
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
      <p>Actualmente estudia: {props.isStudent ? "Sim" : "Nao"}</p>
    </div>
  );
}
Estudiante.Proptypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  isStudent: Proptypes.bool,
};

export default Estudiante;
