import PropTypes from "prop-types";

const Lista = (props) => {
  //Alfabeticamente   Frutas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  //Alfabeticamente al reves   Frutas.sort((a, b) => b.nombre.localeCompare(a.nombre));
  //Numericamente Frutas.sort((a, b) => a.cantidad - b.cantidad);
  //Frutas.sort((a, b) => b.cantidad - a.cantidad); //Numericamente al reves
  //const FrutasConMenos = Frutas.filter((fruta) => fruta.cantidad < 10);
  //const FrutasConMas = Frutas.filter((fruta) => fruta.cantidad >= 10);

  const ItemsDeLista = props.items;
  const Categoria = props.Categoria;

  const Lista = ItemsDeLista.map((item) => (
    <li key={item.id}>
      {item.nombre} , <b>Cantidad:</b> {item.cantidad}
    </li>
  ));
  return (
    <>
      <h3 className="CategoriaLista">Categoria: {Categoria}</h3>{" "}
      <ol className="Lista">{Lista}</ol>
    </>
  );
};

Lista.propTypes = {
  Categoria: PropTypes.string,
  Lista: PropTypes.string,
};

export default Lista;
