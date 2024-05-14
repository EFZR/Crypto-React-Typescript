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

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
})

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
})
