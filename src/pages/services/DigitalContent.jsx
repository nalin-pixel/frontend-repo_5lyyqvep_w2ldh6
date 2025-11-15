import { Link } from 'react-router-dom'

export default function DigitalContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Mettiamo in relazione clienti e azienda</h2>
      <p>Costruiamo una comunicazione omnicanale che racconta la tua azienda con uno storytelling autentico. Contenuti per social media, blog, newsletter e materiali editoriali che generano valore e relazioni durature.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
