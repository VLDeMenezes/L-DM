import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "credentials" })
export class Credentials {
  @PrimaryGeneratedColumn()
  id_credential: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: number;

  @OneToOne(() => User, (user) => user.credentials)
  user: User;
}
