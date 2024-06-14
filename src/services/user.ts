import { DeepPartial } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/entity/User";

export default function userService() {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = async (user: DeepPartial<User>[]) => {
    const initUser = userRepository.create(user);
    const createdUser = await userRepository.save(initUser);
    return createdUser;
  };

  const getUserById = async (id: string) => {
    const user = await userRepository.findOne({ where: { id: parseInt(id) } });
    return user;
  };

  return { createUser, getUserById };
}
