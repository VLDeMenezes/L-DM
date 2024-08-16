import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar
      expand="lg"
      className="nav-color"
      data-bs-theme="ligth"
      sticky="top"
    >
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-4 my-2 ">
            <Link
              className="shadow mx-1 rounded btn btn-outline-dark"
              to="/#inicio"
            >
              Home
            </Link>
            <Link
              className="shadow mx-1 rounded btn btn-outline-dark"
              to="/nuestra-labor"
            >
              Nuestra Labor
            </Link>

            {isLogin ? (
              <>
                <Link
                  className="shadow mx-1  rounded btn btn-outline-dark"
                  to="/mis-turnos"
                >
                  Mis Turnos
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="shadow mx-1 rounded btn btn-outline-dark"
                  to="/registration"
                >
                  Registrarse
                </Link>
                <Link
                  className="shadow mx-1 rounded btn btn-outline-dark"
                  to="/login"
                >
                  Iniciar Sesión
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {isLogin && (
          <div className="d-flex mx-3 shadow color-bg-detail  rounded px-3 py-2">
            <h4>Hola {userName}!</h4>
            <button
              className="shadow mx-3 rounded btn btn-sm btn-outline-light"
              onClick={() => handleLogout()}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </Container>
    </Navbar>
  );
};
export default NavBar;
