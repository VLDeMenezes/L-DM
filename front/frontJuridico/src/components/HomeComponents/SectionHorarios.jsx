import { Link } from "react-router-dom";
import Mapa from "../MapaComponents/Mapa";
import { useSelector } from "react-redux";

const SectionHorarios = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <section className="container text-center ">
      <div className="row">
        <img src="icono.svg" alt="Icono del Estudio" className="logo" />
        {/* <h3>Nuestros Horarios y Ubicación</h3> */}
      </div>
      <div className="row my-5 align-items-baseline">
        <div className="col">
          <h3>Ubicacion</h3>
          <Mapa />
        </div>
        <div className="col">
          <h3>Horarios</h3>
          <p className="p-5">
            Nuestros horarios de atención son de 8 a 12 hs de Lunes a Viernes.
            En caso de precisar nuestros servicios fuera del horario de atención
            los honorarios podrían sufrir modificaciones.
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
    </section>
  );
};

export default SectionHorarios;
