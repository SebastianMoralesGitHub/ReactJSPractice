import Tarjeta from "./Tarjeta";
import Estudiante from "./Estudiante";
import FotoSaskia from "./assets/Sas.png";
import FotoCod from "./assets/cod.png";
import Saludo from "./SaludoAlUsuario";
import Lista from "./Lista";
import BotonFuncional from "./BotonFuncional";
import FotoClic from "./FotoClic";
import Componentehook from "./Componentehook";
import Contador from "./ContadorUwU";
import ComponenteOnChange from "./Onchange";
import SelectorColor from "./SeleccionarColor";
import ContadorUpdater from "./ContadorUpdaters";
import ObjetosUpdate from "./ObjetosUpdate";
import ArrayUpdate from "./ArrayUpdate";
import ArrayObjetos from "./ArrayObjetosUpdate";
import ToDo from "./ToDoList";
import Effect from "./UsoDelEfecto";
import RelojDigital from "./Reloj";
import ComponenteA from "./ComponenteA";

function App() {
  const Frutas = [
    { id: 1, nombre: "Mango", cantidad: 5 },
    { id: 2, nombre: "Banano", cantidad: 7 },
    { id: 3, nombre: "Manzana", cantidad: 10 },
    { id: 4, nombre: "Pina", cantidad: 4 },
    { id: 5, nombre: "Araza", cantidad: 90 },
    { id: 6, nombre: "Uchuva", cantidad: 10 },
    { id: 7, nombre: "Pera", cantidad: 4 },
  ];
  const Carnes = [
    { id: 1, nombre: "Pierna", cantidad: 2 },
    { id: 2, nombre: "Lomo", cantidad: 0 },
    { id: 3, nombre: "Pechuga", cantidad: 9 },
    { id: 4, nombre: "Bife", cantidad: 1 },
    { id: 5, nombre: "Salmon", cantidad: 11 },
    { id: 6, nombre: "Boniga", cantidad: 10 },
    { id: 7, nombre: "Filete", cantidad: 4 },
  ];
  return (
    <>
      <Saludo EstaLogeado={true} />
      <Tarjeta
        Foto={FotoSaskia}
        Alt="Foto de Saskia"
        Titulo="La SaskiCaremonda"
        Descripcion="Saskia es una peluda muy grosera que quiere comerse las bolsas"
      />
      <Tarjeta
        Foto={FotoCod}
        Alt="Foto de Cod"
        Titulo="El codsito"
        Descripcion="El codsito es el jueguito favorito de mi novia la carenalga :3"
      />
      <Estudiante name="Bob Esponja" age={77} isStudent={true} />
      <Estudiante name="Bob Patino" age={50} isStudent={false} />
      {Frutas.length > 0 && <Lista items={Frutas} Categoria="Frutas" />}
      {Carnes.length > 0 && <Lista items={Carnes} Categoria="Carnes" />}
      <BotonFuncional />
      <FotoClic />
      <Componentehook />
      <Contador />
      <ComponenteOnChange />
      <SelectorColor />
      <ContadorUpdater />
      <ObjetosUpdate />
      <ArrayUpdate />
      <ArrayObjetos />
      <ToDo />
      <Effect />
      <RelojDigital />
      <ComponenteA />
    </>
  );
}

export default App;
