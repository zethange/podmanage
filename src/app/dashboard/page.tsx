'use server'

import { ContainerList } from "~/entities/container";
import { Logout } from "~/features/auth";

export default async function () {
  return (
    <main>
      <span className="text-3xl text-stone-500">Containers</span>
      <ContainerList />
      <Logout />
    </main>
  );
}
