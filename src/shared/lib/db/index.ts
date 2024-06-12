import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database("/data/podmanage.db", { create: true });
const db = drizzle(sqlite, { schema });
console.log("Connected to database");

migrate(db, { migrationsFolder: "drizzle" });

export { db };
export * from "./schema";
