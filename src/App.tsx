import CriptoPriceDisplay from "./components/CriptoPriceDisplay"
import CriptoSearchForm from "./components/CriptoSearchForm"
import "./index.css"


export default function App() {
  return (
    <div className="container">
      <h1 className="app__title">
        Cotizador de {""}
        <span>Cripto Monedas</span>
      </h1>

      <div className="content">
        <CriptoSearchForm />
        <CriptoPriceDisplay />
      </div>
    </div>
  )
}
