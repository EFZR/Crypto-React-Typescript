import { z } from "zod";

export const CurrencySchema = z.object({
  name: z.string(),
  code: z.string(),
});
