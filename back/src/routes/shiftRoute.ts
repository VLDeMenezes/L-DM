import { Router } from "express";
import {
  getShiftController,
  getIDShiftController,
  newShiftController,
  editShiftController,
  cancelShiftController,
  deleteShiftController,
  getUserShifts,
} from "../controller/shiftController";
import {
  validationDataShift,
  UserExists,
  validationIDBodyShift,
  validationIDParamsShift,
  validationIDParamsUser,
} from "../middleware/validation";
import work from "../middleware/work";
const shiftRoute = Router();

//rutas =>
shiftRoute.get("/", getShiftController); //listar todos los turnos
shiftRoute.get("/:id", validationIDParamsShift, getIDShiftController); //listar un solo turno por ID por params
shiftRoute.get("/turnos/:id_user", validationIDParamsUser, getUserShifts); //listar todos los turnos de un usuario
shiftRoute.post(
  "/schedule",
  work,
  UserExists,
  validationDataShift,
  newShiftController
); //registrar un nuevo turno por body
shiftRoute.put(
  "/cancel/:id_shift",
  validationIDParamsShift,
  cancelShiftController
); // cancelar un turno por params
shiftRoute.put("/:id_shift", validationDataShift, editShiftController); //actualizar un turno por body
shiftRoute.delete("/", validationIDBodyShift, deleteShiftController); //borrar un turno por ID por body

export default shiftRoute;
