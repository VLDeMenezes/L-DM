import Hero from "../components/HomeComponents/Hero";
import SectionLabor from "../components/HomeComponents/SectionLabor";
import SectionCasos from "../components/HomeComponents/SectionCasos";
import SectionHorario from "../components/HomeComponents/SectionHorarios";

const Home = () => {
  return (
    <main className="container">
      <Hero />
      <SectionLabor />
      <SectionCasos />
      <SectionHorario />
    </main>
  );
};

export default Home;
