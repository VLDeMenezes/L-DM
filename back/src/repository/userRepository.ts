import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
  findById: async function (id: number): Promise<User> {
    const user = await this.findOne({
      where: { id_user: id },
      relations: ["credentials", "shifts"],
    });
    if (user) return user;
    else throw new Error("Usuario no encontrado");
  },
  checkLogin: async function (
    correo: string,
    password: number
  ): Promise<User | undefined> {
    try {
      const user = await this.findOne({
        where: { correo: correo },
        relations: ["credentials", "shifts"],
      });

      if (user) {
        console.log(user.credentials.password, password);
        if (user.credentials.password === password) {
          console.log("Son correctos");
          return user;
        }
      } else throw new Error("Usuario o contraseña incorrecta");
    } catch (error) {
      throw new Error("Usuario o contraseña incorrecta");
    }
  },
});

export default UserRepository;
