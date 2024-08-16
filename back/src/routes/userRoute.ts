import { Router } from "express";
import {
  deleteUserController,
  editUserController,
  getOneUserController,
  getUserController,
  loginUserController,
  registerUserController,
} from "../controller/userController";
import {
  validationDataUser,
  validationIDParamsUser,
  validationLogin,
} from "../middleware/validation";
const userRoute = Router();

//midelware de testeo
import work from "../middleware/work";

//rutas =>
userRoute.get("/", getUserController); //listar todos los usuarios
userRoute.get("/:id_user", validationIDParamsUser, getOneUserController); //listar un solo usuario por ID por params
userRoute.post("/register", validationDataUser, registerUserController); //registrar un nuevo usuario por body
userRoute.post("/login", validationLogin, loginUserController); //logeamos al usuario por body
userRoute.put(
  "/:id_user",
  validationDataUser,
  validationIDParamsUser,
  editUserController
); //actualizar un usuario por body
userRoute.delete(
  "/:id_user",
  validationIDParamsUser,

  deleteUserController
); //borrar un usuario por ID por body

export default userRoute;
