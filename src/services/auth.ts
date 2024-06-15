import { AppDataSource } from "../db/data-source";
import { User } from "../db/entity/User";
import { compare, generateToken } from "../helpers";
import { ErrorWithStatus } from "../types/error";

export default function authService() {
  const userRepository = AppDataSource.getRepository(User);

  const login = async (email: string, password: string) => {
    const user = await userRepository.findOne({ where: { email: email } });

    const error = new Error("Invalid email or password") as ErrorWithStatus;

    if (!user) {
      error.status = 401;
      throw error;
    }

    const isMatch = compare(password, user.password);

    if (!isMatch) {
      error.status = 401;

      throw error;
    }

    const token = generateToken({ id: user.id });

    return { user, token };
  };

  return { login };
}
