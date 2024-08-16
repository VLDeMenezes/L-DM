import PropTypes from "prop-types";
import { cancelShift } from "../../services/apiService";

const Turnos = ({
  id_shift,
  fecha,
  hora,
  comentarios,
  status,
  reloadTurnos,
}) => {
  const statusMap = {
    0: "Activo",
    1: "Cancelado",
    2: "Finalizado",
  };
  const statusString = statusMap[status] || "Desconocido";
  let color;
  switch (status) {
    case 0:
      color = "#ededed20"; // Negro para estado activo
      break;
    case 1:
      color = "#d41818"; // Rojo para estado cancelado
      break;
    case 2:
      color = "#3e6e4b"; // Gris para estado completado
      break;
    default:
      color = "#ededed20"; // Por defecto, negro
  }

  const handleCancelShift = () => {
    cancelShift(id_shift)
      .then(() => {
        alert("Turno cancelado con exito");
        reloadTurnos();
      })
      .catch((err) => {
        alert("Error al cancelar turno", err);
      });
  };
  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{hora}</td>
        <td>{comentarios}</td>
        <td style={{ backgroundColor: color }}>{statusString}</td>
        <td>
          {status === 0 ? (
            <button
              className="btn btn-outline-danger red"
              onClick={handleCancelShift}
            >
              Cancel
            </button>
          ) : (
            <></>
          )}
        </td>
      </tr>
    </>
  );
};

Turnos.propTypes = {
  id_shift: PropTypes.number.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  comentarios: PropTypes.string,
  status: PropTypes.number.isRequired,
  reloadTurnos: PropTypes.func.isRequired,
};

export default Turnos;
