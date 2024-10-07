
import { pgTable ,boolean, serial, varchar  } from "drizzle-orm/pg-core"; 

export const users = pgTable('users', {
  id: serial("id").primaryKey(),
  Name: varchar("name").notNull(), 
  email: varchar("email").notNull(), 
  imageUrl: varchar("imageUrl"),
  Subscription: boolean("subscription").default(false) // This seems correct
});
