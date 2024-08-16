import { Link } from "react-router-dom";
const BtnAgendar = () => {
  return (
    <Link className="btn btn-outline-light " to={"/nuevo-turno"}>
      Agendar Cita
    </Link>
  );
};

export default BtnAgendar;
