import { User, TRole, TSexo } from "../entities/User";
import { createCredencialService } from "./credentialService";
import { AppDataSource, CredentialRepository } from "../config/data-source";
import ShiftRepository from "../repository/shiftRepository";
import UserRepository from "../repository/userRepository";
import { query } from "express";

export const getUserService = async (): Promise<User[]> => {
  //buscamos toda la tabla y devolvemos los datos incluyendo relacion con credenciales y turnos
  const users = await UserRepository.find({
    relations: {
      credentials: true,
      shifts: true,
    },
  });
  return users;
};
export const getOneUserService = async (
  id_user: number
): Promise<User | null> => {
  //buscamos el usuario por id
  const userId = await UserRepository.findOne({
    where: { id_user: id_user },
    relations: ["credentials", "shifts"],
  });

  if (userId === null) throw new Error("Usuario no encontrado");
  return userId;
};

export const registerUserService = async (dataNewUser: User): Promise<User> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    await queryRunner.startTransaction();
    //creamos el usuario
    const newUser = await UserRepository.create(dataNewUser);

    await queryRunner.manager.save(newUser);

    //creamos las credenciales
    const credentials = await createCredencialService(
      dataNewUser.correo,
      dataNewUser.dni
    );
    //asignamos credenciales

    newUser.credentials = credentials;
    await queryRunner.manager.save(newUser);

    //guardamos en la base de datos
    await queryRunner.commitTransaction();

    return newUser;
  } catch (error) {
    console.log(error);
    await queryRunner.rollbackTransaction();
    throw Error("Error al registrar el usuario");
  } finally {
    await queryRunner.release();
  }
};

export const loginUserService = async (correo: string, password: number) => {
  try {
    const user = await UserRepository.checkLogin(correo, password);

    const respuesta = { login: true, user: user };

    if (user) return respuesta;
    // else throw new Error("Usuario o contraseña incorrecta");
  } catch (error) {
    throw new Error("Usuario o contraseña incorrecta");
  }
};
export const editUserService = async (userEdited: User, idNumber: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    //buscamos el usuario a editar por id de parametros
    const userActual = await UserRepository.findById(idNumber);
    //si existe el usuario mergemos y guardamos
    UserRepository.merge(userActual, userEdited);
    const results = await UserRepository.save(userActual);
    await queryRunner.commitTransaction();
    return results;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw new Error("Usuario a editar no encontrado");
  } finally {
    await queryRunner.release();
  }
};

export const deleteUserService = async (id: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    const userToDelete = await UserRepository.findById(id);
    if (userToDelete.shifts && userToDelete.shifts.length > 0) {
      await Promise.all(
        userToDelete.shifts.map(async (shift) => {
          await ShiftRepository.delete(shift.id_shift);
        })
      );
    }
    await UserRepository.delete(id);
    if (userToDelete.credentials) {
      const credentialId = userToDelete.credentials.id_credential;
      await CredentialRepository.delete(credentialId);
      await queryRunner.commitTransaction();
    }
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw new Error("Error al borrar el usuario");
  } finally {
    await queryRunner.release();
  }
};
