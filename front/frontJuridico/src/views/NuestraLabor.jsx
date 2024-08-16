import { dbCasos, titulos } from "../helpers/casos";
const NuestraLabor = () => {
  return (
    <section className="container">
      <h2>Nuestras Experiencias</h2>
      <article className="d-flex gap-3 m-5">
        {dbCasos.map((caso) => (
          <div key={caso.id} className="card w-30 p-2">
            <img
              src={caso.img ?? "/icono.svg"}
              alt="Imagen del caso"
              className="card-img-top"
            />
            <h3 className="card-title">{caso.title}</h3>
            <p className="card-text">{caso.detalle}</p>
          </div>
        ))}
      </article>
      <p className="small text-center ">
        Todos los casos aquí representados fueron expresamente autorizados a ser
        compartidos con fines educativos y comerciales y se encuentran bajo los
        derechos intelectuales de Leyria & De Menezes.
      </p>
      <h2>Nuestros Titulos</h2>
      <article className="d-flex gap-3 m-5">
        {titulos.map((titulo) => (
          <div key={titulo.id} className="card w-30 p-2">
            <h3 className="card-title">{titulo.name}</h3>
            <img src={titulo.img ?? "/icono.svg"} alt="Foto del titulo" />
            <p className="card-text">{titulo.detalle}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default NuestraLabor;
