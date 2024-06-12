"use server"

import { CreateUserDto, UserDto, db, users } from "~/shared/lib/db";
import bcrypt from 'bcrypt';

export const registerAction = async (dto: CreateUserDto): Promise<UserDto | undefined> => {
  if (!dto.password) return;
  dto.password = await bcrypt.hash(dto.password, 10);

  const [user] = await db.insert(users).values(dto).returning()
  user.password = null

  return user
};
