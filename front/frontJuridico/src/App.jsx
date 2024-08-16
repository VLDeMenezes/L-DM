import { Routes, Route } from "react-router-dom";
import NavBar from "./components/BasicComponents/NavBar";
import Home from "./views/Home";
import MisTurnos from "./views/MisTurnos";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Footer from "./components/BasicComponents/Footer";
import NuevoTurno from "./views/NuevoTurno";
import NuestraLabor from "./views/NuestraLabor";
import ErrorPage from "./views/ErrorPage";
import CasoParticular from "./views/CasoParticular";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <>
      <span id="inicio"></span>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestra-labor" element={<NuestraLabor />} />
        <Route path="/nuestra-labor/:id" element={<CasoParticular />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {isLogin && (
          <>
            <Route path="/mis-turnos" element={<MisTurnos />} />
            <Route path="/nuevo-turno" element={<NuevoTurno />} />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
