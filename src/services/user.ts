import { DeepPartial } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/entity/User";
import { ErrorWithStatus } from "../types/express";

export default function userService() {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = async (user: DeepPartial<User>) => {
    const userExist = await userRepository.findOneBy({ email: user.email });
    if (userExist) {
      let error = Error("user already exist") as ErrorWithStatus;
      error.status = 500;
      throw error;
    }
    const initUser = userRepository.create(user);
    return await userRepository.save(initUser);
  };

  const deleteUser = async (id: string) => {
    const userExist = await userRepository.findOneBy({ id: parseInt(id) });

    if (userExist) await userRepository.delete(id);
    else {
      let error = Error("There is no such a user") as ErrorWithStatus;
      error.status = 404;
      throw error;
    }

    return { message: "User removed successfully" };
  };

  const getUserById = async (id: string) => {
    return await userRepository.findOne({
      where: { id: parseInt(id) },
      select: ["email", "age", "username", "firstName", "lastName", "id"],
    });
  };

  const getUsers = async () => {
    return await userRepository.find({});
  };

  return { createUser, getUserById, getUsers, deleteUser };
}
