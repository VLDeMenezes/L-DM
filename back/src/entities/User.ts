import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
export type TSexo = "Masculino" | "Femenino" | "Otro";
export type TRole = "admin" | "user";
import { Shift } from "./Shift";
import { Credentials } from "./Credentials";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 100 })
  nombre: string;

  @Column()
  edad: number;

  @Column()
  domicilio: string;

  @Column({ type: "bigint" })
  telefono: number;

  @Column()
  sexo: TSexo;

  @Column()
  cumpleanios: Date;

  @Column({ unique: true })
  dni: number;

  @Column({ unique: true })
  correo: string;

  @Column()
  role: TRole;

  @Column()
  active_user: boolean;

  @OneToOne(() => Credentials, { cascade: true })
  @JoinColumn()
  credentials: Credentials;

  @OneToMany(() => Shift, (shift) => shift.user, { cascade: true })
  shifts: Shift[];
}
