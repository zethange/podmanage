"use server";

import { ContainerList } from "~/entities/container";

export default async function () {
  return (
    <main className="grid gap-2">
      <span className="text-3xl text-stone-500">Containers</span>
      <ContainerList />
    </main>
  );
}
