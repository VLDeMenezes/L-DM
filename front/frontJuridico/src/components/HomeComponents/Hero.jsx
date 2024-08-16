import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <section className="text-center container">
      <h1>Estudio Jurídico Leyria & De Menezes</h1>
      <div className="row align-items-center justify-content-center">
        <div className="imagenAbogados  ">
          <img
            src="./src/assets/WhatsApp Image 2024-05-09 at 08.13.27-Photoroom.png-Photoroom.png"
            alt="Abogado"
          />
        </div>
        <div className="col">
          <h2 className="fs-3">La tranquilidad de estar bien asesorados.</h2>
          <p className="fs-7">
            Porque sabemos lo importante que es para vos tu libertad y el
            respeto de tus derechos.
          </p>
          {isLogin ? (
            <Link className="btn btn-light btn-lg" to={"/nuevo-turno"}>
              Agendar cita
            </Link>
          ) : (
            <Link className="btn btn-light btn-lg" to={"/login"}>
              Agendar cita
            </Link>
          )}
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <img src="logoType.svg" alt="" className="logotype mx-5" />
        <div className="imagenAbogados">
          <img
            src="./src/assets/386186565_1328777091089532_2245898058126543411_n-Photoroom (1).png"
            alt="Abogada"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
