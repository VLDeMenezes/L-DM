import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dbCasos } from "../helpers/casos";
const CasoParticular = () => {
  const { id } = useParams();
  const [caso, setCaso] = useState({});

  useEffect(() => {
    setCaso(dbCasos.find((caso) => caso.id === Number(id)));
    return () => setCaso({});
  }, [id]);

  return (
    <section className="container text-center">
      <h2 className="">{caso?.title}</h2>
      <img
        src={caso?.img ?? "/icono.svg"}
        alt="Imagen del caso"
        className="w-30"
      />
      <p>{caso?.detalle}</p>
      <Link to={"/"} className="btn btn-dark">
        Volver
      </Link>
    </section>
  );
};

export default CasoParticular;
