import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../services/CryptoService";
import { TCryptoCurrencySchema } from "../types";

type TCryptoStore = {
  cryptoCurrencies: TCryptoCurrencySchema[],
  fetchCryptos: () => Promise<void>,
}

//#region Store

export const useCryptoStore = create<TCryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies
      }))
    },
  }))
);

//#endregion
