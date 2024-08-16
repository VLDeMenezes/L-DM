import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  validationsFormsRegister,
  handleRegister,
} from "../helpers/validationsForms";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, formikHelpers) => {
    handleRegister(values, formikHelpers, navigate);
  };
  return (
    <section className="container d-flex ">
      <Formik
        initialValues={{
          nombre: "",
          edad: "",
          correo: "",
          domicilio: "",
          telefono: "",
          sexo: "",
          cumpleanios: "",
          dni: "",
          role: "User",
          active_user: true,
        }}
        validate={validationsFormsRegister}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <h2 className="mb-3">Registrarse:</h2>
            <div className="form-floating mb-3">
              <Field
                type="text"
                name="nombre"
                placeholder="Arturo..."
                id="fNombre"
                className="form-control bg-secondary"
                autoComplete="off"
              />
              <label htmlFor="fNombre" className="text-dark">
                Nombre
              </label>
              <ErrorMessage name="nombre" component="div" />
            </div>
            <div className="form-floating mb-3 ">
              <Field
                type="number"
                name="edad"
                placeholder="Edad"
                className="form-control bg-secondary"
                id="fEdad"
              />
              <label htmlFor="fEdad" className=" text-dark ">
                Edad
              </label>
              <ErrorMessage name="edad" component="div" />
            </div>

            <div className="form-floating mb-3">
              <Field
                type="emial"
                name="correo"
                placeholder="Email"
                className="form-control bg-secondary"
                id="fEmail"
                autoComplete="off"
              />
              <label htmlFor="fEmail" className="text-dark">
                Email
              </label>
              <ErrorMessage name="correo" component="div" />
            </div>
            <div className="form-floating mb-3">
              <Field
                type="text"
                name="domicilio"
                placeholder="Domicilio"
                className="form-control bg-secondary"
                id="fDomicilio"
                autoComplete="off"
              />
              <label htmlFor="fDomicilio" className="text-dark">
                Domicilio
              </label>
              <ErrorMessage name="domicilio" component="div" />
            </div>
            <div className="form-floating mb-3">
              <Field
                type="number"
                name="telefono"
                placeholder="Telefono"
                className="form-control bg-secondary"
                id="fTelefono"
                autoComplete="off"
              />
              <label htmlFor="fTelefono" className="text-dark">
                Telefono
              </label>
              <ErrorMessage name="telefono" component="div" />
            </div>
            <div className="form-floating mb-3">
              <Field
                as="select"
                name="sexo"
                placeholder="Sexo"
                id="fSexo"
                className="form-select bg-secondary"
                autoComplete="off"
              >
                <option value="">Seleccione una opcion</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </Field>
              <label htmlFor="fSexo" className="text-dark">
                Sexo
              </label>
              <ErrorMessage name="sexo" component="div" />
            </div>
            <div className="form-floating mb-3 ">
              <Field
                name="cumpleanios"
                placeholder="Cumpleaños"
                className="form-control bg-secondary "
                type="date"
                id="fCumpleanios"
              />
              <label htmlFor="fCumpleanios" className="text-dark ">
                Fecha de Cumpleaños
              </label>
              <ErrorMessage name="cumpleanios" component="div" />
            </div>
            <div className="form-floating mb-3 ">
              <Field
                type="number"
                name="dni"
                placeholder="DNI"
                className="form-control bg-secondary"
                id="fDni"
              />
              <label htmlFor="fDni" className="text-dark">
                DNI
              </label>
              <ErrorMessage name="dni" component="div" />
            </div>

            <Field type="hidden" name="role" value="user" />
            <Field type="hidden" name="active_user" value="true" />

            <p>
              Tu Usuario será el email ingresado, y la contraseña temporal será
              tu DNI ingresado, te sugerimos cambiarlos una vez inicies sesión.
            </p>
            {errors.general && <div>{errors.general}</div>}
            <div>
              <button
                id="btn"
                className="btn btn-secondary mx-auto d-block"
                type="submit"
                disabled={isSubmitting}
              >
                Registrarse
              </button>
              <Link
                to={"/login"}
                className="btn btn-outline-light mx-auto my-2 d-block w-30"
              >
                Ya estoy registrado, Iniciar Sesión
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Registration;
