const Food = () => {
  const Comida1 = "Naranjas";
  const Comida2 = "Bananos";
  return (
    <ul>
      <li>Manzana</li>
      <li>{Comida1}</li>
      <li>{Comida2.toUpperCase()}</li>
    </ul>
  );
};

export default Food;
