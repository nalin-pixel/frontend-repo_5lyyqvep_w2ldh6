import { Link } from 'react-router-dom'

export default function Ecommerce() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Realizziamo il tuo store online</h2>
      <p>L'e-commerce è un motore di crescita per le aziende italiane. Progettiamo e realizziamo store online performanti, integrati con CRM, sistemi di pagamento e logistica, con un'attenzione particolare alla user experience e alla conversione.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
