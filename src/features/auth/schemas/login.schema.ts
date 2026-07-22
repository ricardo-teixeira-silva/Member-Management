import { z } from "zod";

export const loginRequestSchema = z.object({
  email: z.string().nonempty("O campo E-mail é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});

export type LoginRequestTypes = z.infer<typeof loginRequestSchema>;
