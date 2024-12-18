import { useState, useEffect } from "react";

const Effect = () => {
  const [Ancho, setAncho] = useState(window.innerWidth);
  const [Alto, setAlto] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", HandleResize);
    console.log("Agregado un event listener");
    return () => {
      window.removeEventListener("resize", HandleResize);
      console.log("Quitado el event listener");
    };
  }, []);

  useEffect(() => {
    document.title = `Ancho ${Ancho} y alto ${Alto}`;
  }, [Ancho, Alto]);

  const HandleResize = () => {
    setAlto((A) => (A = window.innerHeight));
    setAncho((A) => (A = window.innerWidth));
  };
  return (
    <div className="TamanoContainer">
      <p>Ancho de la pantalla: {Ancho}</p>
      <p>Alto de la pantalla: {Alto}</p>
    </div>
  );
};
export default Effect;
