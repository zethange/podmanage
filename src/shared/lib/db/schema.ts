import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password'),
})

export type UserDto = Omit<typeof users.$inferSelect, 'password'>
export type CreateUserDto = Omit<typeof users.$inferInsert, 'id'>