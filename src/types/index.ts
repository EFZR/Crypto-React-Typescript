import { z } from "zod";
import { CryptoCurrenciesSchema, CryptoCurrencySchema, CurrencySchema } from "../schemas/cripto-schema";

export type TCurrency = z.infer<typeof CurrencySchema>;

export type TCryptoCurrencySchema = z.infer<typeof CryptoCurrencySchema>;

export type TCryptoCurrenciesSchema = z.infer<typeof CryptoCurrenciesSchema>;
