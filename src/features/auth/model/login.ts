"use server";

import { eq } from "drizzle-orm";
import { CreateUserDto, UserDto, db, users } from "~/shared/lib/db";
import bcrypt from "bcrypt";

export const loginAction = async (
  dto: CreateUserDto
): Promise<UserDto | undefined> => {
  const userCandidate = await db.query.users.findFirst({
    where: eq(users.username, dto.username),
  });
  if (!userCandidate || !dto.password) return undefined;

  const success = await bcrypt.compare(dto.password, userCandidate.password!);
  if (!success) return undefined

  userCandidate.password = null;

  return userCandidate;
};
