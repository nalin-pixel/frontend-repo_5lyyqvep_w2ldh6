import { Link } from 'react-router-dom'

export default function SEO() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>SEO</h2>
      <p>Ottimizziamo la tua presenza sui motori di ricerca con audit tecnici, ottimizzazione on-page e strategia di contenuti. Anche con un setup minimo, impostiamo le basi per una crescita organica sostenibile.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
