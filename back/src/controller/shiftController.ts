import { Request, Response } from "express";
import {
  getShiftService,
  getIDShiftservice,
  newShiftservice,
  editShiftservice,
  cancelledShiftService,
  deletedShiftService,
  getUserShiftService,
} from "../services/shiftServices";

//obtener todos los shift de todos los usuarios
export const getShiftController = async (req: Request, res: Response) => {
  //obtener todos los turnos
  const shift = await getShiftService();
  res.status(200).json(shift);
};

//obtener un shift por ID, independientemene del usuario
export const getIDShiftController = async (req: Request, res: Response) => {
  // obtener un turno por ID
  const { id } = req.params;
  const idNum = parseInt(id);
  const shiftId = await getIDShiftservice(idNum);
  res.status(200).json(shiftId);
};

export const getUserShifts = async (req: Request, res: Response) => {
  //obtener todos los turnos de un usuario
  const { id_user } = req.params;
  const idNum = parseInt(id_user);
  const userShifts = await getUserShiftService(idNum);
  res.status(200).json(userShifts);
};
export const newShiftController = async (req: Request, res: Response) => {
  //agendar nuevo turno
  console.log("Intentado registrar un nuevo turno");
  try {
    const newShift = await newShiftservice(req.body);
    res.status(201).json(newShift);
  } catch (error) {
    res.status(401).json("Error al crear un nuevo turno");
  }
};
export const editShiftController = async (req: Request, res: Response) => {
  //solo se editan comentarios o estado > activado o desactivado
  //convertimos el parametro id en un numero
  try {
    const { id } = req.params;
    const idNum = parseInt(id);
    // editar un turno
    const editedShift = await editShiftservice(req.body, idNum);
    res.status(200).json(editedShift);
  } catch (error) {
    res.status(400).json("Error al editar el turno");
  }
};
export const cancelShiftController = async (req: Request, res: Response) => {
  //cancelar un turno por ID por body
  try {
    const { id_shift } = req.params;
    const idNum = parseInt(id_shift);
    const cancelledShift = await cancelledShiftService(idNum);
    res.status(200).json("Turno cancelado correctamente");
  } catch (error) {
    res.status(400).json("Turno a cancelar no encontrado, verifique el ID");
  }
};

export const deleteShiftController = async (req: Request, res: Response) => {
  //borrar un turno por ID por body
  try {
    const { id_shift } = req.body;
    const deletedShift = await deletedShiftService(id_shift);
    res.status(200).json(deletedShift);
  } catch (error) {
    res.status(400).json("Turno a borrar no encontrado, verifique el ID");
  }
};
