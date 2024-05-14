import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, fetchCurrentCryptoPrice } from "../services/CryptoService";
import { TCryptoCurrencySchema, TCryptoPriceSchema, TPairSchema } from "../types";

type TCryptoStore = {
  cryptoCurrencies: TCryptoCurrencySchema[],
  result: TCryptoPriceSchema,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: TPairSchema) => Promise<void>,
}

//#region Store

export const useCryptoStore = create<TCryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as TCryptoPriceSchema,
    loading: false,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies
      }))
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }))

      const result = await fetchCurrentCryptoPrice(pair);

      set(() => ({
        loading: false,
        result,
      }))
    }
  }))
);

//#endregion
