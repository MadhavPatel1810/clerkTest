import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["warn", "error"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL + "&connection_limit=5",
      },
    },
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
