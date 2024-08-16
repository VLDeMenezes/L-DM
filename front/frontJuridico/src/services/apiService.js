import axios from "axios";

const API_URL = "http://localhost:3000/";

export const apiService = axios.create({
  baseURL: API_URL,
});

export const getShifts = async (id_user) => {
  try {
    const response = await apiService.get(`/shift/turnos/${id_user}`);
    return response;
  } catch (error) {
    throw new Error("Error al obtener los turnos", error.message);
  }
};
export const createNewUser = async (values) => {
  console.log(values);
  console.log(typeof values);
  try {
    const response = await apiService.post("/user/register", values);
    return response.data;
  } catch (error) {
    throw new Error("Error al registrar el usuario", error.message);
  }
};

export const createNewShift = async (values) => {
  try {
    const response = await apiService.post("/shift/schedule", values);
    return response;
  } catch (error) {
    throw new Error("Error al crear el turno", error.message);
  }
};

export const loginUser = async (values) => {
  try {
    const response = await apiService.post(`user/login`, values);
    return response;
  } catch (error) {
    throw new Error("Error al loguearte", error.message);
  }
};

export const cancelShift = async (id_shift) => {
  try {
    const response = await apiService.put(`shift/cancel/${id_shift}`);
    return response;
  } catch (error) {
    throw new Error("Error al cancelar el turno", error.message);
  }
};
