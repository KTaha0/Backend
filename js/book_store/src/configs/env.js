import z from "zod";

const schema = z.object({
  PORT: z.coerce.number(),

  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),
});

const result = schema.safeParse(process.env);

if (!result.success) {
  console.error(result.error.format());
  process.exit(1);
}

const validatedEnv = result.data;

export const env = {
  server: {
    port: validatedEnv.PORT,
  },

  db: {
    host: validatedEnv.DB_HOST,
    port: validatedEnv.DB_PORT,
    user: validatedEnv.DB_USER,
    password: validatedEnv.DB_PASSWORD,
    name: validatedEnv.DB_NAME,
  },
};
