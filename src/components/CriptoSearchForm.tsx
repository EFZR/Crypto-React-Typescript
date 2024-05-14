import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { TPairSchema } from "../types"
import Error from "./Error"

export default function CriptoSearchForm() {
  //#region State

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const fetchData = useCryptoStore((state) => state.fetchData)
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TPairSchema>()

  useEffect(() => {
    fetchCryptos()
  }, [])

  //#endregion

  async function onSubmit(data: TPairSchema) {
    await fetchData(data)
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          id="currency"
          {...register("currency", { required: "La moneda local es necesaria." })}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      {errors.currency && <Error>{errors.currency.message}</Error>}

      <div className="field">
        <label htmlFor="criptoCurrency">Cripto Moneda :</label>
        <select
          id="criptoCurrency"
          {...register("criptocurrency", { required: "La cripto moneda es necesaria." })}
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((cryptoCurrency) => (
            <option key={cryptoCurrency.CoinInfo.Name} value={cryptoCurrency.CoinInfo.Name}>
              {cryptoCurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      {errors.criptocurrency && <Error>{errors.criptocurrency.message}</Error>}

      <input type="submit" value="cotizar" />
    </form>
  )
}
