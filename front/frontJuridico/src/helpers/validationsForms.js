import { createNewShift, createNewUser } from "../services/apiService";

export const validationsForms = (input) => {
  const errors = {};
  const { correo, password } = input;
  let emailRexex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z-A-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let btn = document.getElementById("btn");

  if (!correo) errors.username = "Username is required, it's an email!";
  if (!password) errors.password = "Password is required";
  if (!emailRexex.test(correo)) {
    errors.username = "Email is not valid";
  }
  if (correo === "example@gmail.com")
    errors.username = "This is a test email, try yours";
  if (Object.values(errors).length === 0)
    btn.className = "mx-auto d-block btn btn-success";
  else btn.className = "mx-auto d-block btn btn-secondary";
  return errors;
};

export const validationsFormsRegister = (input) => {
  const errors = {};
  let btn = document.getElementById("btn");
  if (!input.edad) errors.edad = "Edad is required";
  if (!input.domicilio) errors.domicilio = "Domicilio is required";
  if (!input.sexo) errors.sexo = "Sexo is required";
  if (input.sexo === "") errors.sexo = "Sexo is required";
  if (!input.cumpleanios) errors.cumpleanios = "Cumpleaños is required";
  if (!input.dni) errors.dni = "DNI is required";

  if (Object.values(errors).length === 0)
    btn.className = "mx-auto d-block btn btn-success";
  else btn.className = "mx-auto d-block btn btn-secondary";

  return errors;
};

export const handleRegister = (
  values,
  { setSubmitting, setErrors },
  navigate
) => {
  createNewUser(values)
    .then(() => {
      alert("Usuario registrado con exito");
      navigate("/login");
    })
    .catch((error) => {
      alert("Error al registrar el usuario", error);
      setErrors({ general: "Error al registrar usuario" });
    })
    .finally(() => {
      setSubmitting(false);
    });
};

export const validateNewShift = (input) => {
  const errors = {};
  let btn = document.getElementById("btn");
  if (!input.fecha) errors.fecha = "Fecha is required";
  if (!input.hora) errors.hora = "Hora is required";
  if (Object.values(errors).length === 0)
    btn.className = "mx-auto d-block btn btn-success";
  else btn.className = "mx-auto d-block btn btn-secondary";

  return errors;
};

export const handleNewShift = (
  values,
  { setErrors, setSubmitting },
  navigate
) => {
  if (values.comentarios === " ") values.comentarios = "Sin comentarios";

  createNewShift(values)
    .then((res) => {
      if (res.data) {
        alert("Turno registrado con exito");
        navigate("/mis-turnos");
      }
    })
    .catch((error) => {
      alert(error.response.data);
      setErrors({ general: "Error al registrar turno" });
    })
    .finally(() => {
      setSubmitting(false);
    });
};
