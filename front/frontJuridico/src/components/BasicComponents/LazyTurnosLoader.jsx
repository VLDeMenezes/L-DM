import Turnos from "../MisTurnosComponents/Turnos";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setTurnos } from "../../redux/turnosReducer";
import { useEffect, useState } from "react";

const LazyTurnosLoader = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const turnos = useSelector((state) => state.turnos.turnos);
  const id_user = useSelector((state) => state.user.id_user);
  const { data, error } = useFetch("shift", reload, id_user);
  useEffect(() => {
    if (data) {
      let lastTurnos = data;
      if (data.length > 1) {
        lastTurnos = data.sort((b, a) => a.id_shift - b.id_shift).slice(0, 10); // Tomamos los primeros 10 elementos
      }
      dispatch(setTurnos(lastTurnos));
    }
  }, [data, dispatch]);

  const handleReloadTurnos = () => {
    setReload((prevReload) => !prevReload);
  };
  console.log(turnos);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Comentario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {turnos.map((turno) => (
            <Turnos
              key={turno.id_shift}
              {...turno}
              reloadTurnos={handleReloadTurnos}
            />
          ))}
        </tbody>
      </table>
      {turnos && turnos.length === 0 && (
        <p className="text-center bg-dark my-3">
          Aun no tiene turnos agendados, pruebe en Agendar Cita
        </p>
      )}
      {error && <p>Error al cargar turnos, recarge la pagina</p>}
    </>
  );
};

export default LazyTurnosLoader;
