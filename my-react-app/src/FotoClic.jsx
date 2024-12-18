const FotoClic = () => {
  const UrlImagen = "./src/assets/cod.png";
  const HandleClick = (e) => (e.target.style.display = "none");
  return (
    <div className="FotoSaskiaContenedor">
      <img
        src={UrlImagen}
        alt="Codsito"
        onClick={(e) => HandleClick(e)}
        className="FotoSaskia"
      />
    </div>
  );
};

export default FotoClic;
