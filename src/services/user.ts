import { DeepPartial } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/entity/User";

export default function userService() {
  const userRepository = AppDataSource.getRepository(User);
  const createUser = async (user: DeepPartial<User>[]) => {
    const initUser = userRepository.create(user);
    return await userRepository.save(initUser);
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

  return { createUser, getUserById, getUsers };
}
