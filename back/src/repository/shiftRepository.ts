import { AppDataSource } from "../config/data-source";
import { Shift, TActive } from "../entities/Shift";

const ShiftRepository = AppDataSource.getRepository(Shift).extend({
  checkById: async function (id: number): Promise<boolean> {
    const shift = await this.findOneBy({ id_shift: id });
    return !!shift;
  },
  findById: async function (id: number): Promise<Shift | boolean> {
    const shift = await this.findOneBy({ id_shift: id });
    if (shift)
      if (shift.status === TActive.Activo) return shift;
      else return false;
    else throw new Error("Turno no encontrado");
  },
});
export default ShiftRepository;
