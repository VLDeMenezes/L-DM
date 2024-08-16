import CardList from "./CardList";

const SectionCasos = () => {
  return (
    <section className="container">
      <div className="row text-center mb-5">
        <h2 className="col">Algunas Experiencias</h2>
        <img src="icono.svg" alt="Icono del Estudio" className="logo" />
      </div>

      <article className="d-flex justify-content-around">
        <CardList />
      </article>
    </section>
  );
};

export default SectionCasos;
