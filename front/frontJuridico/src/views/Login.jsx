import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { validationsForms } from "../helpers/validationsForms";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginIn } from "../redux/reducer";
import { useState } from "react";
import { loginUser } from "../services/apiService";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (values, { setSubmitting, setErrors }) => {
    values.password = parseInt(values.password);

    loginUser(values)
      .then((res) => {
        if (res.data.login) {
          const user = res.data.user.nombre;
          const id = res.data.user.id_user;
          const userLoad = { nombre: user, id_user: id, isLogin: true };
          dispatch(loginIn(userLoad));
          navigate("/mis-turnos");
        } else {
          alert("Credenciales incorrectas");
          setShowModal(true);
        }
      })
      .catch((error) => {
        setShowModal(true);
        alert(error.response.data.error);

        setErrors({ general: "Error al iniciar sesión" });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="container d-flex ">
      <Formik
        initialValues={{ correo: "", password: "" }}
        validate={validationsForms}
        onSubmit={handleLogin}
      >
        {({ isSubmitting, errors }) => (
          <Form className="w-30">
            <h2>Iniciar sesión</h2>

            <article className=" p-3 ">
              <div className="form-floating mb-3 ">
                <Field
                  type="text"
                  name="correo"
                  placeholder="example@gmail.com"
                  id="correo"
                  className="form-control bg-secondary"
                />
                <label htmlFor="correo" className=" text-dark">
                  Correo
                </label>
                <ErrorMessage name="username" component="div" />
              </div>
              <div className="form-floating mb-3">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control bg-secondary"
                />
                <ErrorMessage name="password" component="div" />
                <label className="text-dark">Password</label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-secondary mx-auto d-block"
                id="btn"
                data-bs-toggle="modal"
                data-bs-target="#modalRegistration"
              >
                Iniciar
              </button>
              {showModal && (
                <>
                  <button className="btn btn-outline-light my-2 mx-auto d-block">
                    Restablecer contraseña
                  </button>
                  <Link
                    to={"/registration"}
                    className="btn btn-outline-light mx-auto my-2 d-block"
                  >
                    Aun no estoy registrado
                  </Link>
                </>
              )}
              {errors.general && <div>{errors.general}</div>}
            </article>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Login;
