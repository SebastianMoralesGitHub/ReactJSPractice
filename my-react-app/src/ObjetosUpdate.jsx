import { useState } from "react";

const ObjetosUpdate = () => {
  const [Car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  const HandleYearChange = (e) => {
    setCar((C) => ({ ...C, year: e.target.value }));
  };
  const HandleMakeChange = (e) => {
    setCar((C) => ({ ...C, make: e.target.value }));
  };
  const HandleModelChange = (e) => {
    setCar((C) => ({ ...C, model: e.target.value }));
  };
  return (
    <div className="CarroContainer">
      <p>
        Tu automovil es un {Car.make}, {Car.model} del año {Car.year}
      </p>
      <input type="number" value={Car.year} onChange={HandleYearChange} />{" "}
      <br />
      <input type="text" value={Car.make} onChange={HandleMakeChange} /> <br />
      <input type="text" value={Car.model} onChange={HandleModelChange} />
    </div>
  );
};

export default ObjetosUpdate;
