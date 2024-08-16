import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum TActive {
  "Activo",
  "Cancelado",
  "Completado",
}

@Entity({ name: "shifts" })
export class Shift {
  @PrimaryGeneratedColumn()
  id_shift: number;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @Column()
  comentarios: string;

  @Column()
  status: TActive;

  @Column()
  id_user: number;

  @ManyToOne(() => User, (user) => user.shifts)
  user: User;
}
