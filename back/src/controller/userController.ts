import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import {
  deleteUserService,
  editUserService,
  getOneUserService,
  getUserService,
  loginUserService,
  registerUserService,
} from "../services/userServices";
import { User } from "../entities/User";

export const getUserController = catchAsync(
  async (req: Request, res: Response) => {
    //buscamos todos los usuarios
    const users: User[] = await getUserService();
    res.status(200).json(users);
  }
);
export const getOneUserController = catchAsync(
  async (req: Request, res: Response) => {
    // convertimos el parametro en un numero
    const { id_user } = req.params;
    let idNumber = parseInt(id_user);
    //buscamos el usuario por el ID
    const user: User | null = await getOneUserService(idNumber);
    res.status(200).json(user);
  }
);

export const registerUserController = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const newUser: User = await registerUserService(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  }
);

export const loginUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { correo, password } = req.body;
    console.log("intentando loguearse 1", correo, password);
    const loginUser = await loginUserService(correo, password);
    res.status(200).json(loginUser);
  }
);

export const editUserController = catchAsync(
  async (req: Request, res: Response) => {
    // convertimos el parametro id en un numero
    const { id_user } = req.params;
    const idNumber: number = parseInt(id_user);
    //editamos el usuario
    const editedUser = await editUserService(req.body, idNumber);
    //! Debemos ver como editamos las credenciales
    res.status(200).json(editedUser);
  }
);
export const deleteUserController = catchAsync(
  async (req: Request, res: Response) => {
    //convertimos el parametro id en un numero
    const { id_user } = req.params;
    const idNumber = parseInt(id_user);
    // borramos definitivamente el usuario
    const deletedUser = await deleteUserService(idNumber);
    res.status(200).json(deletedUser);
  }
);
