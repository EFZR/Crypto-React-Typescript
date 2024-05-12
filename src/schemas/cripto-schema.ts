import { z } from "zod";

export const CurrencySchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CryptoCurrencySchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  })
})

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema)
