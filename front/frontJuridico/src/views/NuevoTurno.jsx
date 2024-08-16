import { ErrorMessage, Field, Form, Formik } from "formik";
import { handleNewShift, validateNewShift } from "../helpers/validationsForms";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, getDay, format } from "date-fns";
import { es } from "date-fns/locale";
import { useSelector } from "react-redux";
const NuevoTurno = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.user.id_user);

  if (id === null) {
    // Mientras id está siendo cargado
    return <div>Loading...</div>;
  }

  // Función para deshabilitar fines de semana
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <section className="container d-flex ">
      <Formik
        initialValues={{
          fecha: null,
          hora: "",
          comentarios: " ",
          status: 0,
          id_user: id,
        }}
        validate={validateNewShift}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          // Formateamos la fecha antes de enviarla
          const formattedValues = {
            ...values,
            fecha: format(values.fecha, "EEEE dd 'de' MMMM 'del' yyyy", {
              locale: es,
            }),
          };
          handleNewShift(
            formattedValues,
            { setSubmitting, setErrors },
            navigate
          );
        }}
        enableReinitialize={true}
      >
        {({ errors, isSubmitting, values, setFieldValue }) => (
          <article className="text-center">
            <Form>
              <h2>Nuevo Turno</h2>
              <article className=" p-3 ">
                <label className="text-white mx-3">Seleccione una fecha:</label>
                <div className="form-floating mb-3">
                  <DatePicker
                    selected={values.fecha}
                    onChange={(date) => setFieldValue("fecha", date)}
                    filterDate={isWeekday}
                    minDate={addDays(new Date(), 1)}
                    dateFormat="dd/MM/yyyy"
                    className="form-control bg-secondary p-3"
                  />
                  <ErrorMessage name="fecha" component="div" />
                </div>
                <label className="text-white">Seleccione una hora:</label>
                <div className="form-floating mb-3">
                  <Field
                    as="select"
                    name="hora"
                    className="form-control bg-secondary"
                  >
                    <option value="">Seleccione una hora</option>
                    <option value="09:00">09:00</option>
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                  </Field>
                  <ErrorMessage name="hora" component="div" />
                </div>
                <label className="text-white">
                  Puede indicarnos que quieres tratar en la cita:
                </label>
                <div className="form-floating mb-3">
                  <Field
                    as="textarea"
                    name="comentarios"
                    className="form-control bg-secondary text-white"
                  ></Field>
                </div>
                {errors.general && <div>{errors.general}</div>}
                <div className="p-5  ">
                  <button
                    className="btn btn-secondary mx-2"
                    type="submit"
                    id="btn"
                    disabled={isSubmitting}
                  >
                    Agendar el turno
                  </button>
                </div>
              </article>
            </Form>
            <Link className="btn btn-danger " to={"/mis-turnos"}>
              Cancelar
            </Link>
          </article>
        )}
      </Formik>
    </section>
  );
};

export default NuevoTurno;
