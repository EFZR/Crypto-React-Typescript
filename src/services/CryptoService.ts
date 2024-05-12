import axios from "axios";
import type { TCryptoCurrenciesSchema } from "../types";
import { CryptoCurrenciesSchema } from "../schemas/cripto-schema";

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