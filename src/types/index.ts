import { z } from "zod";
import {
  CryptoCurrenciesSchema,
  CryptoCurrencySchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairSchema
} from "../schemas/cripto-schema";

export type TCurrency = z.infer<typeof CurrencySchema>;

export type TCryptoCurrencySchema = z.infer<typeof CryptoCurrencySchema>;

export type TCryptoCurrenciesSchema = z.infer<typeof CryptoCurrenciesSchema>;

export type TPairSchema = z.infer<typeof PairSchema>

export type TCryptoPriceSchema = z.infer<typeof CryptoPriceSchema>
