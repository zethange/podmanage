import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/libsql/migrator";

import { createClient } from "@libsql/client";

const sqlite = createClient({ url: "file:/data/podmanage.db" })
const db = drizzle(sqlite, { schema });
console.log("Connected to database");

migrate(db, { migrationsFolder: "drizzle" });

export { db };
export * from "./schema";
