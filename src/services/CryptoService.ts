import axios from "axios";
import type { TCryptoCurrenciesSchema, TCryptoPriceSchema, TPairSchema } from "../types";
import { CryptoCurrenciesSchema, CryptoPriceSchema } from "../schemas/cripto-schema";

export async function getCryptos(): Promise<TCryptoCurrenciesSchema> {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const { data: { Data } } = await axios.get(url);
  const result = CryptoCurrenciesSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  } else {
    return []
  }
}

export async function fetchCurrentCryptoPrice(pair: TPairSchema): Promise<TCryptoPriceSchema> {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
  const { data: { DISPLAY } } = await axios.get(url)
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
  if (result.success) {
    return result.data
  } else {
    return {} as TCryptoPriceSchema
  }
}