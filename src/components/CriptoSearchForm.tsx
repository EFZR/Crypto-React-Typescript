import { useEffect } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"

export default function CriptoSearchForm() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptoCurrency">Cripto Moneda :</label>
        <select name="criptoCurrency" id="criptoCurrency">
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <input type="submit" value="cotizar" />
    </form>
  )
}
