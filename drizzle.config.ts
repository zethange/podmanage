import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite", // "mysql" | "sqlite"
  schema: "./src/shared/lib/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: '/data/podmanage.db'
  }
});
