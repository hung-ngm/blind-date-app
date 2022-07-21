import { User } from "../../types/user";

export const getAge = (user: User | null) => {
  if (!user || !user.birthday) return 0;
  return new Date().getFullYear() - user.birthday.getFullYear()
}