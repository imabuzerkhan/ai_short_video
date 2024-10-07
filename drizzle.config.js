/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/configs/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:y3Uk9rWBRbZu@ep-lively-bird-a5amedtn.us-east-2.aws.neon.tech/neondb?sslmode=require"
  }
};