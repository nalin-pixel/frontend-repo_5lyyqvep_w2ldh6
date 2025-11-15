import { Link } from 'react-router-dom'

export default function Finanziamenti() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Troviamo i finanziamenti per il tuo marketing</h2>
      <p>Supportiamo la tua azienda nell'accesso a finanza agevolata e contributi a fondo perduto. Gestiamo l'intero iter, dalla verifica dei requisiti alla rendicontazione, per finanziare attività di marketing e innovazione.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
