"use server";

import { Card } from "~/shared/ui/card";
import { LoginForm, RegisterForm, registerAction } from "~/features/auth";
import { db } from "~/shared/lib/db";
import { users } from "~/shared/lib/db/schema";
import { sql } from "drizzle-orm";

async function loadUserCount(): Promise<number> {
  const [{ count }] = await db.select({ count: sql`count(*)` }).from(users);

  return count as number;
}

export default async function () {
  const userCount = await loadUserCount();

  return (
    <main className="w-[100dvw] h-[100vh] flex items-center justify-center">
      <Card className="md:max-w-[420px] max-md:w-[95%]">
        <img
          src="https://podman.io/assets/images/podman-logo-orig-595af17fb326f4b7cadfa3be142bf810.png"
          alt="Podman logo"
          className=""
        />

        {userCount == 0 ? <RegisterForm /> : <LoginForm />}
      </Card>
    </main>
  );
}
