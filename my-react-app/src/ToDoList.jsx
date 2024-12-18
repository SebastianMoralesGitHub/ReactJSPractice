import { useState } from "react";

const ToDo = () => {
  const [Tareas, setTareas] = useState([]);
  const [TareaNueva, setTareaNueva] = useState("");
  const handleInputChange = (e) => {
    setTareaNueva(e.target.value);
  };
  const AgregarTarea = () => {
    if (TareaNueva.trim() !== "") {
      setTareas((t) => [...t, TareaNueva]);
      setTareaNueva("");
    }
  };
  const BorrarTarea = (index) => {
    const TareasActualizadas = Tareas.filter((_, i) => i !== index);
    setTareas(TareasActualizadas);
  };
  const MoverTareaArriba = (index) => {
    if (index > 0) {
      const TareasActualizadas = [...Tareas];
      [TareasActualizadas[index], TareasActualizadas[index - 1]] = [
        TareasActualizadas[index - 1],
        TareasActualizadas[index],
      ];
      setTareas(TareasActualizadas);
    }
  };
  const MoverTareaAbajo = (index) => {
    if (index < Tareas.length - 1) {
      const TareasActualizadas = [...Tareas];
      [TareasActualizadas[index], TareasActualizadas[index + 1]] = [
        TareasActualizadas[index + 1],
        TareasActualizadas[index],
      ];
      setTareas(TareasActualizadas);
    }
  };
  return (
    <div className="ToDoList">
      <h1>Lista de tareas</h1>
      <input
        type="text"
        placeholder="Ingrese una tarea..."
        value={TareaNueva}
        onChange={handleInputChange}
      />
      <button className="BotonAgregar" onClick={AgregarTarea}>
        Agregar
      </button>
      <ol>
        {Tareas.map((tarea, index) => (
          <li key={index}>
            <span className="TextoTarea">{tarea}</span>
            <button className="BotonBorrar" onClick={() => BorrarTarea(index)}>
              Borrar
            </button>
            <button
              className="BotonMover"
              onClick={() => MoverTareaArriba(index)}
            >
              Arriba
            </button>
            <button
              className="BotonMover"
              onClick={() => MoverTareaAbajo(index)}
            >
              Abajo
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDo;
