import { z } from "zod";
import { CurrencySchema } from "../schemas/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
