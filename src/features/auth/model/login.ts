"use server";

import { eq } from "drizzle-orm";
import { CreateUserDto, UserDto, db, users } from "~/shared/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { DEFAULT_PHRASE } from "~/shared/lib";
import { cookies } from "next/headers";

export const loginAction = async (
  dto: CreateUserDto
): Promise<UserDto | undefined> => {
  const userCandidate = await db.query.users.findFirst({
    where: eq(users.username, dto.username),
  });
  if (!userCandidate || !dto.password) return undefined;

  const success = await bcrypt.compare(dto.password, userCandidate.password!);
  if (!success) return undefined;

  userCandidate.password = null;

  const token = jwt.sign(userCandidate, DEFAULT_PHRASE, {
    expiresIn: 60 * 60 * 24,
  });

  cookies().set("session", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // One day
    path: "/",
  });

  return userCandidate;
};
