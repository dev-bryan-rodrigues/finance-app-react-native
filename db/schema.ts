import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  description: text("description").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  value: integer("value").default(0),
});

export const outflows = sqliteTable("outflows", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  description: text("description").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  value: integer("value").default(0),
});

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("description").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
});

export type Entrie = typeof entries.$inferSelect;
export type Outflow = typeof outflows.$inferSelect;
export type Task = typeof tasks.$inferSelect;
