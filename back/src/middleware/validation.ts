import { Request, Response, NextFunction } from "express";
import { TActive } from "../entities/Shift";
export const validationDataUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    nombre,
    edad,
    domicilio,
    telefono,
    sexo,
    dni,
    correo,
    role,
    active_user,
  } = req.body;

  if (
    !nombre ||
    !edad ||
    !domicilio ||
    !telefono ||
    !sexo ||
    !dni ||
    !correo ||
    !role
  )
    return res.status(400).json({ error: "Todos los campos son obligatorios" });

  if (typeof nombre !== "string")
    return res.status(400).json({ error: "El nombre debe ser un string" });
  if (typeof edad !== "number")
    return res.status(400).json({ error: "La edad debe ser un number" });
  if (typeof domicilio !== "string")
    return res.status(400).json({ error: "El domicilio debe ser un string" });
  if (typeof telefono !== "number")
    return res.status(400).json({ error: "El telefono debe ser un number" });
  if (sexo !== "Masculino" && sexo !== "Femenino" && sexo !== "Otro")
    return res
      .status(400)
      .json({ error: "El sexo debe ser Masculino - Femenino u Otro" });
  if (typeof dni !== "number")
    return res.status(400).json({ error: "El dni debe ser un number" });
  if (typeof correo !== "string")
    return res.status(400).json({ error: "El correo debe ser un string" });

  if (role !== "Admin" && role !== "User")
    return res.status(400).json({ error: "El role debe ser Admin o User" });
  if (active_user !== false && active_user !== true)
    return res
      .status(400)
      .json({ error: "El Estado del Usuario debe ser true o false" });
  next();
};

export const validationDataShift = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { fecha, hora, status, comentario } = req.body;
  //los comentarios pueden ser vacios
  if (!fecha || !hora)
    return res.status(400).json({ error: "Todos los campos son obligatorios" });

  if (typeof fecha !== "string")
    return res
      .status(400)
      .json({ error: "Fecha incorrecta, debe ser un string" });

  if (typeof hora !== "string")
    return res
      .status(400)
      .json({ error: "La hora es incorrecta, debe ser un string" });
  if (status !== 0 && status !== 1 && status !== 2)
    return res.status(400).json({
      error: "El status debe ser Activo (0), completado(1) o cancelado(2)",
    });

  next();
};
export const validationIDBodyUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_user } = req.body;

  if (!id_user)
    return res.status(400).json({ error: "El ID del usuario es obligatorio" });
  next();
};

export const validationIDBodyShift = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_shift } = req.body;
  if (!id_shift)
    return res.status(400).json({ error: "El ID del turno es obligatorio" });
  next();
};

export const validationIDParamsUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_user } = req.params;

  if (!id_user)
    return res.status(400).json({ error: "El ID user es obligatorio" });
  next();
};

export const validationIDParamsShift = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_shift } = req.params;
  if (!id_shift)
    return res.status(400).json({ error: "El ID del turno es obligatorio" });

  next();
};

export const validationUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_user } = req.body;
  if (!id_user) return res.status(400).json({ error: "El ID es obligatorio" });
  //debo validad si el id existe en la base de datos)

  next();
};

export const UserExists = (req: Request, res: Response, next: NextFunction) => {
  const { id_user } = req.body;
  if (!id_user) {
    return res
      .status(400)
      .json({ error: "El ID de usuario no fue enviado o no existe" });
  }

  next();
};

export const validationLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { correo, password } = req.body;
  if (!correo || !password) {
    return res.status(400).json({ error: "Credenciales obligatorias" });
  }

  next();
};
