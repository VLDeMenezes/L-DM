import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Shift } from "../entities/Shift";
import { Credentials } from "../entities/Credentials";

// configuramos la base de datos
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "VLDM1234",
  database: "henry",
  synchronize: true,
  logging: false,
  //definimos las entidades/tablas
  entities: [User, Shift, Credentials],
  subscribers: [],
  migrations: [],
  //!PELIGRO
  //descomentar para limpiar las tablas
  // dropSchema: true,
  //!PELIGRO
});

//creamos el repositorio de Credencial
export const CredentialRepository = AppDataSource.getRepository(Credentials);
