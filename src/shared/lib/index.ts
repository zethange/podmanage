import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { UserDto } from "./db";

export const DEFAULT_PHRASE = "0000.0000.0000.0000";

export async function getSessionData() {
  const encryptedSessionData = cookies().get("session")?.value;
  if (!encryptedSessionData) return null;
  try {
    const data = jwt.verify(encryptedSessionData, DEFAULT_PHRASE);
    return data as UserDto;
  } catch (e) {
    return null;
  }
}
