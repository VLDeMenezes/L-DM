import BtnAgendar from "../components/BasicComponents/btnAgendar";
import TurnosList from "../components/MisTurnosComponents/TurnosList";
const MisTurnos = () => {
  return (
    <main className="container ">
      <div className="mt-2 p-2 d-flex color-bg-detail  align-items-center justify-content-around rounded">
        <h2 className=" text-white ">Mis Turnos</h2>
        <BtnAgendar />
      </div>
      <TurnosList />
    </main>
  );
};

export default MisTurnos;
