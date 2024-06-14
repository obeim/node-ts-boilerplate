import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { encryptPassword } from "../../helpers";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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
