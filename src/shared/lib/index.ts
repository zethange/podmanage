import { cookies } from "next/headers";
import { UserDto } from "./db";
import * as jose from "jose";

export const KEY = "0000000000000000";
export const ENCODED_KEY = new TextEncoder().encode(KEY);

export async function getSessionData() {
  const encryptedSessionData = cookies().get("session")?.value;
  if (!encryptedSessionData) return null;
  try {
    const { payload } = await jose.jwtVerify(encryptedSessionData, ENCODED_KEY);

    return payload as UserDto;
  } catch (e) {
    console.log(e);
    return null;
  }
}