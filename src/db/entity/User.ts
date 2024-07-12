import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  Unique,
} from "typeorm";
import { encryptPassword } from "../../helpers";
@Entity()
@Unique(["email", "username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  password: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @BeforeInsert()
  async hashPassword() {
    const newPassword = encryptPassword(this.password);
    this.password = newPassword;
  }
}
