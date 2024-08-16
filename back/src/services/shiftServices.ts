import { AppDataSource } from "../config/data-source";
import { Shift, TActive } from "../entities/Shift";
import ShiftRepository from "../repository/shiftRepository";
import UserRepository from "../repository/userRepository";
export const getShiftService = async () => {
  const shifts = await ShiftRepository.find({
    relations: {
      user: true,
    },
  });
  return shifts;
};

export const getIDShiftservice = async (id: number) => {
  const shiftID = await ShiftRepository.findOneBy({ id_shift: id });
  if (shiftID === null) throw new Error("Turno no encontrado");
  return shiftID;
};

export const newShiftservice = async (newShift: Shift) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();

    const shift = await ShiftRepository.create(newShift);
    const user = await UserRepository.findById(newShift.id_user);

    if (user) {
      shift.user = user;

      const results = await queryRunner.manager.save(shift);

      await queryRunner.commitTransaction();

      return results;
    } else throw new Error("Usuario no encontrado para el turno");
  } catch (error) {
    console.error("error detectado", error);
    await queryRunner.rollbackTransaction();
    throw Error("Error al crear el turno");
  } finally {
    await queryRunner.release();
  }
};

export const editShiftservice = async (editShift: Shift, idNum: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    await queryRunner.startTransaction();
    const shift = await ShiftRepository.findOneBy({
      id_shift: idNum,
    });
    const editedShift = await ShiftRepository.create(editShift);
    if (shift !== null) {
      ShiftRepository.merge(shift, editedShift);
      const results = await queryRunner.manager.save(shift);
      await queryRunner.commitTransaction();
      return results;
    } else throw new Error("Turno a modificar no encontrado");
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error al editar el turno");
  } finally {
    await queryRunner.release();
  }
};

export const cancelledShiftService = async (id_shift: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    const shift = await ShiftRepository.findById(id_shift);
    if (typeof shift == "object")
      if (shift.status === TActive.Cancelado) {
        return "Turno ya cancelado";
      } else shift.status = TActive.Cancelado;
    await queryRunner.manager.save(shift);
    await queryRunner.commitTransaction();
    return shift;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error al cancelar el turno");
  } finally {
    await queryRunner.release();
  }
};

export const getUserShiftService = async (id_user: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    const shifts = await ShiftRepository.find({
      where: { id_user: id_user },
      relations: {
        user: true,
      },
    });
    await queryRunner.commitTransaction();
    return shifts;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error al borrar el turno");
  } finally {
    await queryRunner.release();
  }
};

export const deletedShiftService = async (id: number) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    const shift = await ShiftRepository.findOneBy({
      id_shift: id,
    });

    if (shift) {
      const results = await ShiftRepository.delete({ id_shift: id });
      await queryRunner.commitTransaction();
      return results;
    } else throw new Error("Turno a borrar no encontrado");
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error al borrar el turno");
  } finally {
    await queryRunner.release();
  }
};
