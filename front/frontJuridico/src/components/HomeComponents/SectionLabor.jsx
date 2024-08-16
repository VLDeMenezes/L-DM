const SectionLabor = () => {
  return (
    <section className="container text-center">
      <div className="row mb-5">
        <img src="icono.svg" alt="Icono del Estudio" className="logo " />
        <h2 className="col">Nuestra Labor</h2>
      </div>
      <div className="row text-center">
        <div className="col">
          <img
            src="./src/assets/WhatsApp Image 2024-05-09 at 10.31.15.jpeg"
            alt="Especilizacion"
            className="imagenLibros "
          />
        </div>
        <article className=" col text-start">
          <p className="fs-4">
            Con un equipo de profesionales especializados. Listos para
            solucionar todo. Especialmente dedicados a:
          </p>
          <ul>
            <li>Asesoramiento Jurídico</li>
            <li>Asesoramiento Laboral</li>
            <li>Expedientes Penales</li>
            <li>Accidentes de Tránsito</li>
            <li>Accidentes Laborales</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SectionLabor;
