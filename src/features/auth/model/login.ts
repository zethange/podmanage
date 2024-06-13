"use server";

import { eq } from "drizzle-orm";
import { CreateUserDto, UserDto, db, users } from "~/shared/lib/db";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { KEY } from "~/shared/lib";

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

  const token = sign(userCandidate, KEY, { expiresIn: 60 * 60 * 24 });

  cookies().set("session", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // One day
    path: "/",
    sameSite: 'lax',
  });

  return userCandidate;
};
