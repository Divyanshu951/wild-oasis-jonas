import {
  boolean,
  integer,
  json,
  numeric,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const cabinsTable = pgTable("cabins", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  maxCapacity: integer().notNull(),
  regularPrice: numeric().notNull(),
  discount: numeric().notNull(),
  description: varchar().notNull(),
  image: varchar().notNull(),
  capacity: integer(),
  pricePerNight: numeric("price_per_night"),
  amenities: json(),
  isActive: boolean("is_active").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
