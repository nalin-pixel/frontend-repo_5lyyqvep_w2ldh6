import { Link } from 'react-router-dom'

export default function DigitalAdvertising() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Aumentiamo il numero dei tuoi clienti</h2>
      <p>Un approccio data-driven: analisi, strategia e creatività per campagne performanti. Riduciamo gli sprechi concentrando il budget sui pubblici più rilevanti, con una profilazione accurata e un monitoraggio continuo dei KPI.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
